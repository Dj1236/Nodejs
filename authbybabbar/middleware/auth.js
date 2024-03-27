// for auth , isStudent , isAdmin .
const jwt = require('jsonwebtoken');
require('dotenv').config();
exports.auth = (req,res,next)=>{
    try { // extract the jwt token and other way to access tokens
        const token = req.body.token;

        if(!token){
            return res.status(401).json({
                success:false,
                message:'token is missing' ,
            });
        }
        try{
            //verify the token
            const decode = jwt.verify(token,process.env.JWT_SECRET)
            console.log(decode);
            req.user = decode;

        } catch(error){
            return res.status(401).json({
                success:false,
                message:'token is invalid'
            })
        } next();
        
    } catch (error) {
        return res.status(401).json({
            success:false,
            message:'something went wrong'
        })
        
    }
}
exports.isStudent = (req,res,next)=>{
    try {
        if(req.user.role  !== "student"){
            return res.status(401).json({
                success:false,
                message:'this is a proctected route for student'
            })
        }next();
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:'user role is not matching'
        })
    }
}
exports.isAdmin = (req, res, next) => {
  try {
    if (req.user.role !== "admin") {
      return res.status(401).json({
        success: false,
        message: "this is a proctected route for student",
      });
    }
    next();
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "user role is not matching",
    });
  }
};
 