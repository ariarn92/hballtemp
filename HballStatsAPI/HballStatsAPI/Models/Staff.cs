using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace HballStatsAPI.Models
{
    public class Staff
    {
        public int ID { get; set; }
        public Gender Gender { get; set; }
        public StaffRole Role { get; set; }
        public DateTime RecordAdded { get; set; }

    }
}