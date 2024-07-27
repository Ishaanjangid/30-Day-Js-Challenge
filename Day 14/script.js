// Day 14

// Activity 1

// __Task 1__
function Person(username,age) {
    this.username = username;
    this.age = age;

    this.greet = function() {
        console.log(`Good Morning ${this.username}`);
    }

    this.updateAge = function (age) {
        this.age = age;

        console.log(`New age is ${this.age}`);
    }

    // greet(){
    //     console.log(`Hello my name is ${this.name}, I am ${this.age} old`);
    // }

    // static getGenericGreeting(){
    //     console.log("Hello, this is a generic greeting!");
    // }
}


const person1 = new Person("Ishaan",69);

person1.greet();

// __Task 2__
person1.updateAge(18);


// Activity 2

// __Task 3__

class Student extends Person{
    constructor(name, age, studentID){
        super(name,age);
        this.studentID = studentID;

    }

    getStuID(){
        return this.studentID;
    }

   
}

const student1 = new Student("Kartik",21,5748);
console.log(student1.greet());


// Activity 3

// __Task 5__

