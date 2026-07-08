namespace Umbrella.Application.Dtos
{
    public class IntegrationDto
    {
        public Guid Id { get; set; }
        public Guid CompanyId { get; set; }
        public string ConnectorType { get; set; } = string.Empty;
        public string Name { get; set; } = string.Empty;
        public string? Description { get; set; }
        public bool IsActive { get; set; }
        public DateTime? LastSyncAt { get; set; }
        public DateTime CreatedAt { get; set; }
    }

    public class CreateIntegrationDto
    {
        public Guid CompanyId { get; set; }
        public string ConnectorType { get; set; } = string.Empty;
        public string Name { get; set; } = string.Empty;
        public string? Description { get; set; }
        public Dictionary<string, string>? Credentials { get; set; }
    }

    public class UpdateIntegrationDto
    {
        public string? Name { get; set; }
        public string? Description { get; set; }
        public bool? IsActive { get; set; }
        public Dictionary<string, string>? Credentials { get; set; }
    }
}
