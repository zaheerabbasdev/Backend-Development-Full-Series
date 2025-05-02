function PersonMaker (name, age) {
    const person = {
        name: name,
        age: age,
        talk (){
            console.log(`Hi my name is ${this.name}`);
        }
    };
    return person;
}



let p1 = PersonMaker("Zaheer", 21);
let p2 = PersonMaker("Abbas", 21);