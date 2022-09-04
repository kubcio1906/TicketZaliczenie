using System.Text;
using Microsoft.AspNetCore.Authentication.JwtBearer;
// using Microsoft.AspNetCore.Identity;
using Microsoft.IdentityModel.Tokens;
using Microsoft.OpenApi.Models;
using TicketApi.DbContexts;
using TicketApi.RabbitMQ;
using TicketApi.UserManager;

var builder = WebApplication.CreateBuilder(args);
{
    var services = builder.Services;

    services.AddDbContext<ApplicationContext>();
    services.AddScoped<IRabbitMQProducer, RabbitMQProducer>();
    services.AddScoped<IUserManager, UserManager>();
    services.AddAutoMapper(AppDomain.CurrentDomain.GetAssemblies());

    var jwtSecret = builder.Configuration["JWT:Secret"];
    services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme).AddJwtBearer(options =>
    {

        options.TokenValidationParameters = new TokenValidationParameters
        {
            ValidateIssuerSigningKey = true,
            IssuerSigningKey = new SymmetricSecurityKey(Encoding.ASCII.GetBytes(jwtSecret)),
            ValidateIssuer = false,
            ValidateAudience = false,
            // ValidateLifetime = true,
            // ClockSkew = TimeSpan.Zero
        };
    });
    services.AddCors(options =>
    {
        options.AddDefaultPolicy(builder =>
        {
            builder.WithOrigins("http://localhost:4200").AllowAnyHeader().AllowAnyMethod();
        });
    });

    services.AddControllers();
    services.AddSwaggerGen(options =>
    {
        options.AddSecurityDefinition("oauth2", new OpenApiSecurityScheme
        {
            Description = "Standard Authorization header using the Bearer scheme (\"bearer {token}\")",
            In = ParameterLocation.Header,
            Name = "Authorization",
            Type = SecuritySchemeType.ApiKey
        });
    });
}

var app = builder.Build();
{
    if (app.Environment.IsDevelopment())
    {
        app.UseSwagger();
        app.UseSwaggerUI(options =>
        {
            options.SwaggerEndpoint("/swagger/v1/swagger.json", "v1");
        });
    }

    app.UseStatusCodePages();
    app.UseCors();
    app.UseAuthentication();
    app.UseAuthorization();
    app.MapControllers();
}
app.Run();