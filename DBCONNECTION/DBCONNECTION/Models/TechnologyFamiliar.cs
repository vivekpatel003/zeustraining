using System;
using System.Collections.Generic;

namespace DBCONNECTION.Models;

public partial class TechnologyFamiliar
{
    public string Email { get; set; } = null!;

    public int TechId { get; set; }

    public DateTime? DtCreated { get; set; }

    public DateTime? DtModified { get; set; }

    public int Id { get; set; }

    public virtual FresherProfessionalQualification EmailNavigation { get; set; } = null!;

    public virtual Technology Tech { get; set; } = null!;
}
