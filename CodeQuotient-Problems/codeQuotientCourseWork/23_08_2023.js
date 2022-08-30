var a = [];
a.push(1);
a.push(2, 3, 4, 5, 6);
console.log(a.length)
for( var i=0; i< a.length; i++){
    // console.log(a[i])
    if (typeof a[i] === "number")
    console.log(a[i], "number")
}
a.splice(0, 2)
console.log(a)
a.splice(-1, 2)
console.log(a) 
function fun(){
    console.log("hello");
}
a.push(fun)
console.log(a)
fun()