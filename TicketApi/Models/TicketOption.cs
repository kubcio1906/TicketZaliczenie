namespace TicketApi.Models
{
    public class TicketOption
    {
        public int TicketOptionId { get; set; }
        public DateTime TakePlace { get; set; }
        public string City { get; set; }
        public string Place { get; set; }
        public int Price { get; set; }
        public int EventId { get; set; }

        public virtual Event Event { get; set; }
    }
}