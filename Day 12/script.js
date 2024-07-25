// Day 12

// Activity 1

// __Task 1__

function greeting(name) {

    try {

        console.log(Ishaanscnskjc);
    } catch (error) {
        console.log("Error! Something went wrong!");
    }

}

console.log("Ishaan Jangid");

greeting("Kartik");


// __Task 2__

function throwError(num1,num2) {
    try {
        if (num2 === 0) {
            throw new Error("Divide by zero is not allowed!");
        }

        return num1/num2
    } catch (error) {
        console.error(error.message);
    }
}

console.log(throwError(10,0));


// Activity 2

// __Task 3__

try {
    ishaan();
} catch (error) {
    console.error(error);
}finally{
    console.log("Finally Exicuted!!!");
};


// Activity 3

// __Task 4__

function ableToDrive(age) {
    // this function check's if the age is greater than 18

    try {
        if (age < 18) {
            throw new Error("Inable to Drive");
        }

        return "Able to  Drive"
    } catch (error) {
        console.error(error.message);
    }
}

console.log('');

console.log(ableToDrive(17));
console.log(ableToDrive(19));


console.log("");
console.log("");
console.log("");

// __Task 5__

function sayHello(name) {
    try {
        if (!name) {
            throw new Error("Please enter you NAME!");
        }

        console.log(`Hello, ${name}`);
    } catch (error) {
        console.error(error.message);
    }
}


sayHello("");


// Activity 5

// __Task 8__

fetch("https://jsonplaceholder.typicode.com/users").then((response) => {
    return response
}).then((data) =>{
    console.log(data);
}).catch((error) => {
    console.log("ERROR:Sometimg went wrong!");
})

// __Task 9__
async function getAllUsers(){
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/users");

        let data = await response.json();

        console.log(data);
    } catch (error) {
        console.log("Error");   
    }
}