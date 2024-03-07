using log4net;
using log4net.Config;

namespace DBCONNECTION
{
    public static class Log4netExtensions
    {
        public static void AddLog4net(this IServiceCollection service)
        {
            //loading of the configuration file 
            XmlConfigurator.Configure(new FileInfo("log4net.config"));
            //created an instance which will be created once irrespective  of number of requests
            service.AddSingleton(LogManager.GetLogger(typeof(Program)));
        }
    }
}