using System;
using System.Collections.Generic;

namespace DBCONNECTION.Models;

public partial class JobHasTimeslot
{
    public int Id { get; set; }

    public int TimeSlotId { get; set; }

    public int JobNumber { get; set; }

    public DateTime? DtCreated { get; set; }

    public DateTime? DtModified { get; set; }

    public virtual Jobcard JobNumberNavigation { get; set; } = null!;

    public virtual TimeSlotTable TimeSlot { get; set; } = null!;
}
