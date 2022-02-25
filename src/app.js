const express = require('express');
//const mongoose = require('mongoose');
//const validator = require('validator');

require("./db/conn");
const Student = require("./models/students");
const studentRouter = require("./router/student");

const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());
app.use(studentRouter);
app.get('/', function (req, res) {
    res.send('Hello from other side');
  });

///create new router
//  const router = new express.Router();

//  router.get("/bhunia", (req, res) => {
//      res.send("helo router");
//  });

//  app.use(router);
app.use(studentRouter);

// app.post('/students', function (req, res) {
//     console.log(req.body);
//     const user = new Student(req.body);
//     user.save().then(() => {
//      res.status(201).send(user);
//     }).catch((e) =>{
//         res.status(400).send(e);
//         //res.send('Hello Workkkld');
//     });
//    // res.send('Hello World');
//   });

// ////////////inset data async
// //   app.post('/students', async (req, res) => {

// //     try{
// //         console.log(req.body);
// //         const user = new Student(req.body);
// //         const createUser = await user.save();
// //         res.status(201).send(createUser);
// //     }catch(e){
// //         res.status(400).send(e);
// //     }
// //    // res.send('Hello World');
// //   });
// ///////////get data async
//   app.get('/students/:id', async (req, res) => {

//     try{
//         //const studentData = await Student.find();
//         const _id = req.params.id;
//         const studentData = await Student.findById(_id);
//         res.status(201).send(studentData);
//     }catch(e){
//         res.status(400).send(e);
//     }
//    // res.send('Hello World');
//   });

//   ///update students
//   app.patch('/students/:id', async (req, res) => {

//     try{
//         //const studentData = await Student.find();
//         const _id = req.params.id;
//         const studentData = await Student.findByIdAndUpdate(_id, req.body, {
//             new:true
//         });
//         res.status(201).send(studentData);
//     }catch(e){
//         res.status(400).send(e);
//     }
//    // res.send('Hello World');
//   });

//    ///delete students
//    app.delete('/students/:id', async (req, res) => {

//     try{
//         //const studentData = await Student.find();
//         const _id = req.params.id;
//         const studentData = await Student.findByIdAndDelete(_id);
//         if(!_id){
//         return res.status(400).send();
//         }else{
//             res.send(studentData);
//         }
//         //res.status(201).send(studentData);
//     }catch(e){
//         res.status(500).send(e);
//     }
//    // res.send('Hello World');
//   });
  app.listen(port, () =>{
      console.log(`The port number is: ${port}`);
  });