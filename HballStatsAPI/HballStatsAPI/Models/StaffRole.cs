using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace HballStatsAPI.Models
{
    public class StaffRole
    {
        public int ID { get; set; }
        public String RoleName { get; set; }
        public DateTime RecordAdded { get; set; }
    }
}