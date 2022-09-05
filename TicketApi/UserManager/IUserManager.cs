using TicketApi.Models;

namespace TicketApi.UserManager
{
    public interface IUserManager
    {
        void CreatePasswordHash(string password, out byte[] passwordHash, out byte[] passwordSalt);
        bool VerifyPasswordHash(string password, byte[] passwordHash, byte[] passwordSalt);
        Task CreateAsync(CreateUserDto createUser);
        IQueryable<User> FindByEmailAsync(string email);
        IQueryable<User> FindByIdAsync(int id);
        IQueryable<User> FindByRefreshTokenAsync(string token);
        string GenerateJwtToken(User user);
        RefreshToken GenerateRefreshToken();

        Task SaveChangesAsync();
    }
}