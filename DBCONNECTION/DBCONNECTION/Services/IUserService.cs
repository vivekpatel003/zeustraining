using DBCONNECTION.Models;

namespace DBCONNECTION.Services
{
    public interface IUserService
    {
        string Login(Authentication auth,List<Userdatum> userdata);
    }
}
