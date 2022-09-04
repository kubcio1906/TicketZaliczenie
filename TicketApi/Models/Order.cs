namespace TicketApi.Models
{
    public class Order
    {
        public int OrderId { get; set; }
        public DateTime CreatedAt { get; set; }
        public int TicketId { get; set; }
        public int UserId { get; set; }

        public virtual TicketOption TicketOption { get; set; }
    }
}