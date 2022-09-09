//closures
//when an inner function wants to access variables from its parent or outer function it can because of closures.
//js has a closure scope wherein if a function's variable is to be used in the future when the function mights
//be removed from the call stack, js add a new scope and gives it to the child funtion.

function fun(a){
    // a = 45;
    return function (){
        console.log(a);
    }
}
console.log(fun(45))
console.log(fun(45)())

//js will check localScope -> closureScope -> globalScope and then throw an error if variable is not found.