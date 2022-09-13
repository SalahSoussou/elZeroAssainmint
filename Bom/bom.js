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
