// Learning Basics Of Function's

function sayMyName() {
    console.log("I");
    console.log("s");
    console.log("h");
    console.log("a");
    console.log("a");
    console.log("n");
}

// console.log(sayMyName);

sayMyName();




// unaware of the number of parameter

function cartPrice(x,y, ...num1) {
    console.log(x);
    console.log(y);
    return num1;
}

console.log(cartPrice(4,432,43,2343,243));


console.log('');
// Activity 1

// __Task 1__
function evenORodd(num) {
    if (num % 2 == 0) {
        console.log(`${num} is even`);
    } else {
        console.log(`${num} is odd`);
    }
}

evenORodd(-5);

console.log('');
// __Task 2__
function calculateSquare(num) {
    return num**2;  
}

console.log(calculateSquare(9));


console.log('');
// Activity 2

// __Task 3__

function minmax(num1,num2) {

    if (num1 > num2) {
        console.log(`${num1} is greater then ${num2}`);
    } else {
        console.log(`${num2} is greater then ${num1}`);  
    }

}

minmax(5,34);

console.log('');

// __Task 4__
function addString(name,greating_message) {
    return `${greating_message} ${name}`
}


console.log(addString("Ishaan","Good Evening"));

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// basic Learning of ARROW FUNCTION'S


// 'this' => this stand for current context

// creating an object

console.log('');
let user = {
    name: "Ishaan",
    age: 18,
    loggedIn: true,

    welcome_msg: function great() {
        console.log(`Good Evening, ${this.user}`);

        console.log(this);
    } 
}

user.welcome_msg;

console.log('');

function chai() {
    let username = "Kartik";

    console.log(this.username);
}

chai();


console.log('');

// using arrow function's

let sayHello = () => {

    let username = "Jyoti Jangid";
    console.log(this);
}

sayHello();

console.log('');

// Activity 3

// __Task 5__

let SumTwoNum = (num1,num2) => {
    return num1 + num2;
}

console.log(SumTwoNum(4,4));


// __Task 6__
let cointain_ = (sentence) =>{
    if (sentence.includes('_')){
        console.log(`${sentence} cointains "_"`);
    }

    else{
        console.log(`No, ${sentence} do not cointain "_" Word`);
    }
}


cointain_("Ishaan-Jangid12");


// Activity 4

console.log("");

// __Task 7__

let product = (num1 , num2 = 5) => ( num1 * num2);

console.log(product(5));

// __Task 8__

console.log("");

let great_msg = (name  ,age = 68) => (`Good morning ${name}.\nYou will be ${age + 1} years next year`)

console.log(great_msg("Ishaan"));



// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Learning Higher Order Function's

console.log('');

// (for of) loop


const arr = "Ishaan";

for (const i of arr) {
    console.log(i);
}

// Creating a MAP
console.log('');

const new_map = new Map();

// console.log(new_map);

new_map.set("IN","India");
new_map.set("USA","United States of America");
new_map.set("Fr","France");


for (const [key,value] of new_map) {
    console.log(`${key}:- ${value}`);
}

// for object

console.log('');

let user_name = {
    IN: "India",
    USA: "United Staes of America",
    Fr: "France"
}


for (const key in user_name) {
    console.log(`${key}:- ${user_name[key]}`);
}


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// for each loop

console.log('');

let coding = ["python","cpp","c","JavaScript","ruby"]

coding.forEach(
    (items) => {
        console.log(items);
    }
)


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Activity 5

// __Task 9__
console.log('');

function repeat(fun,num) {
    for (let i = 0; i < num; i++) {
        fun()
        
    }
}

function printHello() {
    console.log(`Hello,World!`);
}


repeat(printHello,5);

console.log('');
// __Task 10__

function two_fun_taking_function(fun1,fun2,value) {
    fun1(value);
    fun2(value);
}

function square(num) {
    console.log(`Square of number${num**2}`);
}

function cube(num) {
    console.log(`Cube of number${num**3}`);
}


two_fun_taking_function(square,cube,5);