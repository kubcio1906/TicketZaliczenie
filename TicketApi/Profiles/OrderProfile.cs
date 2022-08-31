using AutoMapper;
using TicketApi.Models;

namespace TicketApi.Profiles
{
    public class OrderProfile : Profile
    {
        public OrderProfile()
        {
            CreateMap<Order, OrderDto>().ForMember(
                dest => dest.Id,
                opt => opt.MapFrom(src => $"{src.OrderId}")
            );
        }
    }
}