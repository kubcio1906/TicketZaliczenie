using AutoMapper;
using TicketApi.Models;

namespace TicketApi.Profiles
{
    public class EventProfile : Profile
    {
        public EventProfile()
        {
            CreateMap<Event, EventDto>().ForMember(
                dest => dest.Id,
                opt => opt.MapFrom(src => $"{src.EventId}")
            );
        }
    }
}