# TicketApi

- `dotnet run`
- `dotnet ef migrations add <name_of_migration>`
- `dotnet ef database update`
- `dotnet add package`

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

## PACKAGES

- `Microsoft.AspNetCore.Identity.EntityFrameworkCore`
- `Microsoft.EntityFrameworkCore`
- `Microsoft.EntityFrameworkCore.Design`
- `Microsoft.EntityFrameworkCore.SqlServer`
