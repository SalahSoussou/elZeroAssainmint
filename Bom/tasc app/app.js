let addA = document.getElementById("add");
let container = document.getElementById("container");

let data = [];
addA.onclick = () => {
  let id = (Math.random() * 123 * 356).toFixed(15);
  let task = document.createElement("div");
  let delet = document.createElement("button");
  delet.innerText = "delet";
  delet.id = id;

  if (text.value !== "") {
    data.push({ titel: text.value, id: id });
    localStorage.tacks = JSON.stringify(data);
    text.value = "";
  } else return;

  if (data !== []) {
    data.forEach((e) => {
      task.append(e.titel, delet);
    });
  }
  container.append(task);
};
