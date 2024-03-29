
using Microsoft.EntityFrameworkCore;
using DBCONNECTION.Models;
using DBCONNECTION.Services;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using Microsoft.EntityFrameworkCore.Storage;
using DBCONNECTION;
//using BrandContext;


var builder = WebApplication.CreateBuilder(args);


// Add services to the container.
//Database dependency injection
var connection = builder.Configuration.GetConnectionString("Default");
builder.Services.AddDbContext<BrandContext>(option=>
    option.UseMySql(connection,ServerVersion.AutoDetect(connection))
);

var connectionS = builder.Configuration.GetConnectionString("InternShip");
builder.Services.AddDbContext<InternshipContext>(item =>
    item.UseMySql(connectionS, ServerVersion.AutoDetect(connectionS)));

//Add DI for log file
builder.Services.AddLog4net();
//controller DI
builder.Services.AddControllers();

//JWT DI
builder.Services.AddScoped<IUserService, UserService>();


//Caching Dependencies Injection
builder.Services.AddScoped<ICacheService, CacheService>();

//Email DI
builder.Services.AddTransient<IEmailSender, EmailSender>();


//Swagger Sevices injection
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();


//Jwt Configuration starts
var jwtIssuer = builder.Configuration.GetSection("Jwt:Issuer").Get<string>();
var jwtKey = builder.Configuration.GetSection("Jwt:Key").Get<string>();

builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
 .AddJwtBearer(options =>
 {
     
     options.TokenValidationParameters = new TokenValidationParameters
     {
         ValidateIssuer = true,
         ValidateAudience = false,
         ValidateLifetime = true,
         ValidateIssuerSigningKey = true,
         ValidIssuer = jwtIssuer,
         ValidAudience = jwtIssuer,
         IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(jwtKey))
     };
 });
//jwt Configuration ends
var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}
app.UseCors(x => x
           .AllowAnyOrigin()
           .AllowAnyMethod()
           .AllowAnyHeader());

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
