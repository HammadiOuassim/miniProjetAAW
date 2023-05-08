const students = require('../models/studentsModele')



// GET all students ..
const AllStudents = async(req,res)=>{
  try {
    
      const student = await students.find()
      res.json(student)
    } catch (err) {
      res.status(500).json({ message: err.message })
    }
}

// ADD student..

const addStudent= async (req,res)=>{
    const{student_id,firstName,lastName}=req.body;

    const newStudent= await students.create({student_id,firstName,lastName})
    res.json(newStudent);
};


// DELETE student ..


const deleteStudent = async (req, res) => {
  const studentId = req.params.id;

  
  try {
    const deletedStudent = await students.findByIdAndDelete(studentId);
    
    if (!deletedStudent) {
      return res.status(404).json({ error: 'Student not found' });
    }
    return res.status(200).json({ message: 'Student deleted successfully' });
  } catch (err) {
    return res.status(500).json({ error: 'Internal server error' });
  }
};


// edit student 

const editStudent =async(req,res)=>{
  const {id} = req.params;
  const {firstName,lastName}=req.body;
  const editedStudent = await students.findByIdAndUpdate(id,{firstName,lastName})
  res.json(editedStudent)

}


module.exports={
    addStudent,
    AllStudents,
    //getStudentById,
    deleteStudent,
    editStudent
    

}















// app.post('/students', (req, res) => {
//     const student = req.body;
//     student.id = students.length + 1;
//     students.push(student);
//     res.json({ id: student.id ,name:student.students,message: 'Student added successfully'});
  
  
//   });
