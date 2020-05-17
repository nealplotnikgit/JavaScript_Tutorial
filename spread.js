

///arrays

var letters = ['a','b','c'];
console.log(letters);
console.log(...letters); //gives the letters outside the array

var moreletters = ['d','e','f'];

es5letters = letters.concat(moreletters);
es6letters = ['a','b','c',...moreletters];

console.log(es5letters);
console.log(es6letters);
//functions

group1 = [1,2,3];
group2 = [4,5,6];

var product = (a,b,c) => a*b*c;

console.log(product(...group1));
console.log(product(...group2));