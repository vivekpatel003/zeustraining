using System;
using System.Collections.Generic;

namespace DBCONNECTION.Models;

public partial class UserHasPreference
{
    public string Email { get; set; } = null!;

    public int JobRoleId { get; set; }

    public DateTime? DtCreated { get; set; }

    public DateTime? DtModified { get; set; }

    public int Id { get; set; }
}
