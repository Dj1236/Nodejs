const bcyrpt = require('bcrypt');
const User = require('../model/user.js');
const jwt = require('jsonwebtoken');
const { use } = require('../Routes/user.js');
require('dotenv').config();




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

// now for the login page 
exports.login = async (req,res)=>{
    try {
        const {email,password}= req.body;
        // validation of email and password
        if(!email||!password){
            res.status(400).json({
                success:false,
                message:'please fill all the details carefully '
            });


        }
        // check for the registered user 
        const user = await User.findOne({email})
        // if not a registered user 
        if(!user){
            return res.status(400).json({
                success:false,
                message:'user is not registered'
            })
        }
        const payload = {
            email : user.email,
            id :user.id,
            role:user.role
        }
        // verify password and jwt token 
        if (await bcyrpt.compare(password,user.password)){
            // if password match
            let token = jwt.sign(payload,process.env.JWT_SECRET,
                {
                    expiresIn:"2h"
                });
            user.token = token;
            user.password = undefined;
            const options = {
                expires:new Date (Date.now()+ 3*24 *60*60*10000),
                httpOnly:true,
            }
            res.cookies("token",token,options).status(200).json({
                success:true,
                message:'user logged in successfully'
            })  
                



        }
        else{
            // password does not match 
            res.status(402).json({
                success:false,
                message:'password incorrect'
            })
        }
        
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success:false,
            message:'login failure'
        })
        
    }
}