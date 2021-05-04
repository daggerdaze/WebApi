using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;
using WebApi1.Model;

namespace WebApi1.Model
{
    public class WebApiTrainingDBContext : DbContext
    {
        public WebApiTrainingDBContext()
            : base(nameOrConnectionString: "name=EmpDeptSystem")
        {
        }

        public DbSet<Employee> Employees { get; set; }

        public DbSet<Department> Departments { get; set; }
    }
}