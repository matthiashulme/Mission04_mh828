using Microsoft.AspNetCore.Mvc;
using Mission04_mh828.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Mission04_mh828.Controllers
{
    public class HomeController : Controller
    {
        // Index Page View
        public IActionResult Index()
        {
            return View();
        }

        // Grade Calculator View without model
        [HttpGet]
        public IActionResult GradeCalculator()
        {
            return View();
        }

        // Grade Calculator View with Grade Calculator model
        [HttpPost]
        public IActionResult GradeCalculator(GradeCalculator model)
        {
            return View();
        }
    }
}
