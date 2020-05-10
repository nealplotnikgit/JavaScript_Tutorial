function object_notation(){
person = {name: "Neal", age: 51, retired: false, parts:{arms: 2, legs: 2}};
person.hair="Brown";
person['age'] = 52;

console.log(person)
console.log(person.age)
console.log(person['hair']);
console.log(person.parts.arms);
console.log(person.parts['legs']);
}

function Home(size, rooms, color){
    this.size = size;
    if (typeof rooms == 'number') {
       this.rooms = rooms;
    }
    else {
     this.rooms = 0;
//     console.log(typeof rooms)
    }
    this.color = color;
    this.door = new String("Open");
    this.closeDoor = function (){
        this.door = "Closed"
    }
}
function object_create(){
myhome = new Home(1000, 4, 'red');
otherhome = new Home(1000,'fart','blue');
console.log(myhome)
console.log(otherhome)
myhome.closeDoor()
console.log(myhome)

}

object_create()