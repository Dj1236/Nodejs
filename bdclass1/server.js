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
/* const mongoose = require('mongoose');

const mongoURI = 'mongodb://localhost:27017/your-database-name';

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
 .catch((error) => {
    console.error('Error connecting to MongoDB:', error.message);
});*/
  
