const mongoose = require('mongoose');
const todoSchema = new mongoose.Schema(
    {
        title:{
            type:String,
            required:[true,'Please add a title for the task'],
            minlength:[3,"Title must be  at least 3 characters"]
        },
        description:{
            type: String,
            required : false,
            
        },
        createdAt:{
            type:Date,
            default: Date.now(),
            required:true,

        },
        updateAt:{
            type:Date,
            default: Date.now(),
            required:false
        }
    }
);
module.exports = mongoose.model("Todo",todoSchema);
// this model  is used by controllers 
