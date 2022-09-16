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

//============= object destructuring

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
