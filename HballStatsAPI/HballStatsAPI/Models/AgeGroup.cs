using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace HballStatsAPI.Models
{
    public class AgeGroup
    {
        public int ID { get; set; }
        public String AgeGroupName { get; set; }
        public Gender Gender { get; set; }
        public DateTime RecordAdded { get; set; }

    }
}