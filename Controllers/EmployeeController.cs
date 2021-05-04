using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebApi1.Model;
using WebApi1.Repositries;

namespace WebApi1.Controllers
{
    public class EmployeeController : ApiController
    {
		private readonly IEmployeeRepository _employeeRepository;

		public EmployeeController()
		{
			this._employeeRepository = new EmployeeRepository(new WebApiTrainingDBContext());
		}

		// GET: Employee
		[Route("api/employee")]
		public IHttpActionResult GetEmployees()
		{
			IEnumerable<Employee> employees = null;

			employees = this._employeeRepository.GetEmployees().ToList();

			if (!employees.Any())
			{
				return NotFound();
			}

			return Ok(employees);
		}



		// GET: Employee
		[Route("api/employee/{id}")]
		public IHttpActionResult GetEmployee(int id)
		{
			Employee employee = null;
			employee = this._employeeRepository.GetEmployee(id);

			if (employee == null)
			{
				return NotFound();
			}

			return Ok(employee);
		}

		//[Route("api/employee/{s}")]
		//public IHttpActionResult GetEmployee(string s)
		//{
		//	Employee employee = null;
		//	employee = this._employeeRepository.GetEmployees(s).ToList();
		    
		//	if (employee == null)
		//	{
		//		Employee temp = new Employee();
		//			employee = temp ;
		//	}

		//	return Ok(employee);
		//}

		[Route("api/employee")]
		public IHttpActionResult PostEmployee([FromBody] Employee employee)
		{
			if (!ModelState.IsValid)
				return BadRequest("Invalid data.");

			employee = this._employeeRepository.AddEmployee(employee);

			return Ok(employee);
		}

		[Route("api/employee")]
		public IHttpActionResult PutEmployee(Employee employee)
		{
			if (!ModelState.IsValid)
				return BadRequest("Invalid data.");

			employee = this._employeeRepository.UpdateEmployee(employee);

			return Ok(employee);
		}

		[Route("api/employee/{id}")]
		public IHttpActionResult DeleteEmployee(int id)
		{
			if (id <= 0)
				return BadRequest("Not a valid student id");

			var isDeleted = this._employeeRepository.DeleteEmployee(id);
			if (isDeleted)
			{
				return Ok();
			}
			else
			{
				return BadRequest("Invalid data");
			}
		}

	}
}
