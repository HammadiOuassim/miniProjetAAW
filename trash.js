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








