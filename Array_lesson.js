function array(){
person = ['Neal','Mari', 'Jason','David'];
console.log(person)
x = person.pop();
console.log(person);
console.log(x);
person.push("Farley");
console.log(person);
x = '';
console.log(person);
x = person.shift();
console.log(x);
console.log(person);
person.unshift("Fred");
console.log(person);

person.sort((x,y)=> x.localeCompare(y));
console.log(person);

morePersons = ['Paco','Nachon','Taco'];

concatPersons = person.concat(morePersons);
console.log(concatPersons)
concatPersons.reverse();
console.log(concatPersons)
concatPersons.sort();
console.log(concatPersons);
slicedPersons = concatPersons.slice(0,3);
console.log(slicedPersons);
}
array()