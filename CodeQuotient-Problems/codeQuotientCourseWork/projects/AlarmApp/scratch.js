let push = require("web-push");

let vapidKeys = push.generateVAPIDKeys();

console.log(vapidKeys);