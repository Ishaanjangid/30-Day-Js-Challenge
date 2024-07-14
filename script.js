// Day-1 :


// ___Activity 1___
var num1 = 69;
console.log(num1);

let name = "Kartik";
console.log(name);

// ___Activity 2___
const state = true;
console.log(state);

// ___Activity 3___
let age = 7;
let Full_name = "Ishaan Jangid";
let isLoggedIn = false;
let class_X = {
    floor:5,

    No_of_stu: 69,

    class_teacher : "Jyoti jangid"
}
let language = ["python","JavaScript","MongoDB","HTML","C","C++"];
console.table([typeof age,typeof Full_name,typeof isLoggedIn, typeof class_X,typeof language]);


// ___Activity 4___
let value = "Papa Ji";
console.log(value);

value = "Mummy Ji";
console.log(value);


// ___Activity 5___
// Error
// const rock_value = "The Rock";
// console.log(rock_value);

// rock_value = "Paper";
// console.log(rock_value);


// ___Variable_type_console_log___
// creating different variable

let score = 100;
let class_ID  = "69X69X69";
let isPresent = false;
let attendence;
let marks = null;

console.table([score,class_ID,isPresent,attendence,marks]);


// ___ReassignmentDemo___

// _for let_
let x = 4;
console.log(x);
x = 5;
console.log(x);

// _for const_
const emp_name = "Ishaan_Jangid";
console.log(emp_name);

emp_name = "Kartik Jangid";
console.log(emp_name);


// ___This Code show the behaviour of 'let','var' 
// function test_scope() {
//     var varMessage = "This is a Var Message";

//     if (true) {
//         let letMessage = "This is a let message";
//     }

//     console.log(varMessage);
//     console.log(letMessage);
// }


// test_scope();