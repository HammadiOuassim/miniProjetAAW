// here we make function and her route (of students)
const express = require("express");
const router = express.Router();
const {addStudent,AllStudents,deleteStudent,editStudent} =require("../controllers/responsableControllers")
const studentsControllers = require('../controllers/studentsControllers');
const students = require("../models/studentsModele");


// post student ..
router.post("/addstudent",addStudent);

//getting all ..
router.get("/AllStudents",AllStudents);

//getting one ERR
// router.get("/findStudent/:id",getStudentById);

//updatting one
router.put("/editStudent/:id",editStudent)

//deleteing one
router.delete("/deleteStudent/:id",deleteStudent)


module.exports=router;