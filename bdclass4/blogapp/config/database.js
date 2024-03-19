const mongoose = require('mongoose');
require('dotenv').config();


const connectWithDb = ()=>{
    mongoose.connect(process.env.DATABASE_URL,
        {

        }).then(() => console.log("connected to the database "))
        .catch((err)=>console.log(err))
}

module.exports = connectWithDb;
