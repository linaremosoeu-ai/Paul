namespace Umbrella.Application.Services
{
    /// <summary>
    /// Service for ingesting and processing data from external sources
    /// </summary>
    public interface IDataIngestionService
    {
        Task IngestCustomerDataAsync(Guid integrationId, object rawData);
        Task IngestTransactionDataAsync(Guid integrationId, object rawData);
        Task IngestEmployeeDataAsync(Guid integrationId, object rawData);
        Task IngestMetricsAsync(Guid companyId, object rawData);
    }
}
