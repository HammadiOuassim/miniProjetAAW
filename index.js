const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const students=require('./routes/studentsRouter')
const teacher=require('./routes/teacherRouter')
const responsable=require('./routes/responsableRouter')


const app = express();
const PORT = process.env.PORT || 3001;

//uri 
// 200 ok
//201 created
//swager,,,openapi
// resp y ajouter teacher !!!!!!!!!!!!!!!!!!!!1111
  
// Set up middleware
app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({extended:false}));
app.use(cors());

 app.use("/student",students);
 app.use("/teacher",teacher);
 app.use("/responsable",responsable);

 app.get("/",(req,res)=>{
  res.send("Home Page")
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
  //post push
app.post('/enseignants/:id/notes/:matiere', (req, res) => {
    const enseignantId = req.params.id;
    const matiere = req.params.matiere;
    const notes = req.body.notes; 
    noteMatiere.push(notes)
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
        etudiant: 'islem',
        matiere: 'Mathématiques',
        description: 'Je pense qu\'il y a une erreur dans le calcul de ma note'
      },
      {
        id: 2,
        etudiant: 'souahaib',
        matiere: 'Mathématiques',
        description: 'Je n\'ai pas été évalué pour un exercice que j\'ai rendu'
      }
    ];
  
    res.status(200).send(reclamations);
  });
  












// connect to db and Start the server

mongoose
    .connect('mongodb+srv://mern:admin@cluster0.glvxvm1.mongodb.net/')
    .then(()=>{
      console.log("connected to DB")
        app.listen(PORT,()=>{
            console.log(`server Running on port ${PORT}`);  
        })
    })
    .catch((err)=> console.log(err))