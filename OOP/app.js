/*
constructor function
*/

function User(id, usN, sal) {
  this.id = id;
  this.usN = usN;
  this.sal = sal + 1000;
  this.met = () => {
    console.log("hello");
  };
}

let userOne = new User(23, "Salah", 20000);
let userTow = new User(24, "Soussou", 22000);
let usertree = new User(25, "Iddine", 26000);

console.log(userOne.id);
console.log(userOne.sal);

//#############################################################

/*
constructor function
- New Syntax
*/

class NewUser {
  static count = 0;
  constructor(id, usN, sal) {
    this.id = id;
    this.usN = usN;
    this.sal = sal;
    this.met = () => {
      console.log("hello");
    };
    NewUser.count++;
  }

  mesag() {
    console.log(hello);
  }
  static countObjs() {
    return `${this.count} objects Created`;
  }
}

console.log(NewUser.countObjs());

let useOne = new NewUser(23, "Salah", 20000);
let useTow = new NewUser(24, "Soussou", 22000);
let usetree = new NewUser(25, "Iddine", 26000);

console.log(NewUser.countObjs());

// =========================================
/*
Class

--Inheritance
*/
