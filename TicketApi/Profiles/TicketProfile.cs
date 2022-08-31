using AutoMapper;
using TicketApi.Models;

namespace TicketApi.Profiles
{
    public class TicketProfile : Profile
    {
        public TicketProfile()
        {
            CreateMap<Ticket, TicketDto>().ForMember(
                dest => dest.Id,
                opt => opt.MapFrom(src => $"{src.TicketId}")
            ).ForMember(
                dest => dest.Price,
                opt => opt.MapFrom(src => $"{src.Price}")
            ).ForMember(
                dest => dest.TakePlace,
                opt => opt.MapFrom(src => $"{src.TakePlace}")
            );
        }
    }
}