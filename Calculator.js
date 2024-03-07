
let string = "";
const Form = document.getElementById("form");
Form.addEventListener("click", function(e){
    e.preventDefault();
});
function add(value) {
  string = string + value;
  document.getElementById("display1").value = string;
}

function clearDisplay() {
  string = "";
  document.getElementById("display1").value = "";
}

function calculate() {
  string = eval(string);
  document.getElementById("display1").value = string;
}



fetch("https://jsonplaceholder.typicode.com/posts")
      .then((data) => console.log(data , "this is response."))
      .catch((error) => console.log(error,"this ia error"))