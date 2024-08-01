import express from 'express'
 
import {getEmployees} from './databasehelper'
 
let app = express();
 
 
//http://localhost:3000/
app.get('/',(req, res)=>{
    res.send(`
<div align="center">
<h1>Hello , Welcome to my Express Server..</h1>
</div>
    `)
});
 
//http://localhost:3000/employees
app.get('/employees',getEmployees);
 
/*  //http://localhost:3000/deleteemployee
app.get('/deleteemployee',deleteEmployee);  */
app.listen(3000, ()=>{
    console.log("My Express Server is Running on Port No 3000....");
})