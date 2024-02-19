using System;
using System.Collections.Generic;

namespace DBCONNECTION.Models;

public partial class Userdatum
{
    public int Srno { get; set; }

    public string Email { get; set; } = null!;

    public string Password { get; set; } = null!;

    public bool IsAdmin { get; set; }

    public DateTime? DtCreated { get; set; }

    public DateTime? DtModified { get; set; }
}
