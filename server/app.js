const express = require("express");
const cors = require('cors')
const http = require("http");
require("dotenv").config();
const passport = require('passport')
const session = require("express-session")
const MongoStore = require("connect-mongo");
const {graphqlHTTP} = require("express-graphql")
const { buildSchema } = require("graphql");
const local_strategy = require("passport-local").Strategy;

const app = express();

app.use(cors({
  origin: "http://localhost:3000",
  credentials: true,
}));

app.use(express.json());
const httpServer = http.createServer(app);

require("./use-cases/modules.config/express.session")(session,MongoStore)(app) // session and session and mongo-store
require('./use-cases/modules.config/passport')(local_strategy)(passport) // just my opinion not proven.. I must call this module and inject passport as argument to make sure the passport are running in our application
app.use(passport.initialize()) 
app.use(passport.session())    

require("./data-access/graphql/index.js")(app)(graphqlHTTP, buildSchema)

app.use((req, res, next)=>{
  console.log("req.isAuthenticated", req.isAuthenticated())
  console.log(req.session)
  next()
})

// routes
app.use(require("./routes").router);

let PORT;
process.env.STATUS === "production"
  ? (PORT = process.env.PROD_PORT)
  : (PORT = process.env.DEV_PORT);


  // should I run this after db is connected? update: oh nice done.
require("./data-access/database.mongo").once('open', ()=>{
  httpServer.listen(PORT, () => {
    console.log("mongoose connected successfully")
    console.log(`server in ${process.env.STATUS} mode, listening on *:${PORT}`);
  });
  
})


