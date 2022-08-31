FROM		mcr.microsoft.com/dotnet/sdk:6.0-alpine as build-env
WORKDIR		/src

RUN			apk add --no-cache icu-libs
ENV			DOTNET_SYSTEM_GLOBALIZATION_INVARIANT=false

COPY		*.csproj ./
RUN			dotnet restore

COPY		. .

FROM		build-env AS publish
RUN			dotnet publish -c Release -o out

FROM		mcr.microsoft.com/dotnet/aspnet:6.0-alpine
WORKDIR		/src
COPY		--from=publish /src/out .

RUN			apk add --no-cache icu-libs
ENV			DOTNET_SYSTEM_GLOBALIZATION_INVARIANT=false

ENTRYPOINT	[ "dotnet", "TicketApi.dll" ]