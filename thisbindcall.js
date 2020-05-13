'use strict'
var cat = {
    sound:  'meow',
    speak: function(){
        console.log(this.sound);
    }
} 

cat.speak();

//this errors due to lack of cat context
//var undefinedcat = cat.speak;
//undefinedcat();

//fix with the bind
var catfunction = cat.speak;
var catfunctionbound = catfunction.bind(cat);
catfunctionbound();

var person1 = {firstName:'Joe', lastName:'Shmoe'};
var person2 = {firstName:'Mary', lastName:'Contrary'};
function greeting(ending){
    console.log(this.firstName + ' ' + this.lastName + ' ' + ending);
}
//greeting(); this wont work

greeting.call(person1, "goodbye")
greeting.call(person2, "goodbye")
