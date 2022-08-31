namespace TicketApi.Models
{
    public class Event
    {
        public Event()
        {
            this.Tickets = new HashSet<Ticket>();
        }

        public int EventId { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string Image { get; set; }

        public virtual ICollection<Ticket> Tickets { get; set; }
    }

    public class EventDto
    {
        public string Id { get; set; }
        public string Image { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public HashSet<TicketDto> Tickets { get; set; }
    }
}