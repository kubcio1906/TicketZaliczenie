using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TicketApi.Models;
using TicketApi.UserManager;

namespace TicketApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        private readonly IUserManager _userManager;
        private readonly IMapper _mapper;

        public AuthController(IConfiguration configuration, IUserManager userManager, IMapper mapper)
        {
            _configuration = configuration;
            _userManager = userManager;
            _mapper = mapper;
        }

        private void SetRefreshTokenCookie(RefreshToken newRefreshToken)
        {
            var cookieOptions = new CookieOptions
            {
                HttpOnly = true,
                Expires = newRefreshToken.Expires
            };
            Response.Cookies.Append("refreshToken", newRefreshToken.Token, cookieOptions);
        }

        [HttpPost("user-login")]
        public async Task<ActionResult<string>> UserLogin([FromBody] LoginUserDto loginUser)
        {
            var userEntity = await _userManager.FindByEmailAsync(loginUser.Email).FirstOrDefaultAsync();
            if (userEntity == null)
            {
                return BadRequest("User not found.");
            }
            if (!_userManager.VerifyPasswordHash(loginUser.Password, userEntity.PasswordHash, userEntity.PasswordSalt))
            {
                return BadRequest("Wrong password.");
            }

            var token = _userManager.GenerateJwtToken(userEntity);
            var refreshToken = _userManager.GenerateRefreshToken();
            SetRefreshTokenCookie(refreshToken);

            userEntity.RefreshToken = refreshToken.Token;
            userEntity.RefreshTokenCreated = refreshToken.Created;
            userEntity.RefreshTokenExpires = refreshToken.Expires;

            await _userManager.SaveChangesAsync();

            return Ok(token);
        }

        [HttpPost("refresh-token")]
        public async Task<ActionResult<string>> RefreshToken()
        {
            // var refreshToken = Request.Cookies["refreshToken"];

            //wyciagniecie usera z encji

            // if (!user.RefreshToken.Equals(refreshToken))
            // {
            //     return Unauthorized("Invalid Refresh Token.");
            // }

            // var token = _userManager.GenerateJwtToken(userEntity);

            // SetRefreshTokenCookie(refreshToken);

            return Ok("");
        }

        [HttpPost("user-register")]
        public async Task<ActionResult> UserRegister([FromBody] CreateUserDto createUser)
        {
            await _userManager.CreateAsync(createUser);
            return Ok();
        }
    }
}