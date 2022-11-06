const userModel = require("../../database/models/user");
const hashPassword = require("./hashPassword");
module.exports = function(form, callback){

    userModel.find({username:form.username, password:hashPassword(form.password)})
        .then((data)=>{
    
            if(data.length){
                callback(false, data);
            }else{
                callback(true);
            }
    
        }).catch((e)=>{
            console.log(e);
            console.log("error getting data from db");
            callback(true);
        });
}