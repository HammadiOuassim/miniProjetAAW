const students = require('../models/studentsModele');
const teacher = require('../models/teacherModele');



const postNoteToStudent = async (req, res) => {
  try {
    const { studentId , note } = req.body;
    const teacherId = parseInt(req.params.id);
    //const teacherId = teacher.teacher_id;

    //res.json({message:'teacher id',teacherId})


    //const subject = teacher.matiere;

    const Fteacher = await teacher.findOne({ teacher_id: teacherId });
    if (!Fteacher) {
      return res.status(404).json({ error: 'Teacher not found' });
    }

    const matiere = Fteacher.matiere;



    //
   
    const student = await students.findOne({ student_id: studentId });

    if (!student) {
      return res.status(404).json({ error: 'Student not found' });
    }

    student.notes.push({ teacher: teacherId, matiere,note });
    await student.save();

    res.json({ success: true, message: 'Note posted successfully' , matiere:matiere});
  } catch (error) {
    console.error('Error posting note:', error);
    res.status(500).json({ error: 'Server error' });
  }
};









// get reclamation 
const getReclamation = async(req,res)=>{
  const reclamations = await students.findById(req.params.id);
  
  res.json({ reclamations : reclamations.reclamation , firstName : reclamations.firstName , lastName : reclamations.lastName,student_id:reclamations.student_id});
  
}
module.exports = {
  postNoteToStudent,
  getReclamation,
};
