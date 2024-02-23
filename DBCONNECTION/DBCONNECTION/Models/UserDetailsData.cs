namespace DBCONNECTION.Models
{
    public class UserDetailsData
    {
        public string Email { get; set; }

        public int JobId { get; set; }

        public int TimeSlotId { get; set; }

        public string Resume { get; set; } 

        public List<int> jobDetailId { get; set; }
    }
}
