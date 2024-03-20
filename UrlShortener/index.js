const express = require('express');
const app = express();
const URL = require('./models/url.js')
const {connectDB} = require('./connect.js')
const urlRoutes = require('./routes/url.js')
const PORT = 2000;
connectDB("mongodb://localhost:27017/shortener")
.then (()=>{console.log("Database Connected")});
app.use(express.json());
app.get("/:shortId", ( req, res)=>{
  const shortId = req.params.shortId;
  // Define an async function
  async function updateURL() {
    try {
      // Use await inside the async function
      const entry = await URL.findByIdAndUpdate(
        {
          /* query criteria */
        },
        { $push: { visitHistory: { timestamp: Date.now() } } }
      );
      // Other code here
    } catch (error) {
      console.error(error);
    }
  }

  // Call the async function
  updateURL();

  res.redirect(entry.redirectURl);
})
app.use("/url",urlRoutes);
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
