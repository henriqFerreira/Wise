using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using wise.api.Models;

namespace wise.api.IRepository.Implementations;

public abstract class Repository<TEntity, TContext> : IRepository<TEntity, TContext>
    where TEntity : class
    where TContext : IdentityDbContext<AspNetUser>, new()
{
    internal TContext context;
    internal DbSet<TEntity> set;

    public Repository()
    {
        this.UpdateContext(new TContext());
    }

    public Repository(TContext context)
    {
        this.UpdateContext(context);
    }

    private void UpdateContext(TContext context)
    {
        this.context = context;
        this.set = context.Set<TEntity>();
    }

    public bool Insert(TEntity entity)
    {
        try
        {
            set.Add(entity);
            context.SaveChanges();
            return true;
        }
        catch (Exception)
        {
            return false;
        }
    }
}