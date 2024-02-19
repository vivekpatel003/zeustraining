using System;
using System.Collections.Generic;

namespace DBCONNECTION.Models;

public partial class Technology
{
    public int TechId { get; set; }

    public string Technology1 { get; set; } = null!;

    public DateTime? DtCreated { get; set; }

    public DateTime? DtModified { get; set; }

    public virtual ICollection<TechnologyExpertise> TechnologyExpertises { get; set; } = new List<TechnologyExpertise>();

    public virtual ICollection<TechnologyFamiliar> TechnologyFamiliars { get; set; } = new List<TechnologyFamiliar>();
}
