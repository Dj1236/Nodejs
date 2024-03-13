const express = require('express');
const router = express.Router();
// import the controller
const {createTodo} = require("../controllers/createTodo");

// define api 
router.post("/create", (req, res) => {
  // Your logic for creating a todo goes here
});
module.exports=router;