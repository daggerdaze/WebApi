using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using WebApi1.Model;

namespace WebApi1.Repositries
{
    public class DepartmentRepository: IDepartmentRepository
	{
		private readonly WebApiTrainingDBContext _context;

		public DepartmentRepository(WebApiTrainingDBContext context)
		{
			this._context = context;
		}
		public IEnumerable<Department> GetDepartments()
		{
				return this._context.Departments.ToList();	
		}
	}

}