// function that students used

const students = require('../models/studentsModele');
const student=require('../models/studentsModele');



//POST reclamation subject 
const reclamationSubject= async(req,res)=>{
    const studentId = req.params.id;

    const matiere = req.body;
    const description = req.body;

    matiere.studentId = studentId;
    description.studentId = studentId;
    //reclamationSubject.push(matiere,description);
    const newReclamation = await students.create({matiere,description});
    res.status(201).json({ newReclamation ,message: 'Complaint filed successfully' });
}

module.exports={
    reclamationSubject,
}