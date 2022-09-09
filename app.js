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

console.log(myElement);

// =========================================

for (let i = 0; i < 10; i++) {
  let pruductDiv = document.createElement("div");
  pruductDiv.innerHTML = `<h1>pruduct number ${i + 1}</h1>`;
  document.body.appendChild(pruductDiv);
}
