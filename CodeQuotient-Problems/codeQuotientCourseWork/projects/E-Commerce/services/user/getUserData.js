const userModel = require("../../database/models/user");
module.exports = function(form, callback){

    userModel.find({username:form.username, password:form.password})
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