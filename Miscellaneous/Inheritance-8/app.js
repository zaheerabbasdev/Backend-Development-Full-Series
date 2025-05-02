// class Student extends Person {
//     constructor (name, age, marks) {
//         super(name, age);
//         this.marks = marks;
//     }

//     greet(){
//         return "Hello Zaheer";
//     }
// }

// let p1 = new Student("Zaheer", 20, 100);

class Person {
    constructor(name, age){
        console.log("Person Class Constructor");
        this.name = name;
        this.age = age;
    }

      talk() {
        console.log(`Hi, my name is ${this.name}`);
    }
}


class Student extends Person{
    constructor(name, age, marks){
        console.log("Student Class Constructor");
        super(name, age); // Parent class constructor is being called.
        // this.name = name;
        // this.age = age;
        this.marks = marks;
    }

    // talk() {
    //     console.log(`Hi, my name is ${this.name}`);
    // }
}

let stu1 = new Student("Zaheer", 20, 100);
let stu2 = new Student("Abbas", 22, 80);



class Teacher extends Person{
    constructor(name, age, subject){
        console.log("Teacher Class Constructor");
        super(name, age); // Parent class constructor is being called.
        // this.name = name;
        // this.age = age;
        this.subject = subject;
    }

    // talk() {
    //     console.log(`Hi, my name is ${this.name}`);
    // }
}

let t1 = new Student("Zaheer", 20, "English");
let t2 = new Student("Abbas", 22, "Web Development");