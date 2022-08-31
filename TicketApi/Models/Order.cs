namespace TicketApi.Models
{
    public class Order
    {
        public int OrderId { get; set; }
        public DateTime CreatedAt { get; set; }
        public int TicketId { get; set; }
        public int UserId { get; set; }

        public virtual Ticket Ticket { get; set; }
    }

    public class OrderDto
    {
        public string Id { get; set; }
    }
}