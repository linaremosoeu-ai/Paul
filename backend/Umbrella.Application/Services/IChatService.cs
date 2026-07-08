namespace Umbrella.Application.Services
{
    /// <summary>
    /// Service for natural language queries (Chat interface)
    /// </summary>
    public interface IChatService
    {
        Task<ChatResponseDto> AskQuestionAsync(Guid companyId, Guid userId, string question);
        Task<IEnumerable<ChatHistoryDto>> GetChatHistoryAsync(Guid companyId, int limit = 50);
    }

    public class ChatResponseDto
    {
        public Guid ConversationId { get; set; }
        public string Question { get; set; } = string.Empty;
        public string Answer { get; set; } = string.Empty;
        public string AnswerType { get; set; } = string.Empty; // "Status", "Analysis", "Prediction", "Recommendation"
        public List<SupportingEvidenceDto> SupportingEvidence { get; set; } = new();
        public List<FollowUpSuggestionDto> FollowUpSuggestions { get; set; } = new();
        public DateTime AnsweredAt { get; set; }
    }

    public class SupportingEvidenceDto
    {
        public string Title { get; set; } = string.Empty;
        public decimal? Value { get; set; }
        public string? Unit { get; set; }
        public DateTime? MeasuredAt { get; set; }
    }

    public class FollowUpSuggestionDto
    {
        public string Question { get; set; } = string.Empty;
        public string Context { get; set; } = string.Empty;
    }

    public class ChatHistoryDto
    {
        public Guid ConversationId { get; set; }
        public string Question { get; set; } = string.Empty;
        public string Answer { get; set; } = string.Empty;
        public DateTime Timestamp { get; set; }
    }
}
