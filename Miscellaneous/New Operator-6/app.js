// function PersonMaker (name, age) {
//     const person = {
//         name: name,
//         age: age,
//         talk (){
//             console.log(`Hi my name is ${this.name}`);
//         }
//     };
//     return person;
// }

// Constructors: Constructors does not return anything and start with capital letter
function Person (name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.talk = function() {
    console.log(`Hi my name is ${this.name}`);
}

let p1 = new Person("Zaheer", 20);
let p2 = new Person("Abbas", 22);




// let p1 = PersonMaker("Zaheer", 21);
// let p2 = PersonMaker("Abbas", 21);