using System;
using System.Collections.Generic;

namespace DBCONNECTION.Models;

public partial class UserJobDetail
{
    public string Email { get; set; } = null!;

    public int JobId { get; set; }

    public int TimeSlotId { get; set; }

    public string Resume { get; set; } = null!;

    public DateTime? DtCreated { get; set; }

    public DateTime? DtModified { get; set; }

    public virtual Jobcard Job { get; set; } = null!;
}
