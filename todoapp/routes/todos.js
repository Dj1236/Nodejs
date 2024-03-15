const express = require('express');
const router = express.Router();
// import the controller
const {createTodo} = require("../controllers/createTodo");
const { getTods} = require("../controllers/getTodos");

// define api 
router.post("/create", (req, res) => {
  // Your logic for creating a todo goes here
  createTodo
});
router.get('/', (req,res)=>{
  console.log(req.query);
  getTods
});
module.exports=router;