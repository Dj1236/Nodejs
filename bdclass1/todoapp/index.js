const express = require("express");
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 4000;
// middleware to pass json body 
app.use(express.json()) ;
// imports routes for todo api
const  todoRoutes = require('./routes/todos');
//mount the todos api
app.use("/api/v1",todoRoutes);
// start the server 
app.listen(PORT,()=>{
    console.log('server is started');
}) 
// connect to the db
const dbConnect = require('./config/database');
dbConnect();
//default routes 
app.get("/",()=>{
    res.send(`<h1> have kantado aave che ho bhura </h1>`);
})
// // what is node mon we dont have to run  server every time 
// // it will automatically restart the server when any change in code is made.
// app.listen(3000,()=>{
//     console.log('App is running in port on 3000');
// })
