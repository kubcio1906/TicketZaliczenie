using System.Globalization;
using Microsoft.EntityFrameworkCore;
using TicketApi.Configurations;
using TicketApi.Models;

namespace TicketApi.DbContexts
{

    public partial class ApplicationContext : DbContext
    {
        static string DESCRIPTION_PLACEHOLDER = "W przeciwieństwie do rozpowszechnionych opinii, Lorem Ipsum nie jest tylko przypadkowym tekstem. Ma ono korzenie w klasycznej łacińskiej literaturze z 45 roku przed Chrystusem, czyli ponad 2000 lat temu! Richard McClintock, wykładowca łaciny na uniwersytecie Hampden-Sydney w Virginii, przyjrzał się uważniej jednemu z najbardziej niejasnych słów w Lorem Ipsum – consectetur – i po wielu poszukiwaniach odnalazł niezaprzeczalne źródło: Lorem Ipsum pochodzi z fragmentów (1.10.32 i 1.10.33) „de Finibus Bonorum et Malorum”, czyli „O granicy dobra i zła”, napisanej właśnie w 45 p.n.e. przez Cycerona. Jest to bardzo popularna w czasach renesansu rozprawa na temat etyki. Pierwszy wiersz Lorem Ipsum, „Lorem ipsum dolor sit amet...” pochodzi właśnie z sekcji 1.10.32.\n\nStandardowy blok Lorem Ipsum, używany od XV wieku, jest odtworzony niżej dla zainteresowanych. Fragmenty 1.10.32 i 1.10.33 z „de Finibus Bonorum et Malorum” Cycerona, są odtworzone w dokładnej, oryginalnej formie, wraz z angielskimi tłumaczeniami H. Rackhama z 1914 roku.";

        private readonly IConfiguration _configuration;
        public DbSet<User> Users { get; set; }
        public DbSet<Event> Events { get; set; }
        public DbSet<Order> Orders { get; set; }
        public DbSet<TicketOption> TicketOptions { get; set; }


        public ApplicationContext(DbContextOptions<ApplicationContext> options, IConfiguration configuration) : base(options)
        {
            _configuration = configuration;
        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.ApplyConfiguration<User>(new UserConfiguration());
            builder.ApplyConfiguration<Event>(new EventConfiguration());
            builder.ApplyConfiguration<Order>(new OrderConfiguration());
            builder.ApplyConfiguration<TicketOption>(new TicketOptionConfiguration());

            int eventId = 0;
            builder.Entity<Event>().HasData(
                new Event { EventId = ++eventId, Image = "https://ebilet-media.azureedge.net/media/44177/t-love-900x507450.jpg", Name = "T.Love HAU! HAU!", Description = DESCRIPTION_PLACEHOLDER },
                new Event { EventId = ++eventId, Image = "https://ebilet-media.azureedge.net/media/40659/dp_900x507_ebilet450.jpg", Name = "Deep Purple", Description = DESCRIPTION_PLACEHOLDER },
                new Event { EventId = ++eventId, Image = "https://ebilet-media.azureedge.net/media/43015/900x507-5-2450.jpg", Name = "Placebo", Description = DESCRIPTION_PLACEHOLDER },
                new Event { EventId = ++eventId, Image = "https://ebilet-media.azureedge.net/media/46389/ebilet_907x500_ray-wilson-the-weight-of-man-tour-1450.jpg", Name = "Ray Wilson", Description = DESCRIPTION_PLACEHOLDER },
                new Event { EventId = ++eventId, Image = "https://ebilet-media.azureedge.net/media/44906/maneskin_2023_ebilet_900x507450.jpg", Name = "Måneskin", Description = DESCRIPTION_PLACEHOLDER },
                new Event { EventId = ++eventId, Image = "https://ebilet-media.azureedge.net/media/44758/archive_2022_900x507_eb450.jpg", Name = "Archive", Description = DESCRIPTION_PLACEHOLDER }
            );

            DateTime time = DateTime.ParseExact("2008-06-11T16:11:20.0904778Z", "o", CultureInfo.InvariantCulture, DateTimeStyles.None);
            builder.Entity<TicketOption>().HasData(new TicketOption { EventId = 1, TicketOptionId = 1, City = "Katowice", Place = "Spodek", Price = 149, TakePlace = time });

            base.OnModelCreating(builder);
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseSqlServer(_configuration.GetConnectionString("ApplicationConnection"));
            }
        }
    }

}


