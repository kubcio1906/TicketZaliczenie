using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using TicketApi.Models;

namespace TicketApi.Configurations
{
    public class EventConfiguration : IEntityTypeConfiguration<Event>
    {
        public void Configure(EntityTypeBuilder<Event> builder)
        {
            builder.HasKey(e => e.EventId);
            builder.Property(e => e.EventId).UseIdentityColumn();

            builder.HasMany(e => e.Tickets).WithOne(t => t.Event).HasForeignKey(t => t.TicketId);

            builder.ToTable("Event");
        }
    }
}