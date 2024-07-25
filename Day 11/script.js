// Day 11

// Activity 1

// __Task 1__

// const promiseOne = new Promise((resolve,reject) => {
//     setTimeout(() => {

//         let error = true;

//         if (!error) {
//             console.log("Hello,World");
//             resolve();
//         } else {
//             reject("Error! Something went Wrong");
//         }

        
//     },2000);
// });


// __Task 2__
// promiseOne.then().catch((error) =>{
//     console.log(error);
// })



// Activity 2

// __Task 3__

// const promiseTwo = new Promise((resolve,reject) => {
//     setTimeout(() => {
//         let error = false;

//         if (!error) {
//             resolve({username: "Ishaan" , dept: "AI", year: 2, sem: "3rd"});
//         } else {
//             reject("Error: Server Went Down!");
//         }

//     },1000);
// });


// promiseTwo.then((user) => {
//     console.log("User Data:" ,user);

//     return user.username;
// }).then((username) => {
//     console.log(`UserName: ${username}`);
// }).catch((error) => {
//     console.log(error);
// }).finally(() => {
//     console.log("Promise Resolved and consumed!");
// })


// Activity 3
// __Task 4__


console.log("");
console.log("");
console.log("");


let promiserThree = new Promise((resolve,reject) => {
    setTimeout(() => {
        let error = false;

        if (!error) {
            resolve({Year: "2", Branch: "AI",sem : "3rd"});

        } else {
            reject("Error! Domething Went Wrong");
        }
    },3000);
});

async function consumePromiseThree(){
    try {
        const result = await promiserThree;

        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

// Activity 4

async function getAllUsers(){
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");

        const data = await response.json();

        console.log(data);
    } catch (error) {
        console.log(`E: ${error}`);
        
    }
}

fetch("https://jsonplaceholder.typicode.com/users").then((response) =>{
    return response
}).then((data) => {
    console.log(data);
}).catch((error) => {
    console.log(error); 
})

// Activity 5

// __Task 8__ 

// const promise1 = Promise.resolve(3);
// const promise2 = 42;
// const promise3 = new Promise((resolve,reject) => {
//     setTimeout(resolve,100,'foo');
// });


// Promise.all([promise1,promise2,promise3]).then((value) => {
//     console.log(value);
// })

// __Task 9__

const promise1 = new Promise((resolve,reject) => {
    setTimeout(resolve,500,'one');
});

const promise2 = new Promise((resolve,reject) => {
    setTimeout(resolve,100,'two');
});

Promise.race([promise1,promise2]).then((value) => {
    console.log(value);
});