namespace Umbrella.Domain.Entities
{
    /// <summary>
    /// Represents a user in the Umbrella system
    /// </summary>
    public class User
    {
        public Guid Id { get; set; }
        public required string Email { get; set; }
        public required string FirstName { get; set; }
        public required string LastName { get; set; }
        public string? PhoneNumber { get; set; }
        public bool IsActive { get; set; } = true
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
        public DateTime? UpdatedAt { get; set; }
        public Guid CompanyId { get; set; }

        // Navigation
        public virtual Company? Company { get; set; }
    }
}
