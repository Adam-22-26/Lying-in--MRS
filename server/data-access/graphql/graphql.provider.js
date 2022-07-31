const query = require("../query")
module.exports = {
    getUser: async({email, password})=>{
        const user = await query.getUser(email, password)
        if(user){
            return  user
        }else{
            return "No Data"
        }
    },
};
