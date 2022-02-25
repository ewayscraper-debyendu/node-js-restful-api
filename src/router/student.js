const express = require('express');
const router = new express.Router();
const Student = require("../models/students");


//////////inset data async
//   router.post('/students', async (req, res) => {

//     try{
//         console.log(req.body);
//         const user = new Student(req.body);
//         const createUser = await user.save();
//         res.status(201).send(createUser);
//     }catch(e){
//         res.status(400).send(e);
//     }
//    // res.send('Hello World');
//   });
///////////get data async
  router.get('/students', async (req, res) => {

    try{
        const studentData = await Student.find();
        res.status(201).send(studentData);
    }catch(e){
        res.status(400).send(e);
    }
   // res.send('Hello World');
  });
  router.get('/students/:id', async (req, res) => {

    try{
        //const studentData = await Student.find();
        const _id = req.params.id;
        const studentData = await Student.findById(_id);
        res.status(201).send(studentData);
    }catch(e){
        res.status(400).send(e);
    }
   // res.send('Hello World');
  });

  ///update students
  router.patch('/students/:id', async (req, res) => {

    try{
        const _id = req.params.id;
        const studentData = await Student.findByIdAndUpdate(_id, req.body, {
            new:true
        });
        res.status(201).send(studentData);
    }catch(e){
        res.status(400).send(e);
    }
   // res.send('Hello World');
  });

   ///delete students
   router.delete('/students/:id', async (req, res) => {

    try{
        //const studentData = await Student.find();
        const _id = req.params.id;
        const studentData = await Student.findByIdAndDelete(_id);
        if(!_id){
        return res.status(400).send();
        }else{
            res.send(studentData);
        }
        //res.status(201).send(studentData);
    }catch(e){
        res.status(500).send(e);
    }
   // res.send('Hello World');
  });

module.exports = router;