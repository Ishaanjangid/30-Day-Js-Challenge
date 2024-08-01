// Day 16

// Activity 1

// __Task 1__

function factorial(num) {
    if (num == 0 || num == 1) {
        return 1;
    } else {
        return num * factorial(num - 1);
    }
}

// console.log(factorial(6));

// __Task 2__

function fiboonachi(num) {
    
    let a = 0;
    let b = 1;

    let c,i;

    if (num === 0) {
        return a;
    } else {
        for (i = 2;  i<= num; i++) {

            c = a + b;

            a = b ;
            b = c;
            
        }

        return b;
    }

}

// console.log(fiboonachi(9));

// Activity 2

// __Task 3__

let arr = [1,2,3,4,5];

let sum = 0;

function sumArr(arr) {

    if (arr.length === 0 ) {
        return sum
    }

    sum += arr[arr.length - 1]

    
    arr.pop();

    return sumArr(arr);

}

// console.log(sumArr(arr));

// __Task 4__

// we need to create a function that find the maximum number in an element 

// let arr_1 = [2,4,6,8,10];
let arr_1 = [12,32,43,534,543,5,45,4];

// let assending_Arr = [];
function findMAX(arr) {
    if (arr.length === 1) {
        return arr[0];
    }

    const maxOfrest = findMAX(arr.slice(0,-1));

    return Math.max(arr[arr.length - 1],maxOfrest);
}

// console.log(findMAX(arr_1));

// Activity 3

// __Task 5__


let name_ = "Ishaan";

// console.log(name_.substring(1));
// console.log( name_.charAt(0));  

// console.log(name_.substring(1) + name_.charAt(0));


// recurssive function to reverse a string


function reverseString(string) {

    // let reverse= "";


    if (string === "") {
        return "";
    }

    // if (string === reverse) {
    //     console.log(`${string} is a palindrome`);
    // }

    else{
        let reverse =  reverseString(string.substring(1)) + string.charAt(0);

        if (string === reverse) {
            return `${reverse} is a palindrome`
        }

        else{
            return reverse
        }

        // return reverse
    }
}

// console.log(name_);
// console.log(reverseString("Ishaan"));


// __Task 6__

// function checkPalindrome(string) {
//     if (string.length === 0) {
//         console.log(`String at length 0: ${string[0]}`);
//     }

//     else{
//         console.log(checkPalindrome(string.substring(1)))
//     }

// }

// console.log("Ishaan".length);


// function myFun(string) {
//     if (string.length === 0) {
//         // console.log(`String at length 1: ${string[0]}`);

//         return "";
//     }

//     else{
//         return myFun(string.substring(1)) + string.charAt(0);
//     }
// }

// console.log(myFun("Ishaan"));


// function myFun(name_,s,e) {
//     // length of the string
//     // let length = name_.length;

//     if (name_.length === 1) {
//         console.log(name_[0]);
//     }

//     else{

//     }


// }



function checkPalindrome(str,s,e) {     //s=> starting index, e=> ending index
    
    // if there is only one index
    if (s === e) {
        return true;
    }

    // if first and last character do not match 

    if ((str.charAt(s))  != (str.charAt(e))) {
        return false;
    }


    // check if there are more character in the string

    if (s < e + 1) {
        return checkPalindrome(str,s + 1, e-1);
    }

    return true;
}


function isPalindrome(str) {
    let length = str.length;

    if (length === 0) {
        return true;
    }

    return checkPalindrome(str,0,length - 1);
}

if (isPalindrome("Ishaan")) {
    console.log("This is palindrome");
} else {
    console.log("This is not palindrome");
}


// Activity 5

// __Task 7__

function binarySearch(arr,low,high,x) {

    if (high >= low) {
        let mid = low + Math.floor((high - low)/ 2);

        // If the element is present at the middle 
        // itself

        if (arr[mid] == x) {
            return mid;
        }

        // if element is smaller than mid, then
        // it can also be present in the left subarray

        if (arr[mid] > x) {
            return binarySearch(arr,low,mid -1, x);
        }

        // else the element can be present
        // in right subarray

        return binarySearch(arr,mid + 1, high,x);
    }

    // we reach here when element is 
    // not present in array
}


let arr_2 = [2,3,4,10,40];

let x = 10;

let n = arr_2.length;

let result = binarySearch(arr,0,n-1,x);

if (result == -1) {
    console.log("Element is not present");
}

else{
    console.log("element is present at index "+ result);
}


