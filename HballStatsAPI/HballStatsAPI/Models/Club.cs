using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace HballStatsAPI.Models
{
    public class Club
    {
        public int ID { get; set; }
        public String ClubName { get; set; }
        public String Address { get; set; }
        public String PostCode { get; set; }
        public String City { get; set; }
        public String Phone { get; set; }
        public String Fax { get; set; }
        public String Email  { get; set; }
        public String Manager { get; set; }
        public DateTime RecordAdded { get; set; }
    }
}