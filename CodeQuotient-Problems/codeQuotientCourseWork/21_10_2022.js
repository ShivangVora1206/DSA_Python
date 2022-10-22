module.exports = "abc";
// to export one item
module.exports.name = "def";
module.exports.age = 99;
// to export multiple items

//object destructuring
var object = {
    name:"abc",
    age:99
}

const name = object.name;
const age = object.age;
const address = object.address;

//easier es6 syntax
const {name1, age1, address1="default"} = object;
//everything except name2 will be stored in rest
var {name2, ...rest} = object;
//deep copy an object
//also known as spread operator iterates over object and sets properties in a
//nested objects will still remain reference copies
var a = {...object};

//json.stringy json.parse is the simplest way to deep copy
