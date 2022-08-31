using TicketApi.DbContexts;

var builder = WebApplication.CreateBuilder(args);
{
    var services = builder.Services;

    services.AddDbContext<ApplicationDbContext>();
    services.AddAutoMapper(AppDomain.CurrentDomain.GetAssemblies());
    services.AddControllers();
}

var app = builder.Build();
{
    app.MapControllers();
}
app.Run();