const mongoose = require('mongoose');
require('dotenv').config();
exports.connect = ()=>{
    mongoose.connect(process.env.URL)
    .then(() => console.log("db is connected successfully "))
    .catch((err)=>console.log(`there is error some in between ${err}`))
    process.exit(1);
    
}

