using AutoMapper;
using TicketApi.Models;

namespace TicketApi.Profiles
{
    public class TicketOptionProfile : Profile
    {
        public TicketOptionProfile()
        {
            CreateMap<TicketOption, TicketOptionDto>().ForMember(
                dest => dest.Id,
                opt => opt.MapFrom(src => $"{src.TicketOptionId}")
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