using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace HballStatsAPI.Models
{
    public class RefereeType
    {
        public int ID { get; set; }
        public String RefereeTypeName { get; set; }
        public DateTime RecordAdded { get; set; }

    }
}