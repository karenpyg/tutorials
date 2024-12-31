// function  funtionName(paranmeters){ 
	// code to be executed }

// function expressions 
const x = function (a, b) {return a*b}; 
// The function below ends with a semicolon because it is a part of an executable statement. 
let z =x(4, 3);

// Function() Constructor 
const  func_name = new Function("a", "b", "return a**b");
let  f1 = func_name(5, 6); 

// functions defined using an expressino are not hoisted 
//No Errors :
b = some_func(34); 
console.log(b);
function some_func(a){ return a ** 6}; 
//Errors:
// console.log(c(3))
c = function some_other_func(a){return "halo there you motherfucking piece of shit"};

//Self invoking functions : you have to add parantheses around the function to indicate that it is a function expression 
(function (){
	let x = "hello, i am invoking myself"; })();


//Function Context :
/* Binding a method to an object : to bind a func to an object
and make it an object method : use bind func */ 
var ObjectName = {
    name : "John"
};

function printName(){
	console.log(this.name);
}
var boundPrintName = printName.bind(ObjectName); 
boundPrintName(); // prints out John 

printName.call(person); 
// call/apply vs bind
var boundPrintName = printName.call(person);    //boundPrintName gets printName's return value (null)
boundPrintName();                               //doesn't work because it's not a function, it's null

printName.bind(person);                         //returns a new function, but nothing is using it so it's useless
printName();  

printName.call(person);     //is the same as
printName.bind(person)();   //executes the function returned by bind

var boundPrintName = printName.bind(person); //is the same as
var boundPrintName = function()
{
    printName.call(person);
}