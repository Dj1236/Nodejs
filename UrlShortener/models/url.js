const mongoose = require('mongoose');
const urlSchema = new mongoose.Schema({
  shortId: {
    type: String,
    required: true,
    unique: true,
  },
  redirectURl: {
    type: String,
    required: true,
    unique: true,
  },
  visitHistory:[{
    timestamp:{Number}
  }],
  
}  , {timestamps : true});

const URL = mongoose.model(  'URL', urlSchema );
module.exports=URL;