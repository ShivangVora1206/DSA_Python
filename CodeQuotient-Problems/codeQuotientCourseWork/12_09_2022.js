//video to understand event loops youtube - philip roberts
// async cannot interrupt main js execution

console.log(1);

setTimeout(function () {
    console.log(2);
}, 1000);

setTimeout(function () {
    console.log(6);
}, 0);

console.log(3);
console.log(4);
console.log(5);
