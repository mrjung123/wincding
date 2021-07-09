document.getElementById("mybutton").addEventListener("click", displayalert);
document.getElementById("mycolor").addEventListener("click", changecolor);

const mybg = document.querySelector(".mybg");

function displayalert() {
    alert("button clicked");
   // document.getElementById("demo").innerHTML = Date();
  }

  function changecolor() {
    var changing = document.getElementById("bgchange");
    changing.classList.add("red-background");
    //changing.classList.toggle("red-background");
  }

  