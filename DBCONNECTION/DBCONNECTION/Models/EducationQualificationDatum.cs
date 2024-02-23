using System;
using System.Collections.Generic;

namespace DBCONNECTION.Models;

public partial class EducationQualificationDatum
{
    public string Email { get; set; } = null!;

    public double Percentage { get; set; }

    public int PassingYear { get; set; }

    public int QId { get; set; }

    public int SId { get; set; }

    public int CId { get; set; }

    public string CollegeLocation { get; set; } = null!;

    public string? CollegeName { get; set; }

    public DateTime? DtCreated { get; set; }

    public DateTime? DtModified { get; set; }

    public virtual CollegeTable? CIdNavigation { get; set; } = null!;

    public virtual Qualification? QIdNavigation { get; set; } = null!;

    public virtual StreamTable? SIdNavigation { get; set; } = null!;
}
