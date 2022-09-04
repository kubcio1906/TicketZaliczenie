namespace TicketApi.Models
{
    public class User
    {
        public int UserId { get; set; }
        public string UserName { get; set; }
        public byte[] PasswordSalt { get; set; }
        public byte[] PasswordHash { get; set; }
        public string Email { get; set; }
        public string RefreshToken { get; set; } = string.Empty;
        public DateTime RefreshTokenCreated { get; set; }
        public DateTime RefreshTokenExpires { get; set; }
    }
}