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
        public IActionResult Index()
        {
            return View();
        }

        [HttpGet]
        public IActionResult GradeCalculator()
        {
            return View();
        }
        [HttpPost]
        public IActionResult GradeCalculator(GradeCalculator model)
        {
            return View();
        }
    }
}
