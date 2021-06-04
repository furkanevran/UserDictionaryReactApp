using Microsoft.EntityFrameworkCore;
using UserDictionaryReactApp.Models;

namespace UserDictionaryReactApp.Data
{
    public class UserDictionaryContext : DbContext
    {
        public UserDictionaryContext(DbContextOptions<UserDictionaryContext> options)
            : base(options)
        {
        }

        public DbSet<User> Users { get; set; }
        public DbSet<ContactInformation> ContactInformations { get; set; }
    }
}
