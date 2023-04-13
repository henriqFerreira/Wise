using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using wise.api.Models;

namespace wise.api.IRepository;

public interface IRepository<TEntity, TContext>
    where TEntity : class
    where TContext : IdentityDbContext<AspNetUser>, new()
{
    bool Insert(TEntity entity);
}