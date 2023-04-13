using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.OpenApi.Models;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using Microsoft.AspNetCore.Authorization;
using wise.api.Context;
using Microsoft.EntityFrameworkCore;
using wise.api.Models;
using Microsoft.AspNetCore.Identity;
using wise.api.IServices;
using wise.api.IServices.Implementations;

var builder = WebApplication.CreateBuilder(args);
var services = builder.Services;

var config = builder.Configuration;
var env = builder.Environment;

#region Services

services.AddScoped<IServiceToken, ServiceToken>();

#endregion

#region Repositories

#endregion

var connectionString = config.GetConnectionString(env.EnvironmentName);

// Contexto do banco de dados
services.AddDbContext<ApplicationDbContext>(x =>
{
    x.UseMySql(connectionString, ServerVersion.AutoDetect(connectionString));
});

// Default identity
services.AddDefaultIdentity<AspNetUser>()
    .AddRoles<IdentityRole>()
    .AddEntityFrameworkStores<ApplicationDbContext>()
    .AddDefaultTokenProviders();

// Autenticação
services.AddAuthentication(x =>
{
    x.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
    x.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
}).AddJwtBearer(x =>
{
    x.RequireHttpsMetadata = false;
    x.SaveToken = true;
    x.TokenValidationParameters = new TokenValidationParameters
    {
        ValidateIssuerSigningKey = true,
        IssuerSigningKey = new SymmetricSecurityKey(Encoding.ASCII.GetBytes(config.GetValue<string>("Secret"))),
        ValidateIssuer = false,
        ValidateAudience = false,
        ClockSkew = TimeSpan.Zero
    };
});

// Autorização
services.AddAuthorization(x =>
{
    x.DefaultPolicy = new AuthorizationPolicyBuilder()
        .RequireAuthenticatedUser()
        .AddAuthenticationSchemes("Bearer")
        .Build();
});

services.AddControllers()
    .AddNewtonsoftJson(x =>
    {
        x.SerializerSettings.ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore;
    });

services.AddCors();

services.AddSwaggerGen(x =>
{
    x.SwaggerDoc("v1", new OpenApiInfo { Title = "Wise API", Version = "v1" });
});


var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors(x =>
    x.AllowAnyHeader()
        .AllowAnyMethod()
        .WithOrigins("http://localhost:3000")
);

app.UseHttpsRedirection();

app.UseAuthentication();

app.UseAuthorization();

app.MapControllers();

app.UseSwagger();
app.UseSwaggerUI(x =>
{
    x.DocumentTitle = "Documentação - Wise.API";
    x.RoutePrefix = "docs";
    x.SwaggerEndpoint("/swagger/v1/swagger.json", "v1");
});

app.Run();
