namespace Umbrella.Application.Services
{
    /// <summary>
    /// Service for managing external system integrations
    /// </summary>
    public interface IIntegrationService
    {
        Task<IntegrationDto> GetByIdAsync(Guid id);
        Task<IEnumerable<IntegrationDto>> GetByCompanyAsync(Guid companyId);
        Task<IntegrationDto> CreateAsync(CreateIntegrationDto dto);
        Task<IntegrationDto> UpdateAsync(Guid id, UpdateIntegrationDto dto);
        Task DeleteAsync(Guid id);
        Task SyncDataAsync(Guid integrationId);
    }
}
