using Umbrella.Application.Dtos;
using Umbrella.Domain.Entities;

namespace Umbrella.Application.Services
{
    /// <summary>
    /// Service for managing companies
    /// </summary>
    public interface ICompanyService
    {
        Task<CompanyDto> GetByIdAsync(Guid id);
        Task<IEnumerable<CompanyDto>> GetAllAsync();
        Task<CompanyDto> CreateAsync(CreateCompanyDto dto);
        Task<CompanyDto> UpdateAsync(Guid id, UpdateCompanyDto dto);
        Task DeleteAsync(Guid id);
    }
}
