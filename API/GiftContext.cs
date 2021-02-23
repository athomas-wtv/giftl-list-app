using Microsoft.EntityFrameworkCore;
using Gifts;
using Models.Users;

namespace Services
{
    public class GiftContext : DbContext
    {
        public GiftContext(DbContextOptions<GiftContext> options) : base(options)
        {
        }

        public DbSet<Gift> Gifts { get; set; }
        public DbSet<User> Users { get; set; }
    }
}