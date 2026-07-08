namespace Umbrella.Application.Services
{
    /// <summary>
    /// Service for generating AI-powered recommendations
    /// </summary>
    public interface IRecommendationService
    {
        Task<IEnumerable<RecommendationDto>> GetRecommendationsAsync(Guid companyId);
        Task<RecommendationDto> GetRecommendationByIdAsync(Guid recommendationId);
        Task<RecommendationDto> CreateRecommendationAsync(CreateRecommendationDto dto);
        Task ApproveRecommendationAsync(Guid recommendationId, Guid userId);
        Task RejectRecommendationAsync(Guid recommendationId, Guid userId, string reason);
        Task<IEnumerable<RecommendationDto>> GetRecommendationsBySeverityAsync(Guid companyId, string severity);
    }

    public class RecommendationDto
    {
        public Guid Id { get; set; }
        public Guid CompanyId { get; set; }
        public string Title { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;
        public string Category { get; set; } = string.Empty; // Sales, Operations, Finance, HR
        public string Severity { get; set; } = "Medium"; // Low, Medium, High, Critical
        public decimal ExpectedImpact { get; set; }
        public string ExpectedImpactUnit { get; set; } = string.Empty; // USD, percentage, count
        public string Status { get; set; } = "Pending"; // Pending, Approved, Rejected, In Progress, Completed
        public List<ActionStepDto> ActionSteps { get; set; } = new();
        public DateTime CreatedAt { get; set; }
        public DateTime? ApprovedAt { get; set; }
    }

    public class CreateRecommendationDto
    {
        public Guid CompanyId { get; set; }
        public string Title { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;
        public string Category { get; set; } = string.Empty;
        public string Severity { get; set; } = "Medium";
        public decimal ExpectedImpact { get; set; }
        public string ExpectedImpactUnit { get; set; } = string.Empty;
    }

    public class ActionStepDto
    {
        public int Order { get; set; }
        public string Title { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;
        public string? AssignedTo { get; set; }
        public DateTime? DueDate { get; set; }
        public string Status { get; set; } = "Pending"; // Pending, In Progress, Completed
    }
}
