using Microsoft.EntityFrameworkCore;
using Umbrella.Domain.Entities;

namespace Umbrella.Infrastructure.Persistence
{
    /// <summary>
    /// Entity Framework DbContext for Umbrella
    /// </summary>
    public class UmbrellaDbContext : DbContext
    {
        public UmbrellaDbContext(DbContextOptions<UmbrellaDbContext> options) : base(options)
        {
        }

        public DbSet<Company> Companies { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<Integration> Integrations { get; set; }
        public DbSet<Customer> Customers { get; set; }
        public DbSet<Metric> Metrics { get; set; }
        public DbSet<Anomaly> Anomalies { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            // Company
            modelBuilder.Entity<Company>(entity =>
            {
                entity.HasKey(e => e.Id);
                entity.Property(e => e.Name).IsRequired().HasMaxLength(255);
                entity.Property(e => e.Industry).HasMaxLength(100);
                entity.Property(e => e.Country).HasMaxLength(100);
            });

            // User
            modelBuilder.Entity<User>(entity =>
            {
                entity.HasKey(e => e.Id);
                entity.Property(e => e.Email).IsRequired().HasMaxLength(255);
                entity.Property(e => e.FirstName).IsRequired().HasMaxLength(100);
                entity.Property(e => e.LastName).IsRequired().HasMaxLength(100);
                entity.HasOne(e => e.Company).WithMany(c => c.Users).HasForeignKey(e => e.CompanyId);
            });

            // Integration
            modelBuilder.Entity<Integration>(entity =>
            {
                entity.HasKey(e => e.Id);
                entity.Property(e => e.ConnectorType).IsRequired().HasMaxLength(100);
                entity.Property(e => e.Name).IsRequired().HasMaxLength(255);
                entity.HasOne(e => e.Company).WithMany(c => c.Integrations).HasForeignKey(e => e.CompanyId);
            });

            // Customer
            modelBuilder.Entity<Customer>(entity =>
            {
                entity.HasKey(e => e.Id);
                entity.Property(e => e.Name).IsRequired().HasMaxLength(255);
                entity.Property(e => e.Email).HasMaxLength(255);
                entity.Property(e => e.SourceSystem).HasMaxLength(100);
                entity.Property(e => e.ExternalId).HasMaxLength(255);
                entity.HasOne(e => e.Company).WithMany().HasForeignKey(e => e.CompanyId);
            });

            // Metric
            modelBuilder.Entity<Metric>(entity =>
            {
                entity.HasKey(e => e.Id);
                entity.Property(e => e.Name).IsRequired().HasMaxLength(255);
                entity.Property(e => e.Key).IsRequired().HasMaxLength(100);
                entity.Property(e => e.CurrentValue).HasPrecision(18, 2);
                entity.Property(e => e.PreviousValue).HasPrecision(18, 2);
                entity.Property(e => e.TargetValue).HasPrecision(18, 2);
                entity.HasOne(e => e.Company).WithMany().HasForeignKey(e => e.CompanyId);
            });

            // Anomaly
            modelBuilder.Entity<Anomaly>(entity =>
            {
                entity.HasKey(e => e.Id);
                entity.Property(e => e.Description).IsRequired();
                entity.Property(e => e.ChangePercentage).HasPrecision(18, 2);
                entity.HasOne(e => e.Company).WithMany().HasForeignKey(e => e.CompanyId);
                entity.HasOne(e => e.Metric).WithMany().HasForeignKey(e => e.MetricId);
            });
        }
    }
}
