/*
-
*/

function* genNumbers() {
  yield 1;
  alert("yield number 1");
  yield 2;
  alert("yield number 2");
  yield 3;
  yield 4;
  yield 5;
}

let genereated = genNumbers();

console.log(typeof genereated);
console.log(genereated);

console.log(genereated.next());
console.log(genereated.next());
console.log(genereated.next());
