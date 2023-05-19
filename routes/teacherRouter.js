const express = require("express");
const router = express.Router();

const {addNotes,putNotes,getReclamation}=require('../controllers/teacherControllers')

router.post("/students",addNotes)
router.put("/students",putNotes)
router.get("/reclamation",getReclamation)
module.exports=router;