using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Mission04_mh828.Models
{
    public class GradeCalculator
    {
        [Required (ErrorMessage = "Assignment Percentage Required")]
        [Range(0, 100, ErrorMessage = "Must be between 0 and 100")]
        public int? Assignments { get; set; }

        [Required (ErrorMessage = "Group Project Percentage Required")]
        [Range(0, 100, ErrorMessage = "Must be between 0 and 100")]
        public int? GroupProjects { get; set; }

        [Required(ErrorMessage = "Quiz Percentage Required")]
        [Range(0, 100, ErrorMessage = "Must be between 0 and 100")]
        public int? Quizzes { get; set; }

        [Required(ErrorMessage = "Midterm Percentage Required")]
        [Range(0, 100, ErrorMessage = "Must be between 0 and 100")]
        public int? MidTerm { get; set; }

        [Required(ErrorMessage = "Final Exam Percentage Required")]
        [Range(0, 100, ErrorMessage = "Must be between 0 and 100")]
        public int? FinalExam { get; set; }

        [Required(ErrorMessage = "Intex Percentage Required")]
        [Range(0, 100, ErrorMessage = "Must be between 0 and 100")]
        public int? Intex { get; set; }
    }
}
