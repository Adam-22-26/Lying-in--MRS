

module.exports = (req, res)=>{
    req.session.user = null;
    req.session.save((err)=>{
        if(err) next(err)
        // response
        req.session.regenerate((err)=>{
            if(err) next(err) // response err
            // else
            res.status(200).send({success: true, message: "log out"})
        })
    })
}