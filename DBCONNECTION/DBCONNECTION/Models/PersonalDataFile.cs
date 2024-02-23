namespace DBCONNECTION.Models
{
    public class PersonalDataFile
    {
        public string show { get; set; }
        public string Email { get; set; } = null!;

        public string FirstName { get; set; } = null!;

        public string LastName { get; set; } = null!;

        public string PhoneNumber { get; set; } = null!;

        public string ResumeString { get; set; } = null!;

        public string? PortfolioUrl { get; set; }

        public string? EmployeeReffered { get; set; }

        public sbyte IsEmailNotification { get; set; }
        
        public List<int> preferedJobs { get; set; }
        public double Percentage { get; set; }

        public int PassingYear { get; set; }

        public int QId { get; set; }

        public int SId { get; set; }

        public int CId { get; set; }

        public string CollegeLocation { get; set; } = null!;

        public string? CollegeName { get; set; }

        public int YearsOfExperience { get; set; }

        public int CurrentCtc { get; set; }

        public int ExpectedCtc { get; set; }

        public bool OnNoticePeriod { get; set; }

        public string? OtherTechnologies { get; set; }

        public string? EndDate { get; set; }

        public string? Duration { get; set; }

        public bool TestAppeared { get; set; }

        public string? RoleApplied { get; set; }

        public List<int> techExpertise { get; set; }
        public List<int> techFamiliar { get; set; }


    }
}
