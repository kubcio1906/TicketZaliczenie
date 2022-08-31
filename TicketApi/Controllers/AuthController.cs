using Microsoft.AspNetCore.Mvc;

namespace TicketApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        public AuthController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        [HttpPost]
        public async Task<ActionResult<string>> Register()
        {
            return "test";
        }

        [HttpPost]
        public async Task<ActionResult<string>> Login()
        {
            return "test";
        }
    }
}