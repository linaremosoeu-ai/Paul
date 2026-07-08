namespace Umbrella.Application.Services
{
    /// <summary>
    /// Service for building and querying the business knowledge graph
    /// </summary>
    public interface IKnowledgeGraphService
    {
        Task BuildGraphAsync(Guid companyId);
        Task<IEnumerable<RelationshipDto>> FindRelationshipsAsync(Guid companyId, string entityType, string entityId);
        Task<IEnumerable<InsightDto>> AnalyzePatternAsync(Guid companyId, string pattern);
    }

    public class RelationshipDto
    {
        public string SourceEntity { get; set; } = string.Empty;
        public string SourceId { get; set; } = string.Empty;
        public string RelationType { get; set; } = string.Empty; // "purchased", "managed_by", "located_in"
        public string TargetEntity { get; set; } = string.Empty;
        public string TargetId { get; set; } = string.Empty;
        public Dictionary<string, object>? Properties { get; set; }
    }

    public class InsightDto
    {
        public string Title { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;
        public string Type { get; set; } = string.Empty; // "Pattern", "Trend", "Anomaly"
        public decimal Confidence { get; set; }
        public List<string> RelatedEntities { get; set; } = new();
    }
}
