alert("Hello World!!!");

let myContainer = document.getElementById("container");

function myFunction() {
    console.log("Hello you!");
    myContainer.innerHTML = "Hello Everybody!"
    myContainer.style.backgroundColor = "red";
}

myContainer.addEventListener("click", myFunction);

