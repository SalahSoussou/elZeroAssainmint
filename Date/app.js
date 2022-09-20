/*
Date & Time

  - Date Constructor
  -Date.now()
*/

let dateNow = new Date();

console.log(dateNow);
console.log(Date.now()); //ms
console.log(Date.now() / 1000); //sec
console.log(Date.now() / 1000 / 60); //min
console.log(Date.now() / 1000 / 60 / 60); //hr
console.log(Date.now() / 1000 / 60 / 60 / 24); //day
console.log(Date.now() / 1000 / 60 / 60 / 24 / 365); //year

console.log("#".repeat(40));

/*
Date & Time

  - getTime() => ms
  - getDate() => day of the month
  - getFullYear()
  - getMonth()
  - getDay() => day of the week

  - getHoues() 
  - getMinutes() 
  - getSeconds()

*/
let birthday = new Date("May 31, 99");

console.log((dateNow - birthday) / 1000 / 60 / 60 / 24 / 365);

console.log(dateNow.getTime());
console.log(dateNow.getDate());
console.log(dateNow.getFullYear());
// console.log(dateNow.getUTCFullYear());
console.log(dateNow.getMonth()); // 0 indexed  you need to add 1 to get real month
console.log(dateNow.getDay()); // 0 indexed  you need to add 1 to get real day

console.log(
  `${dateNow.getHours()}:${dateNow.getMinutes()}:${dateNow.getSeconds()}`
);

console.log("#".repeat(40));

// Set Date & Time  ===============================

/*

*/
