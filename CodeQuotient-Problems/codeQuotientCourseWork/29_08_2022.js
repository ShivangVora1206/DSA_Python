let a = {
    name : "name1",
    age : 99,
    address : "address1",
    greetings : function () {console.log("Hello World");}
}
//iterating through an object
for (var prop in a){
    console.log(a.prop); // it will look for 'prop' in a
    console.log(a[prop]); // similar to python dict only used in this kind of a loop
}
//console.log(a[name]); // name not defined

a.greetings();

var b = {
    firstName : "firstName",
    lastName : "lastName",
    getFullName : function () {
        return this.firstName+" "+this.lastName; //this refers to the caller of the function
    }
}

console.log(b.getFullName());