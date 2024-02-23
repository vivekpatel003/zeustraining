using System.Net;
using System.Net.Mail;

namespace DBCONNECTION.Services
{
    public class EmailSender : IEmailSender
    {
        public Task SendEmailAsync(string email, string subject, string message)
        {
            var client = new SmtpClient("smtp.gmail.com", 587)
            {
                EnableSsl = true,
                UseDefaultCredentials = false,
                Credentials = new NetworkCredential("flying.wizard9313@gmail.com", "oevvokaiudqziyaz")
            };
            return client.SendMailAsync(
                new MailMessage(from: "flying.wizard9313@gmail.com",
                                to: email,
                                 subject,
                                    message)
                );
            //throw new NotImplementedException();
        }
    }
}
