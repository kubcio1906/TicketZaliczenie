namespace TicketApi.Models
{
    public class Event
    {
        public Event()
        {
            this.TicketOptions = new HashSet<TicketOption>();
        }

        public int EventId { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string Image { get; set; }

        public virtual ICollection<TicketOption> TicketOptions { get; set; }
    }
}