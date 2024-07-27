// Day 15

// Activity 1

// __Task 1__

function Outer() {
    let name = "Ishaan";

    function inner() {
        console.log(`My name is ${name}`);
    }

    inner();
}

Outer();    


// __Task 2__

function Maintain_score(num) {
    let score = num;

    function mainTain_counter() {
        score++;
        console.log(score);
    }

    return mainTain_counter;
}

const MyFunc = Maintain_score(69);

MyFunc();

// Activity 2

// __Task 3__

function generateUniqueID(name,age,ID) {
    let uniqueID = `${name}${age}${ID}`;

    function increment() {
        ID++;

        uniqueID = `${name}${age}${ID}`;
        console.log(uniqueID);
    }

    // function show() {
    //     // console.log(uniqueID);
    // }

    return increment;
}

let ID = generateUniqueID("Ishaan",18,123);

ID();

// __Task 4__

function greeting(name) {
    let username = name;

    function goodMorning() {
        console.log(`Good Morning ${username}`);
    }

    return goodMorning;
}


let moring = greeting("Ishaan");
moring();




// for (let i = 0; i < 5; i++) {
//     setTimeout(() =>{
//         console.log(i);
//     },1000)
    
// }


// Activity 3

// __Task 5__

for (let i = 0; i < 5; i++) { 
    
    function makeFun() {
        function correctIndex() {
            console.log(i);
        }

        return correctIndex;
    }    

    let myFuc = makeFun();

    myFuc();
}


// Activity 4
// __Task 6__


function PetShopModule(animal) {
    let publicAPI = {animalname, };

    return publicAPI;

    function animalname(name) {
        console.log(`${name} is a ${animal}`);
    }
}


let animal = PetShopModule("Dog");
animal.animalname("Kim");




// Activity 5
 
// __Task 7__

function sum(num1,num2) {
    let result = num1 +  num2;

    function memorizeResult() {
        console.log(result);
    }

    return memorizeResult;
}
