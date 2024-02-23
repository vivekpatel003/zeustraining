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


namespace DBCONNECTION.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class DBcontroller : ControllerBase
    {
        public readonly InternshipContext _internshipContext;
        public readonly IUserService _userService;
        public readonly IEmailSender _emailSender;
        public DBcontroller(InternshipContext internshipContext,IUserService userService, IEmailSender emailSender)
        {
            _userService = userService;
            _internshipContext = internshipContext;
            _emailSender = emailSender;
        }

        [HttpPost]
        [Route("EmailSend")]
        public async  Task<IActionResult> getMail(EmailCheck ec)
        {
            try
            {
                const string chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
                StringBuilder stringBuilder = new StringBuilder();
                Random random = new Random();
                
                for (int i = 0; i < 10; i++)
                {
                    int index = random.Next(chars.Length);
                    stringBuilder.Append(chars[index]);
                }
               string message = stringBuilder.ToString();
                await _emailSender.SendEmailAsync(ec.Email,"Your Password", message);
                Userdatum ud = new Userdatum()
                {
                    Email = ec.Email,
                    Password = message,
                    IsAdmin=false
                };
                _internshipContext.Userdata.Add(ud);
                _internshipContext.SaveChanges();
                return Ok("done");
            }
            catch(Exception ex)
            {
                return StatusCode(500,ex.Message);
            }
        }

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
                    return BadRequest("NotExist");
                }
                return Ok(token);
            }
            catch(Exception ex)
            {
                  return StatusCode(500,ex.Message);
            }
        }

        [HttpPost]
        [Route("hallTicket")]
        public async Task<IActionResult> GetHallTicket(EmailCheck ec)
        {
            try
            {
                var query = from user in _internshipContext.UserJobDetails
                            where user.Email == ec.Email
                            select new
                            {
                                timing = user.TimeSlotId
                                
                            };

                foreach(var item in query)
                    {

                    var query2 = from timeSlot in _internshipContext.TimeSlotTables
                                 where timeSlot.TimeSlotId == item.timing
                                 select new
                                 {
                                     time = timeSlot.TimeSlot
                                
                                 };
                    return Ok(query2);
                }
                return Ok("done");
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

        [HttpGet]
        [Route("jobData")]
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
                    return Ok(CombinedQueryResult);
                }
                catch(Exception ex)
                {
                    return StatusCode(500, "An Error Message:" + ex.Message);
                }
            }
            catch (Exception ex)
            {
                return StatusCode(500,"An Error Message:" + ex.Message);
            }
           
        }




        [HttpGet]
        [Route("jobcardformData")]
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
                    return Ok(combinedResult);
                }
                catch (Exception ex)
                {
                    return StatusCode(500, "An error occured: " + ex.Message);
                }
                return Ok();

            }
            catch(Exception ex)
            {
                return StatusCode(500, "An error occured: " + ex.Message);
            }    
        }

        [HttpPost]
        [Route("jobDetails")]
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
                return Ok(query);
            }
            catch(Exception ex)
            {
                  return StatusCode(500,"An error Code:"+ ex.Message);
            }
        }

       

        


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
                return Ok(result);
            }
            catch(Exception ex)
            {
                return StatusCode(500, "An Error Occured: " + ex.Message);
            }
        }
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
                return Ok(present);
            }
            catch(Exception ex)
            {
                return StatusCode(500, "An Error Ocuured: " + ex.Message);
            }
        }
        [HttpPost]
        [Route("UserDataStore")]
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


                    return Ok("Done");
                }
                catch (Exception ex)
                {
                    transaction.Rollback();
                    return StatusCode(500, ex.Message);
                }
            }
        }

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
                    return Ok("Done");
                }
                catch(Exception ex)
                {
                transaction.Rollback();
                    return StatusCode(500,"An Error Occured: "+ex.Message);
                }
            }
        }
        
    }
}
