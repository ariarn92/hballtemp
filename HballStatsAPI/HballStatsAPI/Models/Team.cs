using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace HballStatsAPI.Models
{
    public class Team
    {
        public int ID { get; set; }
        public Club Club { get; set; }
        public AgeGroup AgeGroup { get; set; }
        public String TeamName { get; set; }
        public String Coach { get; set; }
        public String AssistantCoach { get; set; }
        public String PhiTher { get; set; }
        public String TeamManager { get; set; }
    }
}