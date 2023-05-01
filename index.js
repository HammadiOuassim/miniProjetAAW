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











const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;
const students = [{"id":1,   "students":"skander"},
                    {"id":2,   "students":"ouassim"}
                ];


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


// Set up middleware
app.use(bodyParser.json());



// GET all students
app.get('/students', (req, res) => {
  res.json(students);
});

// POST a new student
app.post('/students', (req, res) => {
  const student = req.body;
  student.id = students.length + 1;
  students.push(student);
  res.json({ id: student.id ,name:student.students,message: 'Student added successfully'});


});

// PUT (update) an existing student
app.put('/students/:id', (req, res) => {
  const studentId = parseInt(req.params.id);
  const newStudent = req.body;
  const index = students.findIndex((student) => student.id === studentId);
  if (index === -1) {
    res.sendStatus(404);
  } else {
    students[index] = { ...students[index], ...newStudent };
    res.json({ message: 'Student updated successfully' });
  }
});

// DELETE an existing student
app.delete('/students/:id', (req, res) => {
  const studentId = parseInt(req.params.id);
  const index = students.findIndex((student) => student.id === studentId);
  if (index === -1) {
    
    res.sendStatus(404);
    
  } else {
    students.splice(index, 1);
    res.json({ message: 'Student deleted successfully' });
  }
});


// GET reclamation
app.get('/reclamationGlobale', (req, res) => {
    res.json(reclamation_pv);
  });
  

// POST deliberation
app.get('/deliberation', (req, res) => {
  res.json(deliberation)
  });
  






  
// GET student marks by subject
app.get('/students/:id/marks/:subject', (req, res) => {
    const studentId = parseInt(req.params.id);
    const subject = req.params.subject;
    
    // find the student by ID
    const student = studentsMark.find(s => s.id === studentId);
    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }
  
    // find the marks by subject
    const marks = student.marks[subject];
    if (!marks) {
      return res.status(404).json({ message: 'Subject not found' });
    }
  
    // return the marks
    res.json({ subject:subject, marks: marks });
  });
 
// GET deliberation from student
app.get('/students/deliberation'  ,(req,res)=>{
    res.json(deliberation)
});


// POST reclamation matiere

app.post('/students/:student_id/reclamationMatiere', (req, res) => {
    const studentId = req.params.student_id;
    const newComplaint = req.body;
    newComplaint.studentId = studentId;
    reclamation_matiere.push(newComplaint);
    res.status(201).json({ message: 'Complaint filed successfully' });
  });

// POST reclamation pv finale
app.post('/students/:student_id/reclamationGlobale', (req, res) => {
    const studentId = req.params.student_id;
    const newComplaint = req.body;
    newComplaint.studentId = studentId;
    reclamation_pv.push( newComplaint);
    res.status(201).json({ message: 'PV Complaint filed successfully' });
  });



  // POST /enseignants/{id}/notes/{matiere}
app.post('/enseignants/:id/notes/:matiere', (req, res) => {
    const enseignantId = req.params.id;
    const matiere = req.params.matiere;
    const notes = req.body.notes; 
    res.status(200).send('Notes enregistrées avec succès');
  });
  
// PUT /enseignants/{id}/notes/{matiere}/{etudiant}
app.put('/enseignants/:id/notes/:matiere/:etudiant', (req, res) => {
    const enseignantId = req.params.id;
    const matiere = req.params.matiere;
    const etudiantId = req.params.etudiant;
    const nouvelleNote = req.body.note;
    res.status(200).send('Note mise à jour avec succès');
  });
  

// GET /enseignants/{id}/reclamations/{matiere}
app.get('/enseignants/:id/reclamations/:matiere', (req, res) => {
    const enseignantId = req.params.id;
    const matiere = req.params.matiere;
  
    // TODO: Récupérer les réclamations des étudiants pour cette matière depuis la base de données
  
    const reclamations = [
      {
        id: 1,
        etudiant: 'Alice',
        matiere: 'Mathématiques',
        description: 'Je pense qu\'il y a une erreur dans le calcul de ma note'
      },
      {
        id: 2,
        etudiant: 'Bob',
        matiere: 'Mathématiques',
        description: 'Je n\'ai pas été évalué pour un exercice que j\'ai rendu'
      }
    ];
  
    res.status(200).send(reclamations);
  });
  


// Start the server
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
