using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using WebApi1.Model;

namespace WebApi1.Repositries
{
    public interface IDepartmentRepository
    {
        IEnumerable<Department> GetDepartments();

        //Department GetDepartment(int departmentId);

        //Department AddDepartment(Department department);

        //Department UpdateDepartment(Department department);

        //bool DeleteDepartment(int departmentId);
    }
}