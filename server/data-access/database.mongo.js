const mongoose = require("mongoose")
// require('dotenv').config()

// check the env.status and change the database connection
// mongodb+srv://admin:${process.env.PASSWORD}@cluster0.qqebu.mongodb.net/?retryWrites=true&w=majority
mongoose.connect(`mongodb+srv://admin:${process.env.PASSWORD}@cluster0.qqebu.mongodb.net/?retryWrites=true&w=majority`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // autoIndex: false  set to false if in production to prevent significant performance impact.
})

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));


module.exports = db;

// check the env.status and change the database connection
// process.env.STATUS === 'production'?
// (module.exports = mongoose.connect("mongodb://localhost/testdb",()=>{
//     console.log('connected')
// } , err => {console.log(err )})): ""

