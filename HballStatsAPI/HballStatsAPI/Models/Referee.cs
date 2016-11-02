using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace HballStatsAPI.Models
{
    public class Referee
    {
        public int ID { get; set; }
        public String RefereeName { get; set; }
        public RefereeType RefereeType { get; set; }
        public String Phone { get; set; }
        public String Email { get; set; }
        public Gender Gender { get; set; }
        public DateTime DateAdded { get; set; }

    }
}