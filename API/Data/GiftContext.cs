using Microsoft.EntityFrameworkCore;
using Gifts;
using Models.Users;
using Microsoft.Extensions.Configuration;

namespace Data
{
    public class GiftContext : DbContext
    {
        public DbSet<Gift> Gifts { get; set; }
        public DbSet<User> Users { get; set; }
        public IConfiguration configuration { get; }

        public GiftContext(DbContextOptions<GiftContext> options, IConfiguration configuration) : base(options)
        {
            this.configuration = configuration;
        }

        // protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        // {
        //     if (!optionsBuilder.IsConfigured)
        //     {
        //         optionsBuilder.UseSqlServer(optionsBuilder., this.configuration.GetConnectionString("DefaultConnection")));
        //     }
        // }
        
    }
}