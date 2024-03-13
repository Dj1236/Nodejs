// server intantiate 
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json())
// server activate on port 2000
app.listen(2000, ()=>{
    console.log('server is started at port no 3000');
});
// routes 
// lets create out first route 
app.get('/',(req,res) =>{
    res.send('aav aav bhura');
});
// to check the data in the post req we use postman
// we use middleware parser to pass data from the postman 
app.post( '/api/cars' , ( req , res ) => {
    const {name,brand} = req.body;
    console.log(name);
    console.log(brand);
    res.send("car is submitted successfully ");

}); 
const mongoose = require('mongoose');
mongoose.connect('url',{

});
// we connect  our database using mongoose .
/* const mongoose = require('mongoose');

const mongoURI = 'mongodb://localhost:27017/your-database-name';

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
 .catch((error) => {
    console.error('Error connecting to MongoDB:', error.message);
});*/
// as we know that our main file is server.js but if we want to add  any new functionality or module then we will write it so it is confusion or bad
// readblity so we use mvc archithecutre
// we create our routes folder in which we create our all the routes and define them 
// if we add routes then we have to also create the functionality  of that routes  in controllers folder (we define buisness logic in the controller folder)
// buisneess logic is to create the entry in the database
// and in models we have schema(descp/structure of data) of that collection in which all the details of the objects is there
// controller is used for handling the request and response 
// service is used for business logic 
// view is used for presentation part 
// config file  contains all the configuration details of the application  like db connection etc
// env file  contain all the environment variables 