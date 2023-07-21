const person ={
    name : 'John',
    lastName : 'Doe',
    age : 23,
    language : ' ', 
    // get lang(){
    //     return this.language;
    // },
    // set lang(lang){
    //     this.language = lang;
    // }
};
let txt='';
for (let x in person){
    txt+= person[x] + ' ';
}
// console.log(txt);
function isValid(domain){

}

const conts = [["finland", "helsinki"], ["sweden", "stockholm"]]; 
for ([mame, dudul] of conts){
    console.log(mame, dudul);
}

const new_map = new Map(conts); 
new_map.set("usa", "washington-dc");
// person.greet = function(){return this.name + ' ' + this.lastName + 'says hello to you my friend'};
// console.log(person.greet);

// console.log(Object.keys(person));

// let myJsonString = JSON.stringify(person);
// console.log(myJsonString);

// let s_age = (person.age.toString());
// console.log(typeof(+'a'));
// console.log(+'a');

// const arr = ['john', 'mamad', 'gusfand', 'james']; 
// let ggg = (arr.toLocaleString());

// person.lang = 'english';
// console.log(person.lang);

// let arr = ["hasam", "mamam"];
// console.log(typeof(arr)); 
// arr += ","+"gav"; 
// let b = arr.split(",")
// for (let x in b){
//     console.log(b[x]); 
// }

// let x = "john"; 
// let y = new String("john");
// console.log(y); 


// let text_03, text_04 = "hello";
// console.log(text_03, text_04);

let domain = "htts://nobat.ir/"; 
// console.log(domain == "http://nobat.ir");

let cc = "/find/city-1/c-110/";
// if !(cc.startsWith("https://)

if (!domain.startsWith("http")){
    console.log('kir shodi jende?');
}

console.log(domain+cc);



// if (domain.endsWith("/") && isValid(domain)){
//     console.log('kir shodi')
// }


if (domain.endsWith("/") ){
    domain = domain.slice(0, -1); 
}

function printName()
{
    console.log(this.name);
}

printName(); // returns undefined :/

let sss = [1, 2, 3, 4, 5]; 
sss.reduce(
    (acc, current_val) => acc + current_val, 10
)