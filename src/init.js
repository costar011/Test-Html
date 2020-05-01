function init() {
  console.log("aaaaaa");
}

function _initHandler() {
  const id = document.getElementById("h1-js");

  id.innerHTML = "Hello Javascript";
}

function _textHandler() {
  const id = document.getElementById("h1-js");
  const text = document.getElementById("text-js");

  //  console.dir(text);

  id.innerText = text.value;
  text.value = "";
}
