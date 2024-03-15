const express = require('express');
const app = express();
const users = require ("./MOCK_DATA.json")
const PORT = 8000;
// define the routes 
app.get("/api/users", (req,res)=>{
    return res.json(users);


})
app 
    .route("/api/users/:id")
    .get((req,res)=>{
        const id = Number(req.params.id);
        const user = users.find((user)=> user.id===id);
        return res.json(user);
        
    })
    .patch((req,res)=>{
        return res.json({status:"pending"});

    })
    .delete((req,res)=>{
        return res.json({ status: "pending" });

    });
    app.post("/api/users",(req,res)=>{
        return res.json({ status: "pending" });
    })
// app.get("/users", (req, res) => {
//   const html = `
//   <ul>
//        ${user.map((user)=>`<li>${user.first_name}</li>`)} 
//   </ul>`;
//   res.send(html);
// });
// app.get("api/users/:id", (req, res) => {
// const id = Number(req.params.id);
// const users = user.find((users)=>user.id ===id);
// 
// });
// dynamic path 

app.listen(PORT,()=>[
    console.log('server is started at port number 8000')
])