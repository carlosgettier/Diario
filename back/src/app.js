const express = require("express")
const app = express()
var cors = require('cors')
const path = require("path")

app.listen(3001, () => console.log("corriendo"))
app.use(express.urlencoded({ extended: false }));
app.use(express.json())
app.use(cors())

app.use(express.static(path.join(__dirname, 'image')))

const apiRouter = require("./router/apiRouter")

app.use("/api", apiRouter)