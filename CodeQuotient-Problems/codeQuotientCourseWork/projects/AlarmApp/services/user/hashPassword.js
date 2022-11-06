const crypto = require('crypto');



module.exports = function (pwdString){
    pwdString = pwdString + "$3.141S@a!L+t";
    let hashPwd = crypto.createHash('sha256').update(pwdString).digest('hex');
    return hashPwd;
}