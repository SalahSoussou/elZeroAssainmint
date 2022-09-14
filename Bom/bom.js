/*

*/
setTimeout(
  (user) => {
    console.log("time out !" + user);
  },
  2000,
  "salah"
);

let handler = setInterval(() => {
  num.innerHTML -= 1;
  if (num.innerHTML === "0") {
    clearInterval(handler);
  }
}, 1000);

/*
-location
--herf get/set 
--host
--hash
--protocol
--reload()
--replace()
--assign()
 */
console.log(location);
// location.href = "https://salahsoussou.tk/";

// location.replace("https://google.com");   go to google insted of this page

// location.assign("https://google.com");   go to google without clearing history
// http://127.0.0.1:5500/

/*
--window.open()
--window.close()
*/
//===============================================================

// BOM [History]
//  history.back()
//  history.forward()
//  history.go(1) // history index

console.log(history);

// Scrolling  ===========================================
/*
BOM
-stop()
-print()
-focus()

++++ Scrolling  ++++++

-scrollTo(x,y || Optionx)   => To
-scroll(x,y || Optionx)
-scrollBy(x,y || Optionx)   =>By


----scrollX & scrollY   => returns the valuoe scrolled
*/
let buton = document.createElement("button");
buton.innerHTML = "print the pege";
document.body.appendChild(buton);

buton.addEventListener("click", () => {
  window.print();
});

//  ================ Local storag
/*
BOM [Local storag]
-setItem
-getItem
-removeItem
-clear
-key

*/

localStorage.setItem("color", "#F00");
localStorage.fontWeight = "bold";
localStorage["fontSize"] = "24px";

buton.style.backgroundColor = localStorage.color;
