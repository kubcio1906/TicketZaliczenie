namespace TicketApi.Models
{
    public class EventDto
    {
        public string Id { get; set; }
        public string Image { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public HashSet<TicketOptionDto> TicketOptions { get; set; }
    }
}