
console.log( 'hi from index.js')
const express = require("express")
const cors = require('cors')
const app = express()
const passport = require("passport")


//midlleware
app.use(express.json())
app.use(cors())
app.use(passport.initialize())

// passport configuration
require('./middlewares/passport')(passport)

// connect to db
const connectDB=require("./config/connectDB")
connectDB()

//routes
app.use("/users",require("./routes/users"))
app.use("/fileUpload", require("./routes/uploadfile"))
app.use("/reset", require("./routes/resetPassword"))
app.use("/forget", require("./routes/forgetPassword"))
app.use("/sujet",require("./routes/sujet"))
//run server  
const PORT = process.env.PORT||5000
app.listen(PORT,err => err?console.log("err"):console.log(`connected to port ${PORT}`))
