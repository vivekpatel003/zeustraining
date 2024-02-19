
using Microsoft.EntityFrameworkCore;
using DBCONNECTION.Models;
//using BrandContext;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
var connection = builder.Configuration.GetConnectionString("Default");
builder.Services.AddDbContext<BrandContext>(option=>
    option.UseMySql(connection,ServerVersion.AutoDetect(connection))
);

var connectionS = builder.Configuration.GetConnectionString("InternShip");
builder.Services.AddDbContext<InternshipContext>(item =>
    item.UseMySql(connectionS, ServerVersion.AutoDetect(connectionS)));

builder.Services.AddControllers();

//builder.Services.AddCors(options =>
//{
//    options.AddPolicy(name: "AllowOrigin", builder =>
//    {
//        builder.WithOrigins("http://localhost:4200/").AllowAnyHeader().AllowAnyMethod();
//    });
//});
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

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
