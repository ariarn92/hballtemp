using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace HballStatsAPI.Models
{
    public class Tournament
    {
        public int ID { get; set; }
        public String TournamentName { get; set; }
        public bool TournamentActive { get; set; }
        public DateTime RecordAdded { get; set; }
    }
}