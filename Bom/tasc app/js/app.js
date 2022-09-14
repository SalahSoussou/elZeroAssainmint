let addA = document.getElementById("add");
let container = document.getElementById("container");

addA.onclick = () => {
  let task = document.createElement("div");
  let delet = document.createElement("button");
  delet.innerText = "delet";
  if (text.value !== "") {
    let tasc = document.createTextNode(text.value);
    task.append(tasc, delet);
    container.appendChild(task);
    text.value = "";
  } else return;
};
