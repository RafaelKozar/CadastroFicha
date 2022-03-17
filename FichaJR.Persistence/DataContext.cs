using FichaJR.Domain;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;

namespace FichaJR.Persistence
{
    public class DataContext : DbContext
    {
        //public DbContextOptions<DataContext> Options;
        //public DataContext(DbContextOptions<DataContext> options) : base(options)
        //{
        //    Options = options;
        //}

        protected readonly IConfiguration Configuration;

        public DataContext(IConfiguration configuration) 
        {
            Configuration = configuration;
        }

        protected override void OnConfiguring(DbContextOptionsBuilder options)
        {
            // connect to sql server database
            options.UseSqlite(Configuration.GetConnectionString("DefaultConnection"));
        }

        public DbSet<Ficha> Fichas {get; set;}
    }
}