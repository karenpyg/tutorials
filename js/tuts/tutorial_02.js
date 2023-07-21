// destructing and spreading 

const nums = [1, 2, 3, 4]; 
let [num_one, num_two, ...rest] = nums; 
console.log(rest)

const countries = [['Finland', 'Helsinki'], ['Sweden', 'Stockholm'], ['Norway', 'Oslo']]
for (const [country, city] of countries){
    console.log(country, city); 
}

const rectangle = {
    width: 20, 

}

const todoList = [
    {
      task:'Prepare JS Test',
      time:'4/1/2020 8:30',
      completed:true
    },
    {
      task:'Give JS Test',
      time:'4/1/2020 10:00',
      completed:false
    },
    {
      task:'Assess Test Result',
      time:'4/1/2020 1:00',
      completed:false
    }
    ]

for (const {task, time, completed} of todoList){
    console.log(task, time, completed);
}
const students = [
    ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
    ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
]

function cc(stu){
  for ([name, skills, scores] of stu){
    let ss = {
      name: name, 
      skills: skills, 
      scores: scores,
    }; 
    console.log(ss);
  }
}
cc(students); 

// Regex : 
let re = new RegExp("boobs maybe", "gi"); 

let reg = /lowlife/gi; 

let str1 = " i hate life to some good great level"; 
let pat1 = /hate/g; 
let res1 = str1.match(pat1); 



