using System;
using System.Collections.Generic;

namespace DBCONNECTION.Models;

public partial class StreamTable
{
    public int SId { get; set; }

    public string StreamName { get; set; } = null!;

    public DateTime? DtCreated { get; set; }

    public DateTime? DtModified { get; set; }

    public virtual ICollection<EducationQualificationDatum> EducationQualificationData { get; set; } = new List<EducationQualificationDatum>();
}
