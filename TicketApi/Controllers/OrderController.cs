using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using TicketApi.DbContexts;

namespace TicketApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrderController : ControllerBase
    {
        private readonly ApplicationDbContext _context;
        public readonly IMapper _mapper;

        public OrderController(ApplicationDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }
    }
}