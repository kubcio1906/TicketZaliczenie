using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TicketApi.DbContexts;
using TicketApi.Models;

namespace TicketApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EventController : ControllerBase
    {
        private readonly ApplicationDbContext _context;
        public readonly IMapper _mapper;

        public EventController(ApplicationDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        [HttpGet]
        public List<EventDto> GetAll()
        {
            return _mapper.Map<List<Event>, List<EventDto>>(_context.Events.Include(e => e.Tickets).ToList());
        }

        // [HttpGet]
        // public List<EventDto> Get(string id)
        // {
        //     return _mapper.Map<List<Event>, List<EventDto>>(_context.Events.ToList());
        // }
    }
}