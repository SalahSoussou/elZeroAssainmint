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

// ========================================= Inheritance
/*
Class
--Inheritance
*/

class Car {
  constructor(id, model) {
    this.id = id;
    this.model = model;
  }
  beeb() {
    return "Beep";
  }
}

class HaibredCar extends Car {
  constructor(id, model, color) {
    super(id, model);
    this.color = color;
  }
}

let haibredOne = new HaibredCar(123, 1999, "black");

console.log(haibredOne.beeb());

// ========================================= Encapsulation
/*
Class
--Encapsulation
*/

class Game {
  #k;
  constructor(name, type, key) {
    this.n = name;
    this.t = type;
    this.#k = key;
  }
  getKey() {
    return ~~(this.#k / 5);
  }
}

let pubg = new Game("PUBG", "RPG", 12345678);

console.log(pubg.getKey());
console.log(pubg.getKey() * 2);

class MeniGame extends Game {
  constructor(name, type, key, size) {
    super(name, type, key);
    this.size = size;
  }
}

let pubgMin = new Game("PUBG", "RPG", 12345, 600);
console.log(pubgMin.getKey());

// ========================================= Prototype
/*
Class
--Prototype
*/
console.log(Game.prototype);

// Object Meta Data And Descriptior ===========

/*
- writable
- enumerable
- configurable 
*/

const myObj = {
  a: 1,
  b: 2,
};

Object.defineProperty(myObj, "c", {
  writable: true,
  // enumerable: true,
  // configurable: true,
  value: 3,
});

myObj.c = 100;

console.log(myObj);

Object.defineProperties(myObj, {
  d: {
    configurable: true,
    value: 4,
  },
  e: {
    configurable: true,
    value: 5,
  },
  f: {
    configurable: true,
    value: 6,
  },
});

console.log(myObj);
