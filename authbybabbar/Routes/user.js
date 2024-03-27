const express = require('express');
const router = express.Router();
const {login,signup} = require(' ../Controllers/auth.js');
const {auth,isStudent , isAdmin} = require('../middleware/auth.js')
router.post("/login", login);
router.post("/signup",signup);

// proctected routes 
router.get("/test", auth, (req, res) => {
  res.json({
    success: true,
    message: "welcome to the proctected route of test",
  });
});
router.get("/student",auth,isStudent,(req,res)=>{
    res.json({
        success:true,
        message:'welcome to the proctected route of student'
    })
})
router.get("/admin", auth, isAdmin, (req, res) => {
  res.json({
    success: true,
    message: "welcome to the proctected route of admin",
  });
});
module.exports = router;

