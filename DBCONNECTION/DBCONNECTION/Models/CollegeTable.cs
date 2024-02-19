using System;
using System.Collections.Generic;

namespace DBCONNECTION.Models;

public partial class CollegeTable
{
    public int CId { get; set; }

    public string CollegeName { get; set; } = null!;

    public DateTime? DtCreated { get; set; }

    public DateTime? DtModified { get; set; }

    public virtual ICollection<EducationQualificationDatum> EducationQualificationData { get; set; } = new List<EducationQualificationDatum>();
}
