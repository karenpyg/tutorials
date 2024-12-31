// All js values, except primitives, are objects (a primitive value that has no properties or methods
// a Primitive data type is data that has primitive value. js has 7 types of primitive data types. 
// string, number, boolean, null , undefined, symbol, bigint 
//Object example : 
const person = {firstName:"john", lastName:"Doe", age:39};
// Dict in python, Hash tables in C, Hashes in Perl 
for (let x in person){
	txt += person[x]; }
const myObj = {
  name: "John",
  age: 30,
  cars: [
    {name:"Ford", models:["Fiesta", "Focus", "Mustang"]},
    {name:"BMW", models:["320", "X3", "X5"]},
    {name:"Fiat", models:["500", "Panda"]}
  ]
};

for (let i in myObj.cars){
	x += "<h1>" + myObj.cars[i].name +"</h1>"; 
	for (let j in myObj.cars[i].models){
		x += myObj.cars[i].models[j]; } } 
// Adding a new method to an object
person.name = function (){ return this.firstName+" " + this.lastName}; 
// object literal is the object describtion string! =>An object literal is a list of name:value pairs (like age:50) inside curly braces {}.

//what is this??
// in an object, this refers to the object 
// alone, this refers to the global object 
// in a function, this is a global object 
// in func in strict mode this is Undefined , in an event ,this refers to the element that received the event.

// DISPLAYING AN OBJECT 
// js displaying of an object will output [object object]

{/* <script>
const person = {
  name: "John",
  age: 30,
  city: "New York"
};

document.getElementById("demo").innerHTML = person;
</script> */}

// you can show an object in a loop 
let txt=""; 
for (let x in person){
	txt += person[x] + " ";
}; 

document.getElementById("demo").innerHTML = txt; 
// You must use person[x] in the loop.
// person.x will not work (Because x is a variable)

// Using Object.values()
// any js object can be converted to an array using Object.values() 
const objArray = Object.values(person); 
// orrrrr it can be jsoned : 
let myJsonStringedObj = JSON.stringify(person);

// if you wanna exactly strigify the object: 

person.age = person.age.toString();
let stringing = JSON.stringify(person);
document.getElementById("demo").innerHTML = stringing; 

// wtf?!?!? : strigifying an array: 
const arr = ["John", "Peter", "Sally", "Jane"];

let myString = JSON.stringify(arr);
document.getElementById("demo").innerHTML = myString;


// js object constructors 
