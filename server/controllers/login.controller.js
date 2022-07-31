
const loginController = (req, res, )=>{
    try{
        res.status(201).json({status:201, success:true })
    }catch(err){
        res.status(401).json({status: 401, success: true, message: "USER IS NOT EXISTS"})
    }
}
module.exports = loginController