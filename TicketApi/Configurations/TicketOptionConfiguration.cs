using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using TicketApi.Models;

namespace TicketApi.Configurations
{
    public class TicketOptionConfiguration : IEntityTypeConfiguration<TicketOption>
    {
        public void Configure(EntityTypeBuilder<TicketOption> builder)
        {
            builder.HasKey(t => t.TicketOptionId);
            builder.Property(t => t.TicketOptionId).UseIdentityColumn();

            builder.HasOne(t => t.Event).WithMany(e => e.TicketOptions).HasForeignKey(t => t.EventId);

            builder.ToTable("TicketOption");
        }
    }
}