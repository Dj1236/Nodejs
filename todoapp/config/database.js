const mongoose = require('mongoose');
require('dotenv').config();// je env ni andar define hase e process object ni andar aavi jase


// connection between your app and database

const dbConnect = () => {
    mongoose.connect(process.env.DATABASE_URL,{
    })// this will return promise 
    .then(()=>{console.log('db connection is succesfull ');})
    .catch((err)=>{console.error() });
}
module.exports = dbConnect;
