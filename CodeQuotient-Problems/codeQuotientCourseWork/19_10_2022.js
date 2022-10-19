//web revision lec 2
var Animal = {
    legs : 0,
    getLegs : function(){
        return this.legs;
    }
}

var dog = {
    name :"dog"
}

dog.__proto__ = Animal;//prototype chaining to implement inheritance

console.log(dog);

//js has a global variable called name

//if we assign a value to a variable without var, let or const then it automatically becomes a global variable

//the above behaviour can be tackled using 'use strict' at the beginning of the file

function abc(num){
    if(num%2 === 0){
        // var sq = num*num;
        let sq = num*num;
    }
    // console.log(sq);
}
abc();
// hoisting is the behavior of moving all declarations to the top of the current scope (to the top of the current script or the current function)
//let and const are hoisted differently than var

for (var index = 0; index < 10; index++) {
    setTimeout(() => {
        console.log(index);
    }, 1000);
    
}

//wenworkers on browser and child processes on node