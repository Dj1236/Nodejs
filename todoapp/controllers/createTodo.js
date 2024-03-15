// first we have to import the model inside the controller .
const Todo = require("../model/todo.js");

// define the route handler
module.createTodo = async(req,res)=>{
    try { 
        // extract tittle and descption form request body
        const {tittle, description}= req.body;
        // create a new todo object and insert in db
        const response = await Todo.create({ tittle, description });
        // send a json  response with success flag
        res.status(201).json({success:true , data : response , message:'Created Successfully'});

        
    } catch (error) {
        console.error(err);
        console.log(err);
        res.status(500).send('Error internal server error');
        res.json({ success: false, message: "Internal Error" });

    }
}

