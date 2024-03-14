const express = require('express');
const app = express();
const PORT = 8000;
// define the routes 

app.listen(PORT,()=>[
    console.log('server is started at port number 8000')
])