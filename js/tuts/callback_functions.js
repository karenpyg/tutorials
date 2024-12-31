/*We need callback functions because many JavaScript actions are asynchronous, 
which means they don't really stop the program (or a function) from running until theya re completed, 
as you're probably used to. Instead, it will execute in the background while the rest of the code runs.
*/ 

// const button = document.getElementById('button');
// function callback(){
// 	console.log("hello world"); } 
// button.addEventListner('click', callback); 

// // Asychronous Callback function 
// async function fetchUsers(){
// 	const resp = await fetch("<https://jsonplaceholder.typicode.com/users>");
// 	const users = await resp.json(); 
// 	const names = users.map(({login}) => login);
// 	console.log(names); 
// 		}

let second_callback = function(){
	console.log("DONE");
}

setTimeout(second_callback, 5000); 

// Arrow functions  
const greet = (name) => {return "hello" + name;}
// when there is only one argument you can not use () : greet = name => {}

let numbers = [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]; 
// Old way :
function multipleby2(number){
	return number*2; 
}

let multipliedNums = numbers.map(multipleby2);
console.log(multipliedNums);

// Using ES6 arrow notation
const multiplebytwo = number => number * 2; 
let multiplied_numbers = numbers.map(multiplebytwo);
console.log(multiplied_numbers);

