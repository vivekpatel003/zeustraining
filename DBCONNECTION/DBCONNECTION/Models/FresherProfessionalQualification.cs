using System;
using System.Collections.Generic;

namespace DBCONNECTION.Models;

public partial class FresherProfessionalQualification
{
    public string Email { get; set; } = null!;

    public string? OtherTechnologies { get; set; }

    public bool TestAppeared { get; set; }

    public string? RoleApplied { get; set; }

    public DateTime? DtModified { get; set; }

    public DateTime? DtCreated { get; set; }

    public virtual ICollection<TechnologyFamiliar>? TechnologyFamiliars { get; set; } = new List<TechnologyFamiliar>();
}
