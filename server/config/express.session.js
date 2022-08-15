
module.exports = (session, MongoStore)=>{
    return (app)=>{
        var session_option = {
            secret: process.env.SESSION_SECRET_KEY,
            resave: false,
            rolling: false,
            saveUninitialized: false, // forcing to save to the store
            cookie:{maxAge: 1000 * 60 * 60 * 24},
            store: MongoStore.create({
               //clientPromise,
            //    mongodb+srv://admin:${process.env.PASSWORD}@cluster0.qqebu.mongodb.net/?retryWrites=true&w=majority
                mongoUrl: `mongodb+srv://admin:${process.env.PASSWORD}@cluster0.qqebu.mongodb.net/?retryWrites=true&w=majority` , //mongoOptions: "" //
                ttl: 1000 * 60 * 60 * 48 // when session has no expiration this will be used.
                //autoRomove: // status===production? 'native': 'disabled' native is the default
            })
        }
        // process.env.STATUS === 'production'?
        //  app.set('trust proxy', 1) (session_option.cookie.secure = true) :  session_option.cookie.secure = false;
        app.use(session(session_option))
    }
}

// rolling - resetting the session expiration
//req.session.destroy() - delete session
