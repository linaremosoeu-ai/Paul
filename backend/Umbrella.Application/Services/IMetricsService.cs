namespace Umbrella.Application.Services
{
    /// <summary>
    /// Service for calculating business metrics and KPIs
    /// </summary>
    public interface IMetricsService
    {
        Task<MetricDto> GetMetricAsync(Guid companyId, string metricKey);
        Task<IEnumerable<MetricDto>> GetAllMetricsAsync(Guid companyId);
        Task RecalculateMetricsAsync(Guid companyId);
        Task<decimal> CalculateRevenueAsync(Guid companyId, DateTime from, DateTime to);
        Task<decimal> CalculateProfitAsync(Guid companyId, DateTime from, DateTime to);
        Task<decimal> CalculateCustomerChurnRateAsync(Guid companyId, DateTime from, DateTime to);
        Task<decimal> CalculateEmployeeUtilizationAsync(Guid companyId, DateTime from, DateTime to);
    }
}
