// function that students used

const students = require('../models/studentsModele');
const student=require('../models/studentsModele');

// POST subject reclamation
const reclamationSubject = async (req, res) => {
    try {
      const { studentId, matiere, description } = req.body;
  
      const student = await students.findOne({ student_id: studentId });
      if (!student) {
        return res.status(404).json({ error: 'Student not found' });
      }
  
      student.reclamationSubject(matiere, description);
  
      res.json({ success: true, message: 'Reclamation posted successfully' });
    } catch (error) {
      console.error('Error posting reclamation:', error);
      res.status(500).json({ error: 'Server error' });
    }
  };
  



  // POST reclamation Global((deliberation ))

const reclamationGlobale =async (req,res)=>{

    try {
        const studentId =parseInt(req.params.id);
        const {reclamationGlobale } = req.body;
    
        const student = await students.findOne({ student_id: studentId });
        if (!student) {
          return res.status(404).json({ error: 'Student not found' });
        }
    
        student.reclamationGlobale = reclamationGlobale;
    
       
        await student.save();



        res.json({ success: true, message: 'Reclamation posted successfully' });
      } catch (error) {
        console.error('Error posting reclamation:', error);
        res.status(500).json({ error: 'Server error' });
      }



}




// GET note by subject

const getNotes = async (req, res) => {
    try {
      const studentId = parseInt(req.params.id);
      const student = await students.findOne({ student_id: studentId });
  
      if (!student) {
        return res.status(404).json({ error: 'Student not found' });
      }
  
      const notes = student.notes.map(note => {
        return {
          matiere: note.matiere,
          note: note.note
        };
      });
  
      res.json(notes);
    } catch (error) {
      console.error('Error retrieving notes:', error);
      res.status(500).json({ error: 'Server error' });
    }
  };
  

  // Deliberation globale 
  const getDeliberation =(req,res)=>{


    res.send("Deliberation Page")


}
   
  
module.exports={
    reclamationSubject,
    reclamationGlobale,
    getNotes,
    getDeliberation,
}

                                         
// 1. L’étudiant : il peut consulter ses notes par matière,           xxxxxxxxx
// comme il peut consulter le PV de délibération global.              frontend
// Il peut aussi déposer online une réclamation (Par matière ou concernant le  PV final). xxxxxxxxxx

















//POST reclamation subject 
// const reclamationSubject= async(req,res)=>{
//     const studentId = req.params.id;
//     const matiere = req.body;
//     const description = req.body;


//     const student = await students.findOne( { studentId} );

//     matiere.studentId = studentId;
//     description.studentId = studentId;
//     //reclamationSubject.push(matiere,description);
//     const newReclamation = await students.create({matiere,description});
//     res.status(201).json({ newReclamation ,message: 'Complaint filed successfully' });
// }

// GET notes par matiere
// const getNotes = async (req,res)=>{

//     const studentId = parseInt(req.params.id);

//     const notes = await students.notes.findById(studentId);
//    // const note = await students.notes.findById(studentId);


//     //const myNote = note.notes
//     res.json({matiere:notes.matiere, note: notes.note, studentId})
// }
