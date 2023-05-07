const student = require('../models/studentsModele')

const addStudent= async (req,res)=>{
    const{student_id,firstName,lastName}=req.body;

    const newStudent= await student.create({student_id,firstName,lastName})
    res.json(newStudent);
};


// app.post('/students', (req, res) => {
//     const student = req.body;
//     student.id = students.length + 1;
//     students.push(student);
//     res.json({ id: student.id ,name:student.students,message: 'Student added successfully'});
  
  
//   });


module.exports={
    addStudent,
}