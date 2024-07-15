// Day - 3

// Activity: 1 

// __Task 1__

let num = 0;

if (num > 1) {
    console.log(`${num} is positive`);
} else if (num ==0){
    console.log(`${num} is zero`);
} else {
    console.log(`${num} is negative`);
}

// __Task 2__

let age = 234;

if (age >= 18) {
    console.log("You are eligible to vote");
} else {
    console.log("You are not eligible to Vote");
}

// Activity: 2

let a,b,c;

a = 2;
b = 1;
c = 3;

let max_num;

if(a > b){  //if a is greater then b

    // if yes 

    if (a >c){ //if a is greater then c

        // if yes, then a is greatest than all number's
        max_num = a; 

        console.log(`a : ${a} is greatet `);
    }

    else if (c > b){  //if not, check if c is greater then b
        // if yes, then c is the greatest number(because if c, is not less the a , so it is greater than a)

        max_num = c; 

        console.log(`c : ${c} is greatet `);
    }
}

else{   //if not, b is greater than a

    if(b > c){ //if yes, b is greatest
        max_num = b;

        console.log(`b : ${b} is greatet `);

    }

    else{
        max_num = c;

        console.log(`c : ${c} is greatet `);

    }
}



// Activity:3

// __Task 4__
let day = 4;

switch (day) {
    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    case 3:
        console.log("Wednesday");
        break;

    case 4:
        console.log("Thursday");
        break;

    case 5:
        console.log("Friday");
        break;

    case 6:
        console.log("Saturday");
        break;

    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Enter Valid Number");
        break;
}


// __Task 5__

let grade =54;

switch (true) {
    case (grade >= 81 && grade <= 100):
        console.log("A");
        break;

    case (grade >= 61 && grade <= 80):
        console.log("B");
        break;

    case (grade >= 41 && grade <= 60):
        console.log("C");
        break;


    case (grade >= 33 && grade <= 40):
        console.log("D");
        break;

        
    case (grade >= 0 && grade <= 32):
        console.log("F");
        break;
    default:
        break;
}


// Activity:4

// __Task 6__

let num1 = 2;

(num1 % 2 == 0) ? console.log(`${num1} is Even`) : console.log(`${num1} is Odd`);

// Activity:5

// __Task 7__

let year = 2023;

if (year % 4 ==  0) {
    console.log(`${year} is a leap Year`);
} else {
    console.log(`${year} is not a leap Year`);
}