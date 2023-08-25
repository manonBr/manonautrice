const express = require("express")
const cors = require("cors")

const app = express()
require("dotenv").config({ path: "./config.env" })
const port = process.env.PORT || 5000

// Middlewares
app.use(cors())
app.use(express.json())

// Routes
app.use(require("./routes/record"))

// Get MongoDB driver connection
const dbo = require("./db/conn")

// API
app.get("/", (req, res) => res.status(200).send("Home page"))
 
app.listen(port, () => {
  // Perform a database connection when server starts
  dbo.connectToServer(function (err) {
    if (err) console.error(err);
 
  })
  console.log(`Server is running on port: ${port}`)
})