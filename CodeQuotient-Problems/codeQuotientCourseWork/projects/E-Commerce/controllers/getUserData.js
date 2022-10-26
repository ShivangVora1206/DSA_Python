const getUserData = require("../services/user/getUserData");
module.exports = function (form, callback) {
    console.log(form);
    getUserData(form, callback);
}