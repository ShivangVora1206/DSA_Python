let arr = [1, 2, 3, 4, 5];
let arr2 = [2, 4, 6, 8, 10];
let count = 0;
// let count2 = 0;
//forEach iterator
arr.forEach(fun);
console.log("count", count);

count = 0;

arr2.forEach(fun);
console.log("count 2", count);
function fun(value, index, array){ // callback function
    console.log(index);
    count += value;
    console.log(array);
}


let arr3 = [1, 2, 3, 4, 5];

let arr4 = [];

arr3.forEach(function (value, index){
    arr4.push(value*2);
})

console.log("arr4",arr4);
//map iterator
let arr5 = arr3.map(function (value, index){
    return value*2;
})
console.log("arr5",arr5);

//filter iterator

let arr6 = arr3.filter(function (value, index){
    if (value%2 === 0){
        return true;
    }
})

console.log(arr6);

//objects

var p1 = {
    name:"name1",
    age:99,
    place:"place"
};
console.log(p1);
p1.edu = "education";
console.log(p1);
delete p1.place;
console.log(p1);