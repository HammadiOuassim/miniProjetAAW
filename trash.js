// const express = require('express');
// const bodyParser = require('body-parser');
// const { MongoClient, ObjectID } = require('mongodb');

// const app = express();
// const port = 3000;
// // const port = process.env.PORT || 3000;
// // const mongoURL = 'mongodb+srv://wacim:admin@cluster0.gmnphw4.mongodb.net/test';
// // const dbName = 'mydatabase';
// //const collectionName = 'students';

// // Set up middleware
// app.use(bodyParser.json());
// app.use(express.json());

// // // Create a MongoDB client and connect to the database
// // const client = new MongoClient(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true });
//  //client.connect((err) => {
// //   if (err) {
// //     console.error(err);
// //     process.exit(1);
// //   }
// //   console.log(`Connected to MongoDB: ${mongoURL}`);

// //   const db = client.db(dbName);
// //   const collection = db.collection(collectionName);

// const students=['addcc','cdvcfc','cfsdv'];

//   // GET all students
//   app.get('/students', (req, res) => {
//     // collection.find({}).toArray((err, docs) => {
//       if (err) {
//         console.error(err);
//         res.sendStatus(500);
//       } else {
//         res.json(docs);
    
//       }
//     });
//  // })
//   ;

//   // POST a new student
//   app.post('/students', (req, res) => {
//     const student = req.body;
//     // collection.insertOne(student, (err, result) => {
//       if (err) {
//         console.error(err);
//         res.sendStatus(500);
//       } else {
//         res.json({ id: result.insertedId });
//       }
//     });
//   //})
//   ;

//   // PUT (update) an existing student
//   app.put('/students/:id', (req, res) => {
//     const studentId = req.params.id;
//     const newStudent = req.body;
//     // collection.replaceOne({ _id: ObjectID(studentId) }, newStudent, (err, result) => {
//       if (err) {
//         console.error(err);
//         res.sendStatus(500);
//       } else if (result.matchedCount === 0) {
//         res.sendStatus(404);
//       } else {
//         res.json({ message: 'Student updated successfully' });
//       }
//     });
//  // })
//   ;

//   // DELETE an existing student
//   app.delete('/students/:id', (req, res) => {
//     const studentId = req.params.id;
//     // collection.deleteOne({ _id: ObjectID(studentId) }, (err, result) => {
//       if (err) {
//         console.error(err);
//         res.sendStatus(500);
//       } else if (result.deletedCount === 0) {
//         res.sendStatus(404);
//       } else {
//         res.json({ message: 'Student deleted successfully' });
//       }
//     });
//  // })
//   ;

//   // Start the server
//   app.listen(port, () => {
//     console.log(`Server started on port ${port}`);
//   });
// ;











const reclamation_pv = [{ id: 1, name: "students.student", reclamation_etd: "moins deux "},
                        { id: 2, name: "students.student", reclamation_etd: "moins 6 "},
                        { id: 3, name: "students.student", reclamation_etd: "moins 5 "},
                    ]  ;  

const reclamation_matiere =[{id:students.id,complaint:""}]

const deliberation = {
    id: 1,
    students: [
      { id: 1, name: "students.student1", grade: 15 },
      { id: 2, name: "students.student2", grade: 13 },
      { id: 3, name: "students.student3", grade: 10 },
      { id: 4, name: "students.student4", grade: 11 }
    ]
  };
const noteMatiere = [
  {
    id: 1,
    etudiant: 'Alice',
    matiere: 'Mathématiques',
    note: 15
  },
  {
    id: 2,
    etudiant: 'Bob',
    matiere: 'Mathématiques',
    note:12
  }
]


  const studentsMark = [
    {
      id: 1,
      name: 'John',
      marks: {
        math: 18 ,
        science: 19 ,
        english: 17 
      }
    },
    {
      id: 2,
      name: 'Jane',
      marks: {
        math: 15,
        science: 12,
        english:  8
      }
    }
  ];












































  
// const deleteStudent = async (req,res)=>{
//   let student
//   try {
//     student = await student.findById(req.params.id)
//     if (student == null) {
//       return res.status(404).json({ message: 'Cannot find subscriber' })
//     }
//   } catch (err) {
//     return res.status(500).json({ message: err.message })
//   }

//   res.student = student
 
//   try {
//     await res.students.remove()
//     res.json({ message: 'Deleted Student' })
//   } catch (err) {
    
//     res.status(500).json({ message: err.message })
//   }
// }

// find Student 
// const findStudent =async(req,res)=>{
//   const etd = await students.findOne({students.student_id})
//   res.json(res.students)
// }

// controllers/StudentController.js







// const deleteStudent = (req, res) => {
  //     //const{student_id,firstName,lastName}=req.body;
  //   const student_id = req.params.student_id;
  
  //   student.findByIdAndDelete(student_id, (err, deleteStudent) => {
  //     if (err) {
  //       return res.status(500).json({ error: 'Internal server error' });
  //     }
  
  //     if (!deleteStudent) {
  //       return res.status(404).json({ error: 'User not found' });
  //     }
  
  //     return res.status(200).json({ message: 'User deleted successfully' });
  //   });
  // };
  
  
  
  
  
  
  
  
  
  
  
  
  // const deleteStudent= async (req,res)=>{
  //     const{student_id,firstName,lastName}=req.body;
  
  //  student = student.get(student_id)
  
  //         if (! student){    return Response("User not found", status=404)}
  
          
  
        
  //         student.delete()
  
  //         return Response("User deleted successfully", status=200)
  
  //     // DELETE an existing student
  // app.delete('/students/:id', (req, res) => {
  //     const studentId = parseInt(req.params.id);
  //     const index = students.findIndex((student) => student.id === studentId);
  //     if (index === -1) {
        
  //       res.sendStatus(404);
        
  //     } else {
  //       students.splice(index, 1); //t76 fl index w tnahi 1
  //       res.json({ message: 'Student deleted successfully' });
  //     }
  //   });
    
  
  
  


  
const getStudentById = (req, res) => {
  const studentId = req.params.student_id;

  students.findOne({_id: studentId });
  res.json(students)
};






async function getStudent(req, res, next) {
  let student
  try {
    student = await student.findById(req.params.id)
    if (student == null) {
      return res.status(404).json({ message: 'Cannot find subscriber' })
    }
  } catch (err) {
    return res.status(500).json({ message: err.message })
  }

  res.student = student
  next()
}
