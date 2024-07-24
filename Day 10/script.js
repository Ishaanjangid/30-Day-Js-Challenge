// Day 9

// Activity 1

// __Task 1__

let btn = document.querySelector("button");
let p = document.querySelector("#change_text");


btn.addEventListener("click",() => {
    // console.log("Hello,World!");

    p.innerText =  "Hello,World!";
},false);


// __Task 2__
let image = document.querySelector("img");

console.log(image);


image.addEventListener('dblclick',() => {
    image.style.display = "none";
}, false);

// Activity 2

// __Task 3__

let h1 = document.querySelector("#chg_bg_color");

h1.addEventListener("mouseover",() => {
    h1.style.backgroundColor = "red";
});

// __Task 4__

h1.addEventListener("mouseout",() => {
    // console.log("Mouse is leaving");
    h1.style.backgroundColor = "pink";
});

// Activity 3

// __Task 5__

let input =  document.querySelector("#key_down_event");

input.addEventListener("keydown"  , (e) => {
    console.log(`Key: ${e.key}`);
});

// __Task 6__

input.addEventListener("keyup",() =>{
    console.log(p.innerText);
});

// Activity 4

// __Task 7__
let submit = document.querySelector("#submit");
let user_name = document.querySelector("#user_name");
let user_age = document.querySelector("#user_age");
let user_mail = document.querySelector("#user_mail");

submit.addEventListener("click",(e) => {
    e.preventDefault();
    console.log("Hello,World!");

    console.log(`Name: ${user_name.value}`);
    console.log(`Age: ${user_age.value}`);
    console.log(`E-mail: ${user_mail.value}`);
});



// __Task 8__

let  ice_cream = document.querySelector("#ice_cream");
let result  = document.querySelector("#result");


ice_cream.addEventListener("change", (e) => {
    result.textContent = `You like ${e.target.value}`;
});

// Activity 5

// __Task 9__ 

let ul = document.querySelector("ul");

ul.addEventListener("click",(e) => {
    if (e.target.tagName === "LI") {
        console.log(e.target);
    }
});

// __Task 10__

let new_li = document.createElement('li');

new_li.innerText = "Apple ;)";

ul.appendChild(new_li);
