namespace Umbrella.Application.Dtos
{
    public class MetricDto
    {
        public Guid Id { get; set; }
        public Guid CompanyId { get; set; }
        public string Name { get; set; } = string.Empty;
        public string Key { get; set; } = string.Empty;
        public decimal CurrentValue { get; set; }
        public decimal? PreviousValue { get; set; }
        public decimal? TargetValue { get; set; }
        public string? Unit { get; set; }
        public string? Status { get; set; }
        public DateTime MeasuredAt { get; set; }
    }

    public class CreateMetricDto
    {
        public Guid CompanyId { get; set; }
        public string Name { get; set; } = string.Empty;
        public string Key { get; set; } = string.Empty;
        public decimal CurrentValue { get; set; }
        public string? Unit { get; set; }
    }
}
