using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace HballStatsAPI.Models
{
    public class Venue
    {
        public int ID { get; set; }
        public String VenueName { get; set; }
        public int PostCode { get; set; }
        public string City { get; set; }
        public String Phone { get; set; }
        public String Fax  { get; set; }
        public String EMail { get; set; }
        public String HouseKeeper { get; set; }
        public String HouseKeeperPhone  { get; set; }
        public String HouseKeeperEmail { get; set; }
        public DateTime RecordAdded { get; set; }
    }
}