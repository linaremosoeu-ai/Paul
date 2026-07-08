namespace Umbrella.Application.Services
{
    /// <summary>
    /// Service for detecting anomalies and unusual patterns in business data
    /// </summary>
    public interface IAnomalyDetectionService
    {
        Task DetectAnomaliesAsync(Guid companyId);
        Task<IEnumerable<AnomalyDto>> GetAnomaliesAsync(Guid companyId, string? severity = null);
        Task<AnomalyDto> GetAnomalyByIdAsync(Guid anomalyId);
        Task MarkAnomalyResolvedAsync(Guid anomalyId);
    }

    public class AnomalyDto
    {
        public Guid Id { get; set; }
        public Guid CompanyId { get; set; }
        public Guid MetricId { get; set; }
        public string Description { get; set; } = string.Empty;
        public decimal ChangePercentage { get; set; }
        public string Severity { get; set; } = "Medium";
        public string Status { get; set; } = "Detected";
        public DateTime DetectedAt { get; set; }
        public DateTime? ResolvedAt { get; set; }
    }
}
