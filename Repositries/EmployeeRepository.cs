using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using WebApi1.Model;

namespace WebApi1.Repositries
{
    public class EmployeeRepository: IEmployeeRepository
    {
		private readonly WebApiTrainingDBContext _context;

		public EmployeeRepository(WebApiTrainingDBContext context)
		{
			this._context = context;
		}

		public IEnumerable<Employee> GetEmployees()
		{
			return this._context.Employees.ToList();
		}

		//public IEnumerable<Employee> GetEmployeesbysearch(string s)
		//{
		//	return this._context.Employees.Find(e => e.s).ToList();
		//}

		public Employee GetEmployee(int employeeId)
		{
			return this._context.Employees.FirstOrDefault(e => e.ID == employeeId);
		}

		public Employee AddEmployee(Employee employee)
		{
			var emailcheck = _context.Employees.FirstOrDefault(e => e.Email == employee.Email);
			var codecheck = _context.Employees.FirstOrDefault(e => e.EmployeeNo == employee.EmployeeNo);

			if (emailcheck != null || codecheck != null)
			{
				return null;
			}
			else
			{
				var result = this._context.Employees.Add(employee);
				_context.SaveChanges();
				return result;
			}
		}

		public Employee UpdateEmployee(Employee employee)
		{
			var emailchck = _context.Employees.FirstOrDefault(e => e.Email == employee.Email);

			if (emailchck != null)
			{
				return null;
			}
			else
			{
				var result = _context.Employees.FirstOrDefault(e => e.ID == employee.ID);
				if (result != null)
				{
					result.Name = employee.Name;
					result.Email = employee.Email;
					result.HireDate = employee.HireDate;
					result.Designation = employee.Designation;
					result.Padd1 = employee.Padd1;
					result.Padd2 = employee.Padd2;
					result.Cadd1 = employee.Cadd1;
					result.Cadd2 = employee.Cadd2;

					_context.SaveChanges();

					
				}
				return result;
			}
			
		}

		public bool DeleteEmployee(int employeeId)
		{
			var result = _context.Employees.FirstOrDefault(e => e.ID == employeeId);
			if (result != null)
			{
				_context.Employees.Remove(result);
				_context.SaveChanges();
				return true;
			}
			return false;
		}
	}
}