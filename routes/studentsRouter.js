// here we make function and her route (of students)

const express = require("express");
const router = express.Router();

const {reclamationSubject,getNotes,getDeliberation,reclamationGlobale}=require('../controllers/studentsControllers')

//post subject reclamation
router.post("/reclamationSubject/:id",reclamationSubject)

router.get("/notes/:id",getNotes)
router.get("/deliberetion",getDeliberation)
router.post("/deliberation/reclamation",reclamationGlobale)
module.exports=router;



// 1. L’étudiant : il peut consulter ses notes par matière,        xxxxxx
// comme il peut consulter le PV de délibération global.           xxxxxx
// Il peut aussi déposer online une réclamation (Par matière ou    xxxxxx
// concernant le  PV final).                                       xxxxxx