namespace Umbrella.Domain.Entities
{
    /// <summary>
    /// Represents an external system integration
    /// </summary>
    public class Integration
    {
        public Guid Id { get; set; }
        public Guid CompanyId { get; set; }
        public required string ConnectorType { get; set; } // "Salesforce", "HubSpot", "QuickBooks", etc.
        public required string Name { get; set; }
        public string? Description { get; set; }
        public bool IsActive { get; set; } = true;
        public DateTime? LastSyncAt { get; set; }
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
        public DateTime? UpdatedAt { get; set; }

        // Navigation
        public virtual Company? Company { get; set; }
    }
}
