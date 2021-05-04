using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace WebApi1.Controllers
{
    public class ProductController : ApiController
    {
        [Route("api/values")]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        [Route("api/values/{id}/{name}")]
        public string Get(int id, string name)
        {
            return "value" + name;
        }

        [Route("api/values")]
        public void Post([FromBody]string value)
        {
             
        }

        [Route("api/values/{id}")]
        public void Put(int id,[FromBody]string value)
        {

        }

        [Route("api/values/{id}")]
        public void Delete(int id)
        {

        }
    }
}
