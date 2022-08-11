

const isAuthenticated  = (req, res, next)=>{
    if(req.isAuthenticated()){
        console.log("sdfffffff", req.isAuthenticated())
        next()
    }else{
        res.status(200).json({status: 200,success: false, message: "UNAUTHORIZED REQUEST"})
    }
}

module.exports = isAuthenticated