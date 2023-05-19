// here we make function and her route (of students)
const express = require("express");
const router = express.Router();
const {addStudent,AllStudents,deleteStudent,editStudent,getReclamationG} =require("../controllers/responsableControllers")
// we dont need this const studentsControllers = require('../controllers/studentsControllers');
const students = require("../models/studentsModele");


// post student ..
router.post("/student",addStudent);

//getting all ..
router.get("/Student",AllStudents);

//getting one ERR
// router.get("/findStudent/:id",getStudentById);

//updatting one
router.put("/Student/:id",editStudent)

//deleteing one
router.delete("/Student/:id",deleteStudent)

// get reclamation 
router.get("/student/:id/reclamation",getReclamationG)


module.exports=router;



// ychouf deliberation 