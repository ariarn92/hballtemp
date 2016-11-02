using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace HballStatsAPI.Models
{
    public class Division
    {
        public int ID { get; set; }
        public String DivisionName { get; set; }
        public Tournament Tournament { get; set; }
        public AgeGroup AgeGroup { get; set; }
        public bool DivisionActive { get; set; }
        public DateTime RecordAdded { get; set; }
    }
}