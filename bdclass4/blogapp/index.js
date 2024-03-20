const express = require('express');
const app = express();
// app.listen(3000, ( req,res )=>{
//     console.log('server has started');
// })
require('dotenv').config();
const PORT = process.env.PORT || 5000;

// middleware 
app.use(express.json());

// routes 
const blog = require( './routes/blog' );

app.use('/api/v1', blog);
//database
const connectWithDb = require('./config/database.js')
connectWithDb();
// start the server 
app.listen(3000, (req,res)=>{
    console.log('app is started at port no 3000');
})
app.get("/", (req,res)=>{
    res.send(`<h1>this is a default home page </h1>`)
})