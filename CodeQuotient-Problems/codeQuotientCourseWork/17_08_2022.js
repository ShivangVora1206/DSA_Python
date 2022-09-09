function fun(a, b){

    // console.log(x);
    return a+b;
}

a = fun;
b =  fun(1, 2);
console.log(a);
console.log(a, b);
console.log(typeof a, typeof b);

//anonymous function
var c = function fun1(){console.log("fun1")}

//fat arrow function
var d = (a, b) => {return a+b;}

function fun2(abc){
    abc() // for 1
    console.log(abc) // for 2
    abc("hello world") // for 3
}

fun2(c) // 1

fun2(d(1, 2)) // 2

fun2(function (str){console.log(str)}) // 3