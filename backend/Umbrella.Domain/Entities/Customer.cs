namespace Umbrella.Domain.Entities
{
    /// <summary>
    /// Represents a customer entity in the unified data model
    /// </summary>
    public class Customer
    {
        public Guid Id { get; set; }
        public Guid CompanyId { get; set; }
        public required string Name { get; set; }
        public string? Email { get; set; }
        public string? Phone { get; set; }
        public string? Industry { get; set; }
        public decimal? Revenue { get; set; }
        public string? Status { get; set; } // Active, Inactive, Churn Risk
        public DateTime? LastActivityAt { get; set; }
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
        public DateTime? UpdatedAt { get; set; }
        public string? ExternalId { get; set; } // ID from source system
        public string? SourceSystem { get; set; } // "Salesforce", "HubSpot", etc.

        // Navigation
        public virtual Company? Company { get; set; }
    }
}
