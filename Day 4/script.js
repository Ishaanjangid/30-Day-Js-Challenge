// Day: 4


// Activity_1

// __Task 1__

for (let i = 0; i < 11; i++) {
    // const element = 11[i];

    console.log(`Number's: ${i}`);
    
}


// __Task 2__
console.log("Table Of 5");
let num = 5;

for (let i = 1; i  < 11; i++) {

    console.log(`5 X ${i} = ${5 * i}`);

}


// Activity_2

// __Task 3__


console.log("Sum of Number's from [1-10]");
let sum = 0;

let num1 = 1;

while (num1  < 11) {
    sum += num1;

    num1++;
}

console.log(sum);

console.log("Program To print number from [10-1]");


// __Task 4__
let num2 = 10;
while (num2 > 0) {
    console.log(`Number: ${num2}`);

    num2--;
}

// Activity 5

// __Task 5__


console.log(`Printing Number from [1-5]`);
let num3 = 1;

do {
    console.log(`Number: ${num3}`);

    num3++;
} while (num3 < 6);

console.log('');



console.log(`Printing Number from [5-1]`);
let num4 = 5;

do {
    console.log(`Number: ${num4}`);

    num4--;
} while (num4 > 0);

// __Task 6__

console.log('');
console.log('Finding Factorial');

let factorial_num = 5;

let factorial_mul = 1;

do {
    factorial_mul *= factorial_num;

    factorial_num--;
} while (factorial_num > 0);

// console.log(`Factorial Num: ${factorial_num}`);
console.log(`Result: ${factorial_mul}`);


// Activity 4

// __Task 7__
console.log('');
console.log("Printing Star Pattern");

for (let row = 0; row < 6 ; row++) {
    for (let col = 0; col < row; col++) {
        process.stdout.write("*");
    }   

    console.log("");
}

// Activity 5

// Task 8

for (let i = 0; i < 11; i++) {

    if (i == 5) {
        continue;
    }
    
    console.log(`Number: ${i}`);
}


for (let i = 0; i < 11; i++) {

    if (i == 7) {
        break;
    }
    
    console.log(`Number: ${i}`);
}

