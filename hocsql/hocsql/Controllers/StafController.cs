using hocsql.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;


namespace hocsql.Controllers
{
    public class StafController : Controller
    {
        // GET: Staf
        DBQLBHEntitiess database = new DBQLBHEntitiess();
        public ActionResult Index()
        {
            return View(database.tblStaffs.ToList());
        }
        public ActionResult Create()
        {
            return View();
        }
        public ActionResult Create(tblStaff staff) 
        {
            database.tblStaffs.Add(staff);
            database.SaveChanges();
            return RedirectToAction("Index");
        }
        public ActionResult Details(int id) 
        {
            return View(database.tblStaffs.Where(s => s.IDStaff == id).FirstOrDefault()); 
        }
        public ActionResult Edit(int id)
        {
            return View(database.tblStaffs.Where(s => s.IDStaff == id).FirstOrDefault());
        }
        [HttpPost]
        public ActionResult Edit(int id, tblStaff staff)
        {
            database.Entry(staff).State = System.Data.Entity.EntityState.Modified;
            database.SaveChanges();
            return RedirectToAction("Index");
        }
        [HttpPost]
        public ActionResult Delete(int id)
        {
            return View(database.tblStaffs.Where(s => s.IDStaff == id).FirstOrDefault());
        }
        public ActionResult Delete(int id, tblStaff staff)
        {
            staff = database.tblStaffs.Where(s => s.IDStaff == id).FirstOrDefault();
            database.tblStaffs.Remove(staff);
            database.SaveChanges();
            return RedirectToAction("Index");
        }

    }
}