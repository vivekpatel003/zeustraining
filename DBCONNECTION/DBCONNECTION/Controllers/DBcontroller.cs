using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using DBCONNECTION.Models;
using System.Linq;
using Microsoft.AspNetCore.Mvc.Infrastructure;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Cors;
using System.Xml.Linq;
using static Microsoft.EntityFrameworkCore.DbLoggerCategory;
using Newtonsoft.Json;
using System.Reflection.Metadata.Ecma335;
using System.Transactions;
using DBCONNECTION.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System.Text;
using System.Security.Cryptography;
using System.Runtime.Intrinsics.Arm;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using log4net;


namespace DBCONNECTION.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    
    public class DBcontroller : ControllerBase
    {
        public readonly InternshipContext _internshipContext;
        public readonly IUserService _userService;
        public readonly IEmailSender _emailSender;
        public readonly ICacheService _cachingService;
        private readonly ILog _logger;
        //this  act we perform here is called Dependency Injection
        public DBcontroller( InternshipContext internshipContext,IUserService userService, IEmailSender emailSender, ICacheService cachingService, ILog logger)
        {
            _userService = userService;
            _internshipContext = internshipContext;
            _emailSender = emailSender;
            _cachingService = cachingService;
            _logger = logger;
        }


        //Email Sending API
        [HttpPost]
        [Route("EmailSend")]
        public async  Task<IActionResult> getMail(EmailCheck ec)
        {
            //using the Hashing for data integrity
            using (SHA256 sha = SHA256.Create()) {
                try
                {
                    //the string of character is provided from which password/random string going to be generated
                    const string chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
                    StringBuilder stringBuilder = new StringBuilder();
                    Random random = new Random();

                    for (int i = 0; i < 10; i++)
                    {
                        int index = random.Next(chars.Length);
                        stringBuilder.Append(chars[index]);
                    }
                    //converted to byte stream for hashing purpose which will store it in 8 byte formate
                    byte[] message = sha.ComputeHash(Encoding.UTF8.GetBytes(stringBuilder.ToString()));
                    try { 
                        Userdatum ud = new Userdatum()
                        {
                            Email = ec.Email,
                            Password = Convert.ToBase64String(message),
                            IsAdmin = false
                        };
                        _internshipContext.Userdata.Add(ud);
                        _internshipContext.SaveChanges();
                        await _emailSender.SendEmailAsync(ec.Email, "Your Password", stringBuilder.ToString());
                        _logger.Info("Email Sent");
                            return Ok("done");
                    }
                    catch(Exception ex){
                        _logger.Info("Email not Sent");
                        return BadRequest(ex.Message);
                    }
                }
                catch (Exception ex)
                {
                    _logger.Error("Error in Email Operation");
                    return StatusCode(500, ex.Message);
                }
            }
        }


        //Authentication API 
        [HttpPost]
        [Route("Login")]
        [AllowAnonymous]
        public async Task<IActionResult> Login(Authentication auth)
        {
            try
            {
                var query = from user in _internshipContext.Userdata
                            select user;
                List<Userdatum> resultData = query.ToList();
                
                var token = _userService.Login(auth,resultData);
                if (token == null || token == string.Empty)
                {
                    _logger.Error("Tocken does not exist");
                    return BadRequest("NotExist");
                }
                _logger.Info("Token generated and Sent to Client");
                return Ok(token);
            }
            catch(Exception ex)
            {
                _logger.Error("Error while authentication and tocken generation");
                  return StatusCode(500,ex.Message);
            }
        }

        //Tocken Expiration checking API
        [HttpGet]
        [Route("isTokenExpired/{token}")]
        public async Task<IActionResult> GetTokenStatus(string token)
        {
            try
            {
                if(token==null)
                {
                    return Ok(false);
                }
                var tokenHandler = new JwtSecurityTokenHandler();
                var JwtToken = tokenHandler.ReadToken(token) as JwtSecurityToken;

                if(JwtToken==null)
                {
                    return Ok(true);
                }

                var utcTime = DateTime.UtcNow;
                Console.WriteLine(JwtToken.ValidTo);
                Console.WriteLine(utcTime);
                if(JwtToken.ValidTo < utcTime)
                {
                    return Ok(true);
                }
                return Ok(false);
            }
            catch(Exception ex)
            {
                 return StatusCode(500,ex.Message);
            }
        }


        //API to check Whether the Applicant has already applied or not
        [HttpPost]
        [Route("IsRequestMade")]
        [Authorize]
        public async Task<IActionResult> GetRequestStatus(RequestStatus rs)
        {
            try
            {
            
                 var query = from userData in _internshipContext.UserJobDetails
                              where (rs.Email == userData.Email && rs.JobId == userData.JobId)
                              select userData;
                foreach(var i in query)
                {
                    return Ok("present");
                }
                _logger.Info("Hit to IsRequest Made EndPoint");
                return Ok("Notpresent");
            }
            catch(Exception ex)
            {
                _logger.Error("Error occured while Hitting to IsRequest Made EndPoint");
                return StatusCode(500,ex.Message);       
            }
        }



        //Hall Ticket Time Generation API
        [HttpGet]
        [Route("hallTicket/{time}")]
        [Authorize]
        public async Task<IActionResult> GetHallTicket(int time)
        {
            try
            {
                
                    var query2 = from timeSlot in _internshipContext.TimeSlotTables
                                 where timeSlot.TimeSlotId == time
                                 select new
                                 {
                                     timing = timeSlot.TimeSlot
                                 };
                _logger.Info("Hitting the hallticket Generation Endpoint.");
                    return Ok(query2);
                
            }
            catch (Exception ex)
            {
                _logger.Error("Error occured while Hitting the hallticket Generation Endpoint.");
                return StatusCode(500, ex.Message);
            }
        }

        //Redis Caching API
        [HttpGet]
        [Route("CacheTest")]
        public async Task<IActionResult> GetData()
        {
            var cacheData = _cachingService.GetData<IEnumerable<Userdatum>>("UserData");

            if(cacheData != null && cacheData.Count() > 0)
            {
                Console.WriteLine("Cashed Data:");
                return Ok(cacheData);
            }

            cacheData = await _internshipContext.Userdata.ToListAsync();

            var expiryTime = DateTimeOffset.Now.AddSeconds(30);
            _cachingService.setData<IEnumerable<Userdatum>>("UserData", cacheData, expiryTime);
            return Ok(cacheData);
        }

        //JobData/DashBoard data API 
        [HttpGet]
        [Route("jobData")]
        [Authorize]
        public async Task<IActionResult> GetJobData()
        {
            try
            {
                var query = from jobcard in _internshipContext.Jobcards
                            select new
                            {
                                srNo = jobcard.Srno,
                                jobTitle = jobcard.JobTitle,
                                date = jobcard.Dateandtime,
                                location = jobcard.Location,
                                GeneralInstruction = jobcard.GeneralInstruction,
                                Instructions = jobcard.Instructions,
                                SystemRequirement = jobcard.SystemRequirement,
                                ProcessInfo =  jobcard.ProcessInfo
                            };
                try
                {
                    var query2 = from jobcard in _internshipContext.Jobcards
                                 join JobHasPreference in _internshipContext.JobHasPreferences on jobcard.Srno equals JobHasPreference.JobNumber
                                 join JobRoleDetail in _internshipContext.JobRoleDetails on JobHasPreference.JobRoleId equals JobRoleDetail.JobRoleId
                                 select new
                                 {
                                     srNo = jobcard.Srno,
                                     jobTitle = jobcard.JobTitle,
                                     jobRole = JobRoleDetail.JobRoles
                                 };
                    Dictionary<int, List<string>> Jobroles = new Dictionary<int, List<string>>();

                    foreach (var item in query2)
                    {
                        if (!Jobroles.ContainsKey(item.srNo))
                        {
                            Jobroles[item.srNo] = new List<string>();
                        }
                        Jobroles[item.srNo].Add(item.jobRole);
                    }

                    var CombinedQueryResult = new
                    {
                        Result1 = query,
                        Result2 = Jobroles

                    };
                    _logger.Info("Hitting the JobData EndPoint");
                    return Ok(CombinedQueryResult);
                }
                catch(Exception ex)
                {
                    _logger.Error("Error Occured while Hitting the JobData EndPoint");
                    return StatusCode(500, "An Error Message:" + ex.Message);
                }
            }
            catch (Exception ex)
            {
                _logger.Error("Error Occured while Hitting the JobData EndPoint");
                return StatusCode(500,"An Error Message:" + ex.Message);
            }
           
        }



        //JobCard's form's data related Data API
        [HttpGet]
        [Route("jobcardformData")]
        [Authorize]
        public async Task<IActionResult> GetcardFormData()
        {
            try
            {

                var query = from timeslot in _internshipContext.TimeSlotTables
                            select new
                            {
                                TimeSlotId = timeslot.TimeSlotId,
                                TimeSlot = timeslot.TimeSlot
                            };
                try
                {
                    var query2 = from JobcardRole in _internshipContext.JobRoleDetails
                                select new
                                {
                                    jobroleid = JobcardRole.JobRoleId,
                                    jobtitle = JobcardRole.JobRoles
                                   
                                };
                    var combinedResult = new
                    {
                        result1 = query,
                        result2 = query2
                    };
                    _logger.Info("Hitting the jobcardformData EndPoint");
                    return Ok(combinedResult);
                }
                catch (Exception ex)
                {
                    _logger.Error("Error Occured while Hitting the jobcardformData EndPoint");
                    return StatusCode(500, "An error occured: " + ex.Message);
                }
               
            }
            catch(Exception ex)
            {
                _logger.Error("Error Occured while Hitting the jobcardformData EndPoint");
                return StatusCode(500, "An error occured: " + ex.Message);
            }    
        }

        //Jobcard's Data generation API
        [HttpPost]
        [Route("jobDetails")]
        [Authorize]
        public async Task<IActionResult> GetJobDetails(JobDetailsData jd )
        {
            try
            {
                var query = from jobRole in _internshipContext.JobRoleDetails
                            where jobRole.JobRoles == jd.Name
                            select new
                            {
                                JobRoleId = jobRole.JobRoleId,
                                JobRoles = jobRole.JobRoles,
                                JobIcons = jobRole.JobIcons,
                                GrossCompensation = jobRole.GrossCompensation,
                                RoleDescription = jobRole.RoleDescription,
                                Requirement = jobRole.Requirement
                            };
                _logger.Info("Hitting the jobcardformData EndPoint");
                return Ok(query);
            }
            catch(Exception ex)
            {
                _logger.Error("Error occured while Hitting the jobcardformData EndPoint");
                return StatusCode(500,"An error Code:"+ ex.Message);
            }
        }

       

        

        //Education page dropDown Data related API
        [HttpGet]
        [Route("getData")]
        public async Task<IActionResult> getCollegeData()
        {
            try
            {
                
                var Collegequery = from college in _internshipContext.CollegeTables
                                   select college;
                var Streamquery = from stream in _internshipContext.StreamTables
                                  select stream;
                var Qualificationquery = from qualification in _internshipContext.Qualifications
                                         select qualification;
                
                var result = new
                {
                    college = Collegequery,
                    stream = Streamquery,
                    qualification = Qualificationquery
                };
                _logger.Info("Hitting the getData EndPoint");
                return Ok(result);
            }
            catch(Exception ex)
            {
                _logger.Error("Error occured while Hitting the getData EndPoint");
                return StatusCode(500, "An Error Occured: " + ex.Message);
            }
        }


        //Email present or not checking API
        [HttpPost]
        [Route("isEmailPresent")]
        public async Task<IActionResult> EmailPresent(EmailCheck ec)
        {
            try
            {
                var present = false;
                var query = from pi in _internshipContext.PersonalInformations
                            select new
                            {
                                Email = pi.Email
                            };
                foreach(var i in query)
                {
                    if(ec.Email == i.Email)
                    {
                        present = !present;
                        break;
                    }
                }
                _logger.Info("Hitting the isEmailPresent EndPoint");
                return Ok(present);
            }
            catch(Exception ex)
            {
                _logger.Error("Error occured while Hitting the isEmailPresent EndPoint");
                return StatusCode(500, "An Error Ocuured: " + ex.Message);
            }
        }


        //USER JOBCARD FORM DETAILS SUBMISSION API
        [HttpPost]
        [Route("UserDataStore")]
        [Authorize]
        public async Task<IActionResult> UserDetails(UserDetailsData ud)
        {
            using (var transaction = _internshipContext.Database.BeginTransaction())
            {
                try
                {
                    UserJobDetail ujd = new UserJobDetail
                    {
                        Email = ud.Email,
                        JobId = ud.JobId,
                        TimeSlotId = ud.TimeSlotId,
                        Resume = ud.Resume,
                    };
                    _internshipContext.UserJobDetails.Add(ujd);
                    foreach (var item in ud.jobDetailId)
                    {
                        UserHasPreference uhp = new UserHasPreference
                        {
                            Email = ud.Email,
                            JobRoleId = item
                        };
                        _internshipContext.UserHasPreferences.Add(uhp);
                    }
                    _internshipContext.SaveChanges();
                    transaction.Commit();

                    _logger.Info("Hitting the UserDataStore EndPoint");
                    return Ok("Done");
                }
                catch (Exception ex)
                {
                    transaction.Rollback();
                    _logger.Error("Error occured while Hitting the UserDataStore EndPoint");
                    return StatusCode(500, ex.Message);
                }
            }
        }

        //Personal Data Submission API
        [HttpPost]
        [Route("check")]
        public async Task<IActionResult> transactionDone(PersonalDataFile pdf)
        {
            using (var transaction = _internshipContext.Database.BeginTransaction()) {
                try
                {
                    PersonalInformation p = new PersonalInformation
                    {
                        Email = pdf.Email,
                        FirstName = pdf.FirstName,
                        LastName = pdf.LastName,
                        PhoneNumber = pdf.PhoneNumber,
                        ResumeString = pdf.ResumeString,
                        PortfolioUrl = pdf.PortfolioUrl,
                        EmployeeReffered = pdf.EmployeeReffered,
                        IsEmailNotification = pdf.IsEmailNotification
                    };
                    EducationQualificationDatum e = new EducationQualificationDatum
                    {
                        Email = pdf.Email,
                        Percentage = pdf.Percentage,
                        PassingYear = pdf.PassingYear,
                        QId = pdf.QId,
                        SId = pdf.SId,
                        CId = pdf.CId,
                        CollegeLocation = pdf.CollegeLocation,
                        CollegeName = pdf.CollegeName,
                         
                    };
                    ExperiencedProfessionalQualification ex = new ExperiencedProfessionalQualification
                    {
                        Email = pdf.Email,
                        YearsOfExperience = pdf.YearsOfExperience,
                        CurrentCtc = pdf.CurrentCtc,
                        ExpectedCtc = pdf.ExpectedCtc,
                        OnNoticePeriod = pdf.OnNoticePeriod,
                        OtherTechnologies = pdf.OtherTechnologies,
                        EndDate = pdf.EndDate,
                        Duration = pdf.Duration,
                        TestAppeared = pdf.TestAppeared,
                        RoleApplied = pdf.RoleApplied
                    };
                    FresherProfessionalQualification fre = new FresherProfessionalQualification
                    {
                        Email = pdf.Email,
                        OtherTechnologies = pdf.OtherTechnologies,
                        TestAppeared = pdf.TestAppeared,
                        RoleApplied = pdf.RoleApplied
                    };
                   
                    Console.WriteLine(pdf.show);
                    Console.WriteLine(p.Email);
                    Console.WriteLine(e.Email);
                    Console.WriteLine(ex.Email);
        
                _internshipContext.PersonalInformations.Add(p);
                 foreach (var item in pdf.preferedJobs)
                    {
                        SelectedJob sj = new SelectedJob
                        {
                            Email = pdf.Email,
                            JobRoleId = item
                        };
                        _internshipContext.SelectedJobs.Add(sj);
                    }
                 _internshipContext.EducationQualificationData.Add(e);
                if (pdf.show == "Fresher")
                {
                    _internshipContext.FresherProfessionalQualifications.Add(fre);
                     foreach (var item in pdf.techFamiliar)
                        {
                            TechnologyFamiliar sj = new TechnologyFamiliar
                            {
                                Email = pdf.Email,
                                TechId = item
                            };
                            _internshipContext.TechnologyFamiliars.Add(sj);
                        }
                    }
                else
                {
                    _internshipContext.ExperiencedProfessionalQualifications.Add(ex);
                        foreach (var item in pdf.techFamiliar)
                        {
                            TechnologyFamiliar sj = new TechnologyFamiliar
                            {
                                Email = pdf.Email,
                                TechId = item
                            };
                            _internshipContext.TechnologyFamiliars.Add(sj);
                        }
                        foreach (var item in pdf.techExpertise)
                        {
                            TechnologyExpertise te = new TechnologyExpertise
                            {
                                Email = pdf.Email,
                                TechId = item
                            };
                            _internshipContext.TechnologyExpertises.Add(te);
                        }

                    }
                    _internshipContext.SaveChanges();
                    transaction.Commit();
                    _logger.Info("Hitting the transactionDone EndPoint");
                    return Ok("Done");
                }
                catch(Exception ex)
                {
                    transaction.Rollback();
                    _logger.Error("Error occured while Hitting the transactionDone EndPoint");
                    return StatusCode(500,"An Error Occured: "+ex.Message);
                }
            }
        }
        
    }
}
