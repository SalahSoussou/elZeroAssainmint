/*

*/
let myVars = [22, 33, 44];

let [A, B, C] = myVars;

console.log(A);
console.log(B);
console.log(C);

//=====//

let towDArray = ["salah", "ola", "hiii", [1, 3, ["TRE", "test"]]];

let [, , , [x, , [, y]]] = towDArray;

console.log(x);
console.log(y);

// swap variable

let book = "Video";
let video = "Book";

// let stor = book;
// book = video;
// video = stor;

[book, video] = [video, book];

console.log(book);
console.log(video);

//  ============= object destructuring

let myObj = {
  nAme: "salah",
  age: 23,
  skills: {
    html: 80,
    Css: 56,
  },
};
let {
  nAme: N,
  age,
  skills: { html },
} = myObj;

console.log(N);
console.log(age);
console.log(html);

function objDetals({ nAme, age, skills: { Css: c } } = obj) {
  console.log("name: " + nAme);
  console.log("age: " + age);
  console.log("skill: " + c);
}

objDetals(myObj);
console.log("#".repeat(30));
//==================== mixed object

const user = {
  theName: "Soussou",
  theAge: 23,
  skil: ["HTML", "Css", "JS"],
  local: {
    moroco: "benM",
    reu: "r9_n°4",
  },
};

const {
  theName,
  theAge,
  skil: [h, c, j],
  local: { reu },
} = user;

console.log(theName);
console.log(theAge);
console.log(c);
console.log(reu);

///  set Data type ===============
/*
- new Set()
--size

--add
--delete
--clear
--has
*/
console.log("#".repeat(30));

let myData = [1, 1, 1, 2];

let unekData = new Set(myData);
console.log(unekData);

unekData.add(5).add(4).add(5).add(6).add("A");
console.log(unekData);

unekData.delete(4);
console.log(unekData);
// console.log(unekData.keys());
console.log(unekData.has(5));

// Map data type =======================

/*
= new Map()
--set
--get
--delete
--clear
--has

-size

*/
console.log("#".repeat(30));

// let myObject = {};
let myMap = new Map([
  ["key", "value"],
  ["hi", "hello"],
]);

myMap.set(10, "number");
myMap.set("Name", "string");

console.log(myMap);
console.log(myMap.get(10));
