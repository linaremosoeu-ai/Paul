namespace Umbrella.Domain.Entities
{
    /// <summary>
    /// Represents a company/organization in Umbrella
    /// </summary>
    public class Company
    {
        public Guid Id { get; set; }
        public required string Name { get; set; }
        public string? Description { get; set; }
        public string? Industry { get; set; }
        public string? Country { get; set; }
        public bool IsActive { get; set; } = true;
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
        public DateTime? UpdatedAt { get; set; }

        // Navigation
        public virtual ICollection<User> Users { get; set; } = new List<User>();
        public virtual ICollection<Integration> Integrations { get; set; } = new List<Integration>();
    }
}
