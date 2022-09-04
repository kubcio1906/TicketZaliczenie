

using System.ComponentModel.DataAnnotations;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Text;
using AutoMapper;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using TicketApi.DbContexts;
using TicketApi.Models;

namespace TicketApi.UserManager
{
    public class UserManager : IUserManager
    {
        private readonly IConfiguration _configuration;
        private readonly ApplicationContext _applicationContext;
        private readonly IMapper _mapper;

        public UserManager(IConfiguration configuration, ApplicationContext applicationContext, IMapper mapper)
        {
            _configuration = configuration;
            _applicationContext = applicationContext;
            _mapper = mapper;
        }

        public Task CreateAsync(CreateUserDto createUser)
        {
            var user = _mapper.Map<CreateUserDto, User>(createUser);
            CreatePasswordHash(createUser.Password, out byte[] passwordHash, out byte[] passwordSalt);

            user.PasswordHash = passwordHash;
            user.PasswordSalt = passwordSalt;

            _applicationContext.Users.Add(user);

            return _applicationContext.SaveChangesAsync();
        }

        public IQueryable<User> FindByEmailAsync(string email)
        {
            return _applicationContext.Users.Where(u => u.Email == email);//AsNoTracking().FirstOrDefaultAsync();
        }

        public void CreatePasswordHash(string password, out byte[] passwordHash, out byte[] passwordSalt)
        {
            using (var hmac = new HMACSHA512())
            {
                passwordSalt = hmac.Key;
                passwordHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
            }
        }

        public Task SaveChangesAsync()
        {
            return _applicationContext.SaveChangesAsync();
        }

        public bool VerifyPasswordHash(string password, byte[] passwordHash, byte[] passwordSalt)
        {
            using (var hmac = new HMACSHA512(passwordSalt))
            {
                var computedHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
                return computedHash.SequenceEqual(passwordHash);
            }
        }

        public string GenerateJwtToken(User user)
        {
            var claims = new[]
            {
                new Claim(ClaimTypes.NameIdentifier, $"{user.UserId}"),
                new Claim(ClaimTypes.Name, user.UserName)
            };

            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["JWT:Secret"]));
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(claims),
                Expires = DateTime.UtcNow.AddDays(1),
                SigningCredentials = new SigningCredentials(key, SecurityAlgorithms.HmacSha256Signature)
            };

            var tokenHandler = new JwtSecurityTokenHandler();
            var token = tokenHandler.CreateToken(tokenDescriptor);

            return tokenHandler.WriteToken(token);
        }

        public RefreshToken GenerateRefreshToken()
        {
            var refreshToken = new RefreshToken
            {
                Token = Convert.ToBase64String(RandomNumberGenerator.GetBytes(64)),
                Expires = DateTime.Now.AddDays(7),
                Created = DateTime.Now
            };

            return refreshToken;
        }
    }

}