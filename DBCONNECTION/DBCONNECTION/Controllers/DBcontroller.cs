using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using DBCONNECTION.Models;
using System.Linq;
using Microsoft.AspNetCore.Mvc.Infrastructure;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Cors;
using System.Xml.Linq;
using static Microsoft.EntityFrameworkCore.DbLoggerCategory;

namespace DBCONNECTION.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    //[EnableCors("AllowOrigin")]
    public class DBcontroller : ControllerBase
    {
        public readonly BrandContext _brandContext;
        public readonly InternshipContext _internshipContext;
        public DBcontroller(BrandContext brandContext,InternshipContext internshipContext)
        {
            _brandContext = brandContext;
            _internshipContext = internshipContext; 
        }



        [HttpPost]
        public async Task<IActionResult> AddData(Brand b)
        {
            _brandContext.Brands.Add(b);
            await _brandContext.SaveChangesAsync();
            return Ok(b);
        }

        //[HttpPost]
        //public async Task<IActionResult> AddProfileData([FromBody] )
        //{
        //    var data = await _brandContext.Brands.ToListAsync();
        //    return Ok(data);
        //}

        //[HttpGet]

        //public async Task<IActionResult> GetBrandWithQuery()
        //{
        //    var query = "Select * from brands";
        //    var result = await _brandContext.Brands.FromSqlRaw(query).ToListAsync();
        //    return Ok(result);
        //}

        [HttpPost]
        [Route("Login")]
        public async Task<IActionResult> Login(Userdatum user)
        {
            var query = "Select * from userdata";
            var result = await _internshipContext.Userdata.FromSqlRaw(query).ToListAsync();
            bool present = false;
            foreach(var data in result)
            {
                if(data.Email ==  user.Email && data.Password == user.Password) present = true;
            }
            return Ok(present);
        }

        //[HttpPost(EducationData)]
        //[Route("EducationData")]

        //public async Task<IActionResult> EducationDataStore(EducationQualificationDatum edm)
        //{
        //    if(edm.)
        //    {

        //    }
        //}

        [HttpGet]
        [Route("getData")]
        public async Task<IActionResult> getData()
        {
            var Collegequery = "Select * from college_table";
            var Streamquery = "SELECT * FROM stream_table";
            var Qualificationquery = "SELECT * FROM qualification";

            var Colleges = await _internshipContext.CollegeTables.FromSqlRaw(Collegequery).ToListAsync();
            var Streams = await _internshipContext.StreamTables.FromSqlRaw(Streamquery).ToListAsync();
            var qualifications = await _internshipContext.Qualifications.FromSqlRaw(Qualificationquery).ToListAsync();

            var result = new
            {
                college = Colleges,
                stream = Streams,
                qualification = qualifications
            };
            return Ok(result);
        }

        [HttpGet]
        public async Task<IActionResult> GetCollegeWithQuery()
        {
            var query = "Select * from college_table";
            var result = await _internshipContext.CollegeTables.FromSqlRaw(query).ToListAsync();
            return Ok(result);
        }
    }
}
