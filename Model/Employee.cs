using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace WebApi1.Model
{

    [Table("Employees")]
    public class Employee
    {
        [Key, DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int ID { get; set; }

        [Required(ErrorMessage = "This field is required ")]
        public string EmployeeNo { get; set; }

        [Required(ErrorMessage = "This field is required "), StringLength(50)]
        public string Name { get; set; }

        [Required(ErrorMessage = "This field is required ")]
        public string Email { get; set; }

        //[Required, StringLength(50)]
        //public string LastName { get; set; }

        [Required(ErrorMessage = "This field is required ")]
        public string Designation { get; set; }

        public string Padd1 { get; set; }
        public string Padd2 { get; set; }
        public string Cadd1 { get; set; }
        public string Cadd2 { get; set; }

        // public string Address { get; set; }

        [Required(ErrorMessage = "This field is required ")]
        public DateTime HireDate { get; set; }

        //public int DepartmentId { get; set; }

        //[ForeignKey(nameof(DepartmentId))]
        //public Department Department { get; set; }

    }
}
