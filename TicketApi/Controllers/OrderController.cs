using System.Security.Claims;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using TicketApi.DbContexts;
// using TicketApi.IdentityStorageProvider;
using TicketApi.Models;
using TicketApi.RabbitMQ;

namespace TicketApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrderController : ControllerBase
    {
        private readonly ApplicationContext _applicationContext;
        private readonly IMapper _mapper;
        private readonly IRabbitMQProducer _rabbitMQProducer;

        public OrderController(ApplicationContext applicationContext, IRabbitMQProducer rabbitMQProducer, IMapper mapper)
        {
            _applicationContext = applicationContext;
            _mapper = mapper;
            _rabbitMQProducer = rabbitMQProducer;
        }

        [HttpPost("buy"), Authorize]
        public async Task<ActionResult> Buy([FromBody] PlaceOrderDto placeOrder)
        {
            var userId = this.HttpContext.User.Claims.FirstOrDefault(claim => claim.Type == ClaimTypes.NameIdentifier).Value;

            var orderEntity = _mapper.Map<PlaceOrderDto, Order>(placeOrder);

            orderEntity.UserId = Int32.Parse(userId);
            orderEntity.CreatedAt = DateTime.UtcNow;

            _applicationContext.Orders.Add(orderEntity);
            await _applicationContext.SaveChangesAsync();

            _rabbitMQProducer.SendProductMessage(orderEntity);

            return Ok();
        }
    }
}