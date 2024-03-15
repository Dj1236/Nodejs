// first we have to import the model inside the controller .
const Todo = require("../model/todo.js");

// define the route handler
module.getTodo = async (req, res) => {
  try {
    // fetch all items from the database
    const todos = await Todo.find({});
    //response 
    res.status(200)
    .json({
        success:true,
        data:todos,
        message:"entire todo data is fetched ",

    });

  } catch (error) {
     console.error(err);
     console.log(err);
     res.status(500).send("Error internal server error");
     res.json({ success: false, message: "Internal Error" });
   
  }
};
