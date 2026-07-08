namespace Umbrella.Domain.Entities
{
    /// <summary>
    /// Represents a business metric/KPI
    /// </summary>
    public class Metric
    {
        public Guid Id { get; set; }
        public Guid CompanyId { get; set; }
        public required string Name { get; set; }
        public required string Key { get; set; } // "revenue", "profit", "customer_churn", etc.
        public decimal CurrentValue { get; set; }
        public decimal? PreviousValue { get; set; }
        public decimal? TargetValue { get; set; }
        public string? Unit { get; set; } // "USD", "percentage", "count"
        public string? Status { get; set; } // "On Track", "At Risk", "Off Track"
        public DateTime MeasuredAt { get; set; }
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

        // Navigation
        public virtual Company? Company { get; set; }
    }
}
