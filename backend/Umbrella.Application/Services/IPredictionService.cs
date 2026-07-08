namespace Umbrella.Application.Services
{
    /// <summary>
    /// Service for generating predictions and forecasts
    /// </summary>
    public interface IPredictionService
    {
        Task<ForecastDto> ForecastRevenueAsync(Guid companyId, int months);
        Task<ForecastDto> ForecastChurnAsync(Guid companyId, int months);
        Task<ForecastDto> ForecastDemandAsync(Guid companyId, int months);
        Task<List<ScenarioResultDto>> SimulateScenarioAsync(Guid companyId, ScenarioDto scenario);
    }

    public class ForecastDto
    {
        public string MetricName { get; set; } = string.Empty;
        public List<ForecastPoint> DataPoints { get; set; } = new();
        public decimal Confidence { get; set; }
        public string Trend { get; set; } = string.Empty; // "Up", "Down", "Stable"
        public List<string> Risks { get; set; } = new();
    }

    public class ForecastPoint
    {
        public DateTime Date { get; set; }
        public decimal Value { get; set; }
        public decimal? UpperBound { get; set; }
        public decimal? LowerBound { get; set; }
    }

    public class ScenarioDto
    {
        public string Name { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;
        public Dictionary<string, decimal> Changes { get; set; } = new();
        public int MonthsToSimulate { get; set; } = 12;
    }

    public class ScenarioResultDto
    {
        public string Scenario { get; set; } = string.Empty;
        public Dictionary<string, decimal> ProjectedMetrics { get; set; } = new();
        public List<string> Risks { get; set; } = new();
        public List<string> Opportunities { get; set; } = new();
    }
}
