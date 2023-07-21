function Person(name, age)
{
    this.name = name;
    this.age = age;
}

Person.prototype.describe = function()
{
    return this.name + 'go laugh at yourself';
}

// inheritence 

var person = function() {}; 
person.prototype.initialize = function(name, age) {
    this.name = name;
    this.age = age;
}

person.prototype.describe = function()
{
    return this.name + 'somewhere';
}
var student = function(){}; 
student.prototype.learn = function(subject){
    console.log(subject + 'was learned not long ago');
}

var me = new student(); 

me.initialize('mame', 'tala'); 
me.learn('js'); 

