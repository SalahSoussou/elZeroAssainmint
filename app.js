// DOM   ====================
// Check Attributes

console.log(document.getElementsByTagName("p")[0].attributes);
let myP = document.getElementsByTagName("p")[0];

if (myP.hasAttribute("data-src")) {
  console.log("Found");
  if (myP.getAttribute("data-src") === "") {
    myP.removeAttribute("data-src");
  } else {
    myP.setAttribute("data.src", "value from js");
  }
} else {
  console.log("Not Found");
}

if (document.getElementsByTagName("div")[0].hasAttributes()) {
  console.log("div has Atre...");
} else {
  console.log("div has no Atre...");
}

if (document.getElementsByTagName("div")[1].hasAttributes()) {
  console.log("div has Atre...");
} else {
  console.log("div has no Atre...");
}
/*
DOM ==============================
-createElement
-createComment
-createTextNode
-createAttribute
_appendChild
*/

let myElement = document.createElement("div");
let myAttri = document.createAttribute("data-custom");
let myText = document.createTextNode("data custom box one from js file");
let myComment = document.createComment("comment feom js file");

myElement.className = "box";
// myElement.setAttributeNode(myAttri);
myElement.setAttribute("data-test", "testing");

myElement.appendChild(myText);
myElement.appendChild(myComment);

document.body.appendChild(myElement);

// console.log(myElement);

// =========================================

for (let i = 0; i < 10; i++) {
  let pruductDiv = document.createElement("div");
  pruductDiv.innerHTML = `<h1>pruduct number ${i + 1}</h1>`;
  document.body.appendChild(pruductDiv);
}

//+++++++++++++++++++++++++++++++++++++++++++++++++

let container = document.querySelector(".container");

console.log(container);
console.log(container.children);
console.log(container.childNodes);

// More : firstChild , lastChild , firstElementChile , lastElementChile

// form
document.forms[0].onsubmit = function (e) {
  let userV = false;
  let emailV = false;

  if (user.value !== "" && user.value.length <= 10 && email.value !== "") {
    userV = true;
    emailV = true;
  }

  if (!userV || !emailV) {
    e.preventDefault();
  }
};

document.links[0].onmouseenter = function (e) {
  console.log(e);
  e.preventDefault();
};
/*
[Class list]
- e.classList => 
        .length
        .contains
        .item(index)
        .add
        .remove
        .toggle
*/

/*
DOM [Css]
  - e.style
  - e.style.cssText = ""
  - e.style.removProprety("prp name")
  - e.style.setProprety("prp name", " value", priority?)
*/

/*
  -e.before
  -e.after
  -e.append
  -e.prepend
  -e.remove
*/

/*
DOM [Traversing]
-e.nextSibling
-e.previousSibling
-e.nextElementSibling
-e.previousElementSibling
-e.parentElement
*/

/*
DOM [Cloning]
 -e.cloneNode()
*/
let hi = document.getElementById("hello");
let num = 1;
hi.onclick = function () {
  let newP = hi.cloneNode(true);
  newP.id = `${newP.id + num}`;
  num++;
  container.appendChild(newP);
};
