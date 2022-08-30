// console.log("hello");

// var a = 12;
// var b = 4;
// var c = '4';
// var d = '4i';

// console.log(a + b + c);
// console.log(typeof (a + b + c));
// console.log(c * d);
// let a = 5;
// let b = 10;

// let c = a++ + --b;
// const d = c-- - ++a + b++;

// console.log(a, b, c, d);
const greeter = 'CodeQuotient';

const sayHi = function greetings() {
    console.log(`${greeter} says, 'Hi!'`);

    var greeter = 'CQ';

    console.log(`${greeter} says, 'Hi!'`);
}

sayHi();