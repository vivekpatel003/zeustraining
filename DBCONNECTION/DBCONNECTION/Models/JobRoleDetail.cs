using System;
using System.Collections.Generic;

namespace DBCONNECTION.Models;

public partial class JobRoleDetail
{
    public int JobRoleId { get; set; }

    public string JobRoles { get; set; } = null!;

    public string JobIcons { get; set; } = null!;

    public DateTime? DtCreated { get; set; }

    public DateTime? DtModified { get; set; }

    public double GrossCompensation { get; set; }

    public string? RoleDescription { get; set; }

    public string? Requirement { get; set; }

    public virtual ICollection<JobHasPreference> JobHasPreferences { get; set; } = new List<JobHasPreference>();

    public virtual ICollection<JobcardRole> JobcardRoles { get; set; } = new List<JobcardRole>();

    public virtual ICollection<SelectedJob> SelectedJobs { get; set; } = new List<SelectedJob>();
}
