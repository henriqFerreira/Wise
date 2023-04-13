using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using wise.api.Models;

namespace wise.api.Context;

public class ApplicationDbContext : IdentityDbContext<AspNetUser> {
    public ApplicationDbContext() {}
    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) {}

    public DbSet<Post> Post { get; set; }
    public DbSet<User> User { get; set; }
}