// here we make function and her route (of students)

const express = require("express");
const router = express.Router();

const {reclamationSubject}=require('../controllers/studentsControllers')

//post subject reclamation
router.post("/reclamationSubject/:id",reclamationSubject)




module.exports=router;