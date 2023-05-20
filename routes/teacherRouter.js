const express = require("express");
const router = express.Router();

const {postNoteToStudent,putNotes,getReclamation}=require('../controllers/teacherControllers')

router.post("/students",postNoteToStudent)
//router.put("/students",putNotes)
router.get("/reclamation/:id",getReclamation)
module.exports=router;