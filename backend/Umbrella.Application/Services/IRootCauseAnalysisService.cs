namespace Umbrella.Application.Services
{
    /// <summary>
    /// Service for root cause analysis using data correlation and graph analysis
    /// </summary>
    public interface IRootCauseAnalysisService
    {
        Task<RootCauseAnalysisDto> AnalyzeAnomalyAsync(Guid anomalyId);
        Task<IEnumerable<RootCauseAnalysisDto>> AnalyzeMetricChangeAsync(Guid metricId);
        Task<IEnumerable<CorrelationDto>> FindCorrelationsAsync(Guid companyId, string metricKey);
    }

    public class RootCauseAnalysisDto
    {
        public Guid Id { get; set; }
        public Guid CompanyId { get; set; }
        public string ProblemDescription { get; set; } = string.Empty;
        public List<CauseHypothesis> PossibleCauses { get; set; } = new();
        public CauseHypothesis? MostLikelyCause { get; set; }
        public List<CorrelationDto> SupportingEvidence { get; set; } = new();
        public DateTime AnalyzedAt { get; set; }
    }

    public class CauseHypothesis
    {
        public string Cause { get; set; } = string.Empty;
        public decimal Probability { get; set; }
        public string Description { get; set; } = string.Empty;
        public List<string> RelatedMetrics { get; set; } = new();
    }

    public class CorrelationDto
    {
        public string MetricA { get; set; } = string.Empty;
        public string MetricB { get; set; } = string.Empty;
        public decimal CorrelationCoefficient { get; set; }
        public string Relationship { get; set; } = string.Empty;
    }
}
