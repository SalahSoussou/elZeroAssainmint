let heder = document.createElement("div");
let conteaner = document.createElement("div");
let footer = document.createElement("div");
// heder ++++++++++++++++++++++++++++++++++++++++
let logo = document.createElement("div");
let list = document.createElement("ul");
let li1 = document.createElement("li");
let li2 = document.createElement("li");
let li3 = document.createElement("li");
let li4 = document.createElement("li");

logo.innerHTML = "<h2>Salah</h2>";

li1.innerText = "Home";
li2.innerText = "About";
li3.innerText = "Service";
li4.innerText = "Contact";

list.append(li1, li2, li3, li4);
heder.append(logo, list);

// header styling =================================
document.body.style.cssText = "margin: 0;padding: 0;";
heder.style.cssText = `height:40px; display: flex;justify-content: space-between;align-items: center;padding: 10px;`;
list.style.cssText = `display: flex;margin: 5px 0;justify-content: space-between;align-items: center;flex-gap:gap; list-style: none;`;
li1.style.cssText = "margin: 0 10px;";
li2.style.cssText = "margin: 0 10px;";
li3.style.cssText = "margin: 0 10px;";
li4.style.cssText = "margin: 0 10px;";

document.body.append(heder, conteaner, footer);
