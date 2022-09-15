let addA = document.getElementById("add");
let container = document.getElementById("container");

let data = [];
let delet;
addA.onclick = () => {
  delet = document.createElement("button");
  let id = (Math.random() * 123 * 356).toFixed(15);
  if (text.value !== "") {
    data.push({ titel: text.value, id: id });
    localStorage.tacks = JSON.stringify(data);
    text.value = "";
  } else return;
  let task;
  if (data !== []) {
    data.forEach((e) => {
      delet.innerText = "delet";
      delet.id = id;
      task = document.createElement("div");
      task.append(e.titel, delet);
    });
  }

  container.append(task);
  console.log(JSON.parse(localStorage.tacks));
};

delet?.addEventListener("click", (e) => {
  console.log(e.id);
});
