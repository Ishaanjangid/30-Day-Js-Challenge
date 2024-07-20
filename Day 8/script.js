// Day 8

// Activity 1

// __Task 1__

// let name = "Ishaan";
let age = 69;

// console.log(`Name: ${name}, age: ${age}`);

// __Task 2__
let mult_line_string = `This 
is a multi-line
string, 
using string literal`;

// console.log(mult_line_string);

// Activity 2

// __Task 3__

// Destucturing arr 
let arr = ["Ishaan","Kartik","Jyoti ma'am","Satish Ji"];

let [senior,junior,mom,Dad] = arr;

// console.log(senior);
// console.log(junior);
// console.log(mom);
// console.log(Dad);

// __Task 4__ 
// Destucturing object
let user = {
    name: "Ishaan",
    department : "AI",
    section: "B",

    Address : {
        city: "Jaiput",
        state : "Rajesthan"
    }
};

// console.log(user);

let {
    name,
    department,
    Address,
    Address:{state,city}
} = user;

// console.log(name);
// console.log(department);
// console.log(Address);
// console.log(city);
// console.log(state);

// Activity 3

// __Task 6__

let new_arr = [1,2,3,4,5];

// console.log([...new_arr,"Ishaan","Kartik"]);


// __Task 6__

function nth_sum(...number) {
    return number.reduce((total,number) => total + number,0)
}

// console.log(nth_sum(1,2,3,4,5));


// Activity 4

// __Task 7__

function product(num1 , num2 = 1) {
    return num1 * num2;
}


console.log(product(10,20));
console.log(product(20));


// Activity 5

// __Task 8__
let _obj_name = "Kartik Jangid";
let _obj_age = 14;

let Good_morning = function () {
    console.log("Good Morning!");
}

let _user_define = {_obj_name,_obj_age,Good_morning};

console.log(_user_define.Good_morning());



// __Task 9__

let obj_name = "Kartik Jangid";
let obj_age = 14;

let user_define = {obj_name,obj_age};

// console.log(user_define);