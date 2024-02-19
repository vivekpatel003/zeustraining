using System;
using System.Collections.Generic;

namespace DBCONNECTION.Models;

public partial class Jobcard
{
    public int Srno { get; set; }

    public string JobTitle { get; set; } = null!;

    public string Dateandtime { get; set; } = null!;

    public string Location { get; set; } = null!;

    public DateTime DtCreated { get; set; }

    public DateTime DtModified { get; set; }

    public string? GeneralInstruction { get; set; }

    public string? Instructions { get; set; }

    public string? SystemRequirement { get; set; }

    public string? ProcessInfo { get; set; }

    public virtual ICollection<JobHasPreference> JobHasPreferences { get; set; } = new List<JobHasPreference>();

    public virtual ICollection<JobHasTimeslot> JobHasTimeslots { get; set; } = new List<JobHasTimeslot>();

    public virtual ICollection<JobcardRole> JobcardRoles { get; set; } = new List<JobcardRole>();

    public virtual ICollection<UserJobDetail> UserJobDetails { get; set; } = new List<UserJobDetail>();
}
