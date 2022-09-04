using AutoMapper;
using TicketApi.Models;
using TicketApi.UserManager;

namespace TicketApi.Profiles
{
    public class UserProfile : Profile
    {
        public UserProfile()
        {
            CreateMap<CreateUserDto, User>();
            CreateMap<LoginUserDto, User>();
        }
    }
}