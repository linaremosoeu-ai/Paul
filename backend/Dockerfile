FROM mcr.microsoft.com/dotnet/sdk:9.0 AS build

WORKDIR /src

COPY ["Umbrella.Api/Umbrella.Api.csproj", "Umbrella.Api/"]
COPY ["Umbrella.Application/Umbrella.Application.csproj", "Umbrella.Application/"]
COPY ["Umbrella.Infrastructure/Umbrella.Infrastructure.csproj", "Umbrella.Infrastructure/"]
COPY ["Umbrella.Domain/Umbrella.Domain.csproj", "Umbrella.Domain/"]

RUN dotnet restore "Umbrella.Api/Umbrella.Api.csproj"

COPY . .

RUN dotnet build "Umbrella.Api/Umbrella.Api.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "Umbrella.Api/Umbrella.Api.csproj" -c Release -o /app/publish

FROM mcr.microsoft.com/dotnet/aspnet:9.0

WORKDIR /app

COPY --from=publish /app/publish .

EXPOSE 80

ENTRYPOINT ["dotnet", "Umbrella.Api.dll"]
