const bcyrpt = require('bcrypt');
const User = require('../model/user.js');


//sign up routehandler
exports.signup = async(req,res)=>{
    try {
        const {name,email,password,role} = req.body;
        //check user is existing 
        const existingUser = await User.findOne({email: email});
        if  (existingUser) return res.status(400).json({msg:'Email already exists'});
         
        // hashed password
        let hashedPassword ;
        try {
            hashedPassword =   await bcyrpt.hash(password,12);
        }  catch (error) {
            console.log("Error in hashing the password");
            return res.status(500).json({msg:"Server error"})
        }
         //create entry for user
         const user = new User({
             name ,
             email ,
             password : hashedPassword ,
             role
         })
         return res.status(200).json({
            success:true, 
            message:'user created successfully'
         });
        
    } catch (error) {
        console.error(err);
        return res.status(500).json({
            success:false,
            message:'user cannot regeister,pls try again'
        });
        
    }
}