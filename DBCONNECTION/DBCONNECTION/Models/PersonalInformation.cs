using System;
using System.Collections.Generic;

namespace DBCONNECTION.Models;

public partial class PersonalInformation
{
    public string Email { get; set; } = null!;

    public string FirstName { get; set; } = null!;

    public string LastName { get; set; } = null!;

    public string PhoneNumber { get; set; } = null!;

    public string ResumeString { get; set; } = null!;

    public string? PortfolioUrl { get; set; }

    public string? EmployeeReffered { get; set; }

    public sbyte IsEmailNotification { get; set; }

    public DateTime? DtCreated { get; set; }

    public DateTime? DtModified { get; set; }

    public virtual ICollection<SelectedJob> SelectedJobs { get; set; } = new List<SelectedJob>();
}
