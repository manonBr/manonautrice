const express = require("express")
const cors = require("cors")
const path = require("path")

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
// app.get("/", (req, res) => res.status(200).send("Home page"))
app.use(express.static(path.join(__dirname, '../client/dist')))
app.get('*', (req,res) => {
  res.sendFile(path.resolve(__dirname, '../client/dist', 'index.html'))
})

app.listen(port, () => {
  // Perform a database connection when server starts
  dbo.connectToServer(function (err) {
    if (err) console.error(err);
 
  })
  console.log(`Server is running on port: ${port}`)
})