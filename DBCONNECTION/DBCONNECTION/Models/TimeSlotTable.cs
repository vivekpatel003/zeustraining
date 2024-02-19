using System;
using System.Collections.Generic;

namespace DBCONNECTION.Models;

public partial class TimeSlotTable
{
    public int TimeSlotId { get; set; }

    public string TimeSlot { get; set; } = null!;

    public DateTime? DtCreated { get; set; }

    public DateTime? DtModified { get; set; }

    public virtual ICollection<JobHasTimeslot> JobHasTimeslots { get; set; } = new List<JobHasTimeslot>();
}
