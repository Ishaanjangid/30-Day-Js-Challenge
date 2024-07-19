// Day 7

// Revising Object's

// Object Literal

const mySym = Symbol("Key 1");

const stu_data = {
    name: "Ishaan Jangid",
    roll_no: "23ESBCA025",
    branch: "AI",
    Year: "2nd",
    Semester: "3rd Sem",

    [mySym]: "myKey1"
};


// console.log(stu_data);

// console.log(typeof stu_data[mySym]);

// console.log(stu_data);


stu_data.greeting = function () {
    console.log("Good Evening Student");
}

// console.log(stu_data.greeting());

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Declaring Object using SingleTon format (constructor)

const tinderUser = new Object();

// console.log(tinderUser);

// Merging Two Values
let Obj1 = {1: "a", 2: "b"};
let Obj2 = {3: "c", 4: "d"};


// const obj3 = Object.assign({},Obj1,Obj2);

const obj3  = {...Obj1,...Obj2};

// console.log(obj3);

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Activity 1

// __Task 1__

const book = {
    title: "Atomic Habit",
    author: "James Clear",
    year: 20191
}


// console.log(book);


// __Task 2__
// console.log(book.title);
// console.log(book.author);

// Activity 2

// __Task  3__
book.info = function () {
    console.log(`Title: ${this.title}\nAuthor: ${this.author}`);
}

// book.info();


// __Task 4__
book.updateYear = function (year) {
    this.year = year;
}

// console.log(book);

book.updateYear(2024);

// console.log(book);


// Activity 3

// __Task 5__

const liberary = {
    name: ["Atomic Habit","48 Rules of Power", "How to win Friends and influence people","Rich Dad Poor Dad","Deep Work"],
    book: [
        {
            relese: 2019,
            author: "James Clear"
        },
        {
            relese: 2022,
            author: "Nil Nitien Mukesh"
        },
        {
            relese: 2020,
            author: "Gopal Verma"
        },
        {
            relese: 1991,
            author: "Giga Chad"
        },
        {
            relese: 2025,
            author: "Jyoti Jangid"
        },
    ]
};

// console.log(liberary);

// console.log(liberary.name[0])
// console.log(liberary.name[1])
// console.log(liberary.name[2])
// console.log(liberary.name[3])
// console.log(liberary.name[4])


// Activity 4
// console.log(
//     book
// );

// // Activit6y 5
// for (const key in book) {
//     console.log(`${book[key]}`);
// }

console.log(Object.keys(book)); 
console.log(Object.values(book)); 
