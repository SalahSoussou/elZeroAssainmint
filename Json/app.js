fetch("http://localhost:8000/quotes")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    content = Math.floor(Math.random() * data.length);
    document.body.innerHTML = `〃${data[content].quote}〃 </br> <p><i>-${data[content].author}</i></p> `;
  });
