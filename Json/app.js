fetch("http://localhost:8000/quotes")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    content = Math.floor(Math.random() * data.length);
    let div = document.createElement("div");
    div.innerHTML = `〃${data[content].quote}〃</br><p><i>-${data[content].author}</i></p>`;
    document.body.appendChild(div);
    // document.body.innerHTML = `〃${data[content].quote}〃</br><p><i>-${data[content].author}</i></p>`;
  });
let req = new XMLHttpRequest();

req.open("GET", "http://localhost:8000/quotes");
req.send();

req.onreadystatechange = function () {
  // console.log(req.readyState);
  // console.log(req.status);

  if (req.readyState === 4 && req.status === 200) {
    let data = JSON.parse(req.responseText);
    //console.log(data);
    content = Math.floor(Math.random() * data.length);

    let text = document.createElement("div");
    text.innerHTML = `〃${data[content].quote}〃</br><p><i>-${data[content].author}</i></p>`;

    document.body.appendChild(text);
  }
};

// =================== Promise
/*

*/

// const myPromes = new Promise((resolve, reject) => {
//   let connect = true;
//   if (connect) {
//     resolve("connection established");
//   } else {
//     reject(Error("Connection failed"));
//   }
// }).then(
//   (repons) => console.log(`Good: ${repons}`),
//   (reject) => console.log(` ${reject}`)
// );
// console.log(myPromes);

const myPromes = new Promise((resolve, reject) => {
  let connect = true;
  if (connect) {
    resolve("connection established");
  } else {
    reject(Error("Connection failed"));
  }
});
console.log(myPromes);

myPromes.then(
  (repons) => console.log(`Good: ${repons}`),
  (reject) => console.log(` ${reject}`)
);

// myPromes.then(
//   (repons) => console.log(`Good: ${repons}`),
//   (reject) => console.log(` ${reject}`)
//);
console.log("#".repeat(44));
//===========================
/*
Then
Catch
Finally
*/
const promes = new Promise((resolve, reject) => {
  let users = ["salah", "soussou", "iddine", "developer"];
  if (users.length === 4) {
    resolve(users);
  } else {
    reject(Error("users are not 4 no Winer"));
  }
})
  .then((repons) => {
    repons.length = 2;
    console.log(repons);
    return repons;
  })
  .then((repons) => {
    repons.length = 1;
    console.log(repons);
    return repons;
  })
  .then((repons) => {
    console.log(`The winer user is: ${repons}`);
  })
  .catch((noWiner) => console.log(noWiner))
  .finally(console.log("promis is done"));
