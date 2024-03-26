const express = require('express');

const app = express();

require('dotenv').config();

const PORT = process.env.PORT || 3001;

app.use(express.json());

require('./config/database.js').connect(); // Connect to the database before starting server

// import route and mount 
const user = require('./Routes/user.js');
app.use("/api/v1",user);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});