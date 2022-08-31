namespace TicketApi.Models
{
    public class Ticket
    {
        public int TicketId { get; set; }
        public DateTime TakePlace { get; set; }
        public string City { get; set; }
        public int Price { get; set; }
        public int EventId { get; set; }

        public virtual Event Event { get; set; }
    }

    public class TicketDto
    {
        public string Id { get; set; }
        public string City { get; set; }
        public string Price { get; set; }
        public string TakePlace { get; set; }
    }
}