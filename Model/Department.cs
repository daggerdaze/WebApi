using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace WebApi1.Model
{
        [Table("Departments")]
        public class Department
        {
            [Key, DatabaseGenerated(DatabaseGeneratedOption.Identity)]
            public int ID { get; set; }

            [Required, StringLength(50)]
            public string Name { get; set; }

            [Required, StringLength(50)]
            public string Location { get; set; }
        }
}