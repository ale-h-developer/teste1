

let myContainer = document.getElementById("container");
let myButton = document.getElementById("myButton");
let myData = document.getElementById("myInput");
let para = document.getElementById("demo");

// function myFunction() {
//     console.log("Hello you!");
//     myContainer.innerHTML = "Hello Everybody!"
    
// }

function myFunction2() {
    if (myData.value !== "") {
    para.innerText = `Hello ${myData.value} !!!`
    myContainer.style.background = "black";
    } else {
        para.innerText = "Hello you!"
    }
}

// myContainer.addEventListener("click", myFunction);
myButton.addEventListener("click", myFunction2);

