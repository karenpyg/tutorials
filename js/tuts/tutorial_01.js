/* do not declare Strings, Numbers, Booleans as objects 
they complicate the code and slow down execution speed */

/* js events
<element event='some JavaScript'>
<button onclick="document.getElementById('demo').innerHTML = Date()">The time is?</button>

*/
// you can change the content of the element itself using this:
{/* <button onclick="this.innerHTML = Date()">The time is?</button>
// call a function with:
<button onclick="displayDate()">Display</button> */}

/* Event handlers can be used to handle and verify user input, user actions, and browser actions:

Things that should be done every time a page loads
Things that should be done when the page is closed
Action that should be performed when a user clicks a button

*/

// break a line after a backslash 
// document.getElementById("demo").innerHTML = "Hello \
// Dolly!";

// Never create Strings as Objects Strings and objects cannot be 
// safely Compared

let x = new String("john");
let y = new String('john'); 
// will output  falsseeee 
console.log(x ==y ); 
// also will output false :/
console.log(x === y); 
//  COMPARING TWO JS OBJECT WILL ALWAYS RETURN FALSEEEE 

// some usefull string methods : slice, substring, substr
let text    = "Apple, Banana, Kiwi";
let part = text.slice(-12);
console.log(text.slice(-12, -6));
// The difference is that start and end values less than 0 are treated as 0 in substring().
let text_01 = "Please visit Microsoft!";
let newText = text_01.replace("Microsoft", "W3Schools");
/* The replace() method does not change the string it is called on.
The replace() method returns a new string.
The replace() method replaces only the first match
If you want to replace all matches, use a regular expression with the /g flag set.
To replace case insensitive, use a regular expression with an /i flag (insensitive):

*/
let newText_01 = text.replace(/MICROSOFT/i, "W3Schools");
// for global matching use regex /g : meaning global :
let newText_02 = text.replace(/Microsoft/g, "W3Schools");

// replaceAll() is 2021, so use it : 
// let text_02 = text.replaceAll(/cats/g, "DOGS");

let text_03 = "hello";
let text_04 = "world";
console.log(text_03.concat(" ", text_04));
/* All string methods return a new string. 
They don't modify the original string.
Formally said:
Strings are immutable: Strings cannot be changed, only replaced.
*/

// using reduce with and initial value: 
// the initial value here is 100
let array_01 = [1, 2, 3, 4, 5, 6, 7, 8, 9]; 
const mame = array_01.reduce(
    (acc, current_val) => 
        acc + current_val, 10, 
); 

const mame_1 = [15, 16, 17, 18, 19].reduce(
    (acc, curr_val) => acc+curr_val, 10,
); 
console.log(mame);


const flattened = [ 
    [0,1 ], [2, 3], [4, 5], [6, 7], [8, 9, 10],
].reduce((acc, curr_val) => acc.concat(curr_val),[]); 


const objects = [{x:1}, {x:2}, {x:3}, {x:4}, {x:5}];
const sum_of_objects = objects.reduce(
    (acc, curr_val)=> acc + curr_val.x, 0,
); 
console.log(sum_of_objects); 

const names = ['alice', 'bob', 'tiff', 'bruce', 'alice']; 
const counted_names = names.reduce(
    (all_names, name) => {
        const currcount = all_names[name] ?? 0; 
        return 
    }
)


// THE NULLISH COALESCING OPERATOR(??)
// returns the first argument if it is not nullish o.w it returns the second argument
let null_name = null; 
let None_null_text = "missing"; 
let result = null_name ?? None_null_text; 
console.log(result);

// optional chaining operator (?.) 
// returns undefined if an object is undefined or null 
const car = {type:"Fiat", model:"500", color:"white"};
console.log(car?.name); 

// spread syntax(...) 
/* allows an iterable to be expanded in places where zero or more arguments or elements
are expected */ 
function sum(x, y, z) {
    return x + y + z;
  }
  
  const numbers = [1, 2, 3];
  
  console.log(sum(...numbers));
  // Expected output: 6
  
  console.log(sum.apply(null, numbers));
  // Expected output: 6
  
const adrian = {
    fullName: 'Adrian Oprea',
    occupation: 'Software developer',
    age: 31,
    website: 'https://oprea.rocks'
};

const bill = {
    ...adrian,
    fullName: 'Bill Gates',
    website: 'https://microsoft.com'
};