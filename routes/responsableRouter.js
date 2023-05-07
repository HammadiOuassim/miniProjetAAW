// here we make function and her route (of students)

const express = require("express");
const router = express.Router();
const {addStudent} =require("../controllers/responsableControllers")

router.post("/addstudent",addStudent);




module.exports=router;