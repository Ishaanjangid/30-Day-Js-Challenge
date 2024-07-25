import whoIsDad,{add,user,printName,sayHello,obj1} from "./module1.js"

import _ from "lodash";
import axios from "axios";
// Activity 1

// __Task 1__
console.log(add(10,10));

// __Task 2__
console.log(user);

// Activity 2

// __Task 3__
printName("Ishaan_Kartik");

sayHello();

// __Task 4__

whoIsDad();

// Activity 3

// __Task 5__
console.log(obj1.PI);
console.log(obj1.e);
console.log(obj1.mul(10,10));
console.log(obj1.div(10,10));


// Activity 4

// __Task 6__
console.log("");
console.log("");
console.log("");

// console.log(_);


let arr = [1,2,3,4,5,6,7,8,9,0];

console.log(_.first(arr));

// __Task 7__
axios.get('https://jsonplaceholder.typicode.com/todos/1').then((response) => {
    console.log(response.data);
}).catch((error) => {
    console.error(error);
});