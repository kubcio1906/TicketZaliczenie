using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using TicketApi.Models;

namespace TicketApi.Configurations
{
    public class TicketConfiguration : IEntityTypeConfiguration<Ticket>
    {
        public void Configure(EntityTypeBuilder<Ticket> builder)
        {
            builder.HasKey(t => t.TicketId);
            builder.Property(t => t.TicketId).UseIdentityColumn();

            builder.HasOne(t => t.Event).WithMany(e => e.Tickets).HasForeignKey(t => t.EventId);

            builder.ToTable("Ticket");
        }
    }
}