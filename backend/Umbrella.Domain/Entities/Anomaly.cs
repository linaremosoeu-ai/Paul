namespace Umbrella.Domain.Entities
{
    /// <summary>
    /// Represents an anomaly or change detected in business data
    /// </summary>
    public class Anomaly
    {
        public Guid Id { get; set; }
        public Guid CompanyId { get; set; }
        public Guid MetricId { get; set; }
        public required string Description { get; set; }
        public decimal ChangePercentage { get; set; }
        public string Severity { get; set; } = "Medium"; // Low, Medium, High, Critical
        public string Status { get; set; } = "Detected"; // Detected, Under Investigation, Resolved
        public DateTime DetectedAt { get; set; } = DateTime.UtcNow;
        public DateTime? ResolvedAt { get; set; }

        // Navigation
        public virtual Company? Company { get; set; }
        public virtual Metric? Metric { get; set; }
    }
}
