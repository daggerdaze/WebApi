using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using WebApi1.Model;

namespace WebApi1.Repositries
{
    public interface IEmployeeRepository
    {
        IEnumerable<Employee> GetEmployees();

     //   IEnumerable<Employee> GetSearch();

        Employee GetEmployee(int employeeId);

        Employee AddEmployee(Employee employee);

        Employee UpdateEmployee(Employee employee);

        bool DeleteEmployee(int employeeId);
    }
}