/*
-
*/

function* genNumbers() {
  yield "hello";
  console.log("yield number 1");
  yield 2;
  console.log("yield number 2");
  yield 3;
  yield 4;
  yield 5;
}

let genereated = genNumbers();
// console.log(genNumbers);
console.log(typeof genereated);
console.log(genereated);

console.log(genereated.next());
console.log(genereated.next());
console.log(genereated.next());

//++++++++++++++++++++++++++++++++++

function* numbers() {
  yield 1;
  yield 2;
}
function* litters() {
  yield "A";
  yield "B";
}

function* genAll() {
  yield* numbers();
  yield* litters();
  yield* [7, 8, 9];
}

let all = genAll();
console.log("#".repeat(44));

console.log(all.next());
console.log(all.next());
console.log(all.next());
console.log(all.next());
console.log(all.next());
console.log(all.next());
console.log(all.next());
console.log("#".repeat(44));
