// Day 6

// Activity 1

// __Task 1__
let arr = [1,2,3,4,5];
console.log(arr);

// __Task 2__

console.log(`First Element: ${arr[0]}`);
console.log(`Last Element: ${arr[arr.length -1]}`);

// Activity 2

// __Task 3__

arr.push("Ishaan");
console.log(arr);

// __Task 4__
arr.pop();
console.log(arr);

// __Task 5__

arr.shift();
console.log(arr);

// __Task 6__
arr.unshift("Kartik Jangid");
console.log(arr);

// Activity 3

// __Task 7__
let new_arr = [1,2,3,4,5,6,7,8,9,10];

const new_map =  new_arr.map( (x) => (x * 2) );

console.log(new_map);

const new_filter = new_arr.filter((x) => ( x % 2 == 0));

console.log(new_filter);

const initial_value = 0;

const sumWithInitial = new_arr.reduce(
    (accumlator,currentValue) => accumlator + currentValue,
    initial_value,
);

console.log(sumWithInitial);

// Activity 4

// __Task 10__
for (let i = 0; i < new_arr.length; i++) {
    const element = new_arr[i];
    console.log(element);
}

console.log('');

// __Task 11__
new_arr.forEach(
    (item) => {
        console.log(item);
    }
);


// Activity 5

// __Task 12__

let arr_new = [
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12]
]

console.log(arr_new);

// __Task 13__

console.log(arr_new[0][2]);