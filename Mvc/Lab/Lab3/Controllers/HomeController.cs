using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Lab3.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            List<string> items = (List<string>)this.Session["items"] ?? new List<string>();
            return View(items);
        }
    }

       
}