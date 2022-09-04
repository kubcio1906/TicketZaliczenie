# TicketApi

- `dotnet run`
- `dotnet add package`

## Add migrations

- `dotnet ef migrations add <your_migration_name> -c <your_context_class_name>`
- `dotnet ef migrations add <your_migration_name> -c ApplicationContext`
- `dotnet ef migrations add <your_migration_name> -c IdentityContext`

## Database update

- `dotnet ef database update -c <your_context_class_name>`
- `dotnet ef database update -c ApplicationContext`
- `dotnet ef database update -c IdentityContext`

## Prerequisites for local development

- `.NET 6.0 SDK`
- `.NET 6.0 Runtime`
- `dotnet tool install --global dotnet-ef`

## Omnisharp

- Remove all dll files starting with 'Microsoft.CodeAnalysis' from omnisharp extension if your windows locale is different than en
- Detailed description `https://github.com/OmniSharp/omnisharp-vscode/issues/2513`

## ADS

- (Download Azure Data Studio)[https://aka.ms/getazuredatastudio]
- Select 'Create a connection' than chose 'Connection string' and enter `Server=localhost, 1433;User ID=sa;Password=49R8MXw#49c6wT9Q8!`

## SWAGGER

- `http://localhost:5232/swagger/index.html`

## PACKAGES

- `Microsoft.AspNetCore.Identity.EntityFrameworkCore`
- `Microsoft.EntityFrameworkCore`
- `Microsoft.EntityFrameworkCore.Design`
- `Microsoft.EntityFrameworkCore.SqlServer`

## JWT

- (JWT Decoder)[https://jwt.io/]
- Under 'VERIFY SIGNATURE' check 'secret base64 encoded'

## NUGET FIX

- `dotnet nuget add source --name nuget.org https://api.nuget.org/v3/index.json`
