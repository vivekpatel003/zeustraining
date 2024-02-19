using System;
using System.Collections.Generic;

namespace DBCONNECTION.Models;

public partial class JobcardRole
{
    public int JobNumber { get; set; }

    public int JobRoleId { get; set; }

    public DateTime? DtCreated { get; set; }

    public DateTime? DtModified { get; set; }

    public int Id { get; set; }

    public virtual Jobcard JobNumberNavigation { get; set; } = null!;

    public virtual JobRoleDetail JobRole { get; set; } = null!;
}
