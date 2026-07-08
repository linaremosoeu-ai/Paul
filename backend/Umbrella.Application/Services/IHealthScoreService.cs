namespace Umbrella.Application.Services
{
    /// <summary>
    /// Service for business health score calculation and monitoring
    /// </summary>
    public interface IHealthScoreService
    {
        Task<HealthScoreDto> CalculateHealthScoreAsync(Guid companyId);
        Task<IEnumerable<HealthScoreTrendDto>> GetHealthScoreTrendAsync(Guid companyId, int days = 30);
        Task<HealthScoreBreakdownDto> GetDetailedBreakdownAsync(Guid companyId);
    }

    public class HealthScoreDto
    {
        public Guid CompanyId { get; set; }
        public decimal Overall { get; set; } // 0-100
        public decimal Finance { get; set; }
        public decimal Customers { get; set; }
        public decimal Operations { get; set; }
        public decimal Employees { get; set; }
        public decimal Projects { get; set; }
        public string Status { get; set; } = "Healthy"; // Healthy, At Risk, Critical
        public List<string> MainConcerns { get; set; } = new();
        public DateTime CalculatedAt { get; set; }
    }

    public class HealthScoreTrendDto
    {
        public DateTime Date { get; set; }
        public decimal Score { get; set; }
    }

    public class HealthScoreBreakdownDto
    {
        public HealthScoreDto Overall { get; set; } = new();
        public Dictionary<string, List<MetricContributionDto>> CategoryBreakdown { get; set; } = new();
    }

    public class MetricContributionDto
    {
        public string MetricName { get; set; } = string.Empty;
        public decimal ContributionToScore { get; set; };
        public string Status { get; set; } = string.Empty; // Positive, Neutral, Negative
    }
}
