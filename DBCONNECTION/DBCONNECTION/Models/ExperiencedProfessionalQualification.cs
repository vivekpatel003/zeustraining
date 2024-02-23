using System;
using System.Collections.Generic;

namespace DBCONNECTION.Models;

public partial class ExperiencedProfessionalQualification
{
    public string Email { get; set; } = null!;

    public int YearsOfExperience { get; set; }

    public int CurrentCtc { get; set; }

    public int ExpectedCtc { get; set; }

    public bool OnNoticePeriod { get; set; }

    public string? OtherTechnologies { get; set; }

    public string? EndDate { get; set; }

    public string? Duration { get; set; }

    public bool TestAppeared { get; set; }

    public string? RoleApplied { get; set; }

    public DateTime? DtCreated { get; set; }

    public DateTime? DtModified { get; set; }

    public virtual ICollection<TechnologyExpertise>? TechnologyExpertises { get; set; } = new List<TechnologyExpertise>();
}
