using System;
using System.Collections.Generic;

namespace DBCONNECTION.Models;

public partial class SelectedJob
{
    public string Email { get; set; } = null!;

    public int JobRoleId { get; set; }

    public DateTime? DtCreated { get; set; }

    public DateTime? DtModified { get; set; }

    public int Id { get; set; }

    public virtual PersonalInformation EmailNavigation { get; set; } = null!;

    public virtual JobRoleDetail JobRole { get; set; } = null!;
}
