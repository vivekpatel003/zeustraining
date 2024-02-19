using System;
using System.Collections.Generic;

namespace DBCONNECTION.Models;

public partial class Qualification
{
    public int QId { get; set; }

    public string QualificationName { get; set; } = null!;

    public DateTime? DtCreated { get; set; }

    public DateTime? DtModified { get; set; }

    public virtual ICollection<EducationQualificationDatum> EducationQualificationData { get; set; } = new List<EducationQualificationDatum>();
}
