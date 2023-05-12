// i promise a result !
// A JavaScript Promise object contains both the producing code and calls to the consuming code:
let littlePromise = new Promise(function(resolve, reject){
// Producing code (may take some time) 
	resolve(); 
	reject();
}); 

// Consuming code, (must wait for a fulfilled Promise)
littlePromise.then(
	function(value){ /* code if successful */ }, 
	function(error){ /*code if some error */ }
); 


// js promise can be : pending , fulfilled , rejected
// the Promise object supports two properties : state and result 
/* 
Promise.state: "pending" --> Promise.result : undefined 
Promise.state "fulfilled" --> Promise.result : a result value 
Promise.state "rejected" --> Promise.result : an error object 

You cannot access the Promise properties state and result.

You must use a Promise method to handle promises

Promise how to :
myPromise.then(
	function(value){ if successful }
	function(error) { if error });   */


function myDisplayer(some) {
  document.getElementById("demo").innerHTML = some;
}

let myPromise = new Promise(function(myResolve, myReject) {
  let x = 0;

// The producing code (this may take some time)

  if (x == 0) {
    myResolve("OK");
  } else {
    myReject("Error");
  }
});

myPromise.then(
  function(value) {myDisplayer(value);},
  function(error) {myDisplayer(error);}
);



// Example Using Callback
// setTimeout(function() { myFunction("I love You !!!"); }, 3000);

// function myFunction(value) {
//   document.getElementById("demo").innerHTML = value;
// }

function gerServerStatus(){
  const result = fetch("");
  result.then(function(status){
    console.log("the status is", status.ok);
  });
}

// DEMO 
// async usage:
function sa(x, y){
  const p = new Promise((resolve, reject) => {
    // this resolves the promise we just created with the output of x+y
    resolve(x+y); 
  }); 
  return p;
}

// lets use the function now :
sa(5, 7).then(result =>{
  console.log("the Result is " + result);
}); 


function sum(x, y) {
  console.log("1. sum is executed"); 
  const p = new Promise((resolve, reject) =>{
    // run this in 500ms from now : 
    setTimeout(() => {
      console.log("4. running after 500ms ");
      resolve(x+y);
    }, 500);

    // we dont need to return anything :
    console.log("2. Promise is initialized");
  }); 
  console.log("3. function has returned the promise"); 
  return p; 
}
// lets use the function now :
sum(5, 7).then(result => {
  console.log("5. The result of the addition is:", result); 
});

function blt(x, y){
  return new Promise((resolve, reject) => {
    // run this in 500 ms from now 
    setTimeout(() => {
      if (x<0 || y<0){
        reject("negative values received"); 
      } else {
        resolve(x+y);
      }
    }, 500);
    // we dont need to return anything 
  });
}

blt(-5, 7).then((result) => {
  console.log("addition res", result);
}).catch((error) => {
  console.log("error received", error);
});

// Async and Await 
/* Coroutines : 
a coroutine is a function which can pause its execution and return control to the main 
loop untill some event occurs .its an alternative approcah for using callback functions, */

/* await: tells js to stop the execution of the current function until a Promise resolves
and then returns the Promise value. (endless loop which checks if the promise has been resolved, 
  and return when it does) 

The await keyword only works inside async functions (which are coroutines, as explained 
  before). The tricky part about async functions is that they return a Promise, 
  instead of a value. This means that every time we need to run an async function, 
  we need to await on it if we want to get the return value.
  */

function sleep(ms){
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function sumAsync(x, y) {
  return new Promise((resolve, reject) => {
      sleep(5000).then(() => {
          resolve(x + y);
      });
  });
}

sumAsync(23, 5).then(result => {
  console.log("the result of the addition is :", result); 
}); 

// sexier way of writing it would be: 

async function augmented_sumAsync(x, y) {
  // this code waits here for 500 milliseconds
  await sleep(500);
  // done waiting. let's calculate and return the value
  return x+y;
}
// you can call it the same way you did with augmented_sumAsync