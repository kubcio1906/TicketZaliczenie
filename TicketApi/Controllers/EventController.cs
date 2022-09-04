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
        private readonly ApplicationContext _applicationContext;
        private readonly IMapper _mapper;

        public EventController(ApplicationContext applicationContext, IMapper mapper)
        {
            _applicationContext = applicationContext;
            _mapper = mapper;
        }

        [HttpGet("get-all")]
        public async Task<ActionResult<List<EventShortDto>>> GetAll()
        {
            var eventEntities = await _applicationContext.Events.AsNoTracking()
                .ToListAsync();

            return Ok(_mapper.Map<List<Event>, List<EventShortDto>>(eventEntities));
        }

        [HttpGet("get")]
        public async Task<ActionResult<EventDto>> Get([FromQuery] int id)
        {
            var eventEntity = await _applicationContext.Events.AsNoTracking()
                .Include(e => e.TicketOptions)
                .FirstOrDefaultAsync(e => e.EventId == id);

            return Ok(_mapper.Map<Event, EventDto>(eventEntity));
        }
    }
}