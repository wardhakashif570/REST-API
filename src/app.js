const express = require("express");
require("./db/conn.js");
const Student = require("./models/students");
const app = express();
const studentRouter=require("./routers/student");
const port = process.env.PORT || 8000;


app.use(express.json());
app.use(studentRouter);






app.listen(port, () => {
  console.log(`connection is setup at ${port}`);
})












// app.get("/",(req,res)=>{
//   res.send("hello from server");
// })


//create a new students but it could better done in async await method
// app.post("/students", (req, res) => {
//   console.log(req.body);
//   const user = new Student(req.body);
//   user.save().then(() => {
//     res.status(201).send(user);
//   }).catch((e) => {
//     res.status(400).send(e);
//   })

// })