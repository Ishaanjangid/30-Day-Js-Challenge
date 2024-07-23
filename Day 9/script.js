// Day 9

// Activity 1

// __Task 1__

// let main_heading = document.getElementById("main_heading");

// main_heading.innerText = "Kartik Jangid";

// // __Task 2__

// let p_class = document.getElementsByClassName("p_text");
// // console.log();

// p_class[0].style.backgroundColor = "pink";



// Activity 2

// Task 3
let new_div = document.createElement("div");

new_div.innerText = "Your GrandFather is Ishaan Jangid!";

document.body.appendChild(new_div);

// Task 4
// let new_li = document.createElement("li");
// new_li.innerText = "Kartik is your Chacha";

// let ul = document.querySelector("ul");
// ul.appendChild(new_li);


// Activity 3

// Task 5
let p = document.querySelector(".p_text");

p.remove();


// Task 6
let list = document.querySelector(".parent");
console.log(list.removeChild(list.lastElementChild));


// Activity 4
// __Task 7__

let img = document.querySelector("#image");

img.setAttribute("src","https://preview.redd.it/i-got-bored-so-i-decided-to-draw-a-random-image-on-the-v0-4ig97vv85vjb1.png?width=640&crop=smart&auto=webp&s=22ed6cc79cba3013b84967f32726d087e539b699");

// __Task 8__
let new_class = document.createElement("div");

new_class.innerText = "This is a random Text ;)";

new_class.setAttribute("class","new_class");

console.log(new_class);

document.body.appendChild(new_class);


// removing attribute
new_class.removeAttribute("class")


// Activity 5

// __Task 9__

let button = document.querySelector("button");

let p_change = document.querySelector("#change-text");

console.log(p_change);


button.addEventListener('click',() => {
    p_change.innerText ="SORRY! HE IS YOUR GRAND FATHER ;)!";
});



let div_border = document.querySelector("#border");
console.log(div_border);


div_border.addEventListener('mouseover',() => {
    div_border.style.borderColor = "red"; 
});

