using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace HballStatsAPI.Controllers
{
    [RoutePrefix("api/GameReport")]
    public class GameReportController : ApiController
    {
        // GET: api/GameReport
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/GameReport/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/GameReport
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/GameReport/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/GameReport/5
        public void Delete(int id)
        {
        }
    }
}
