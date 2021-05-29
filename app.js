let b1 = document.getElementById("butt1");
let b2 = document.getElementById("butt2");
let b3 = document.getElementById("butt3");
let b4 = document.getElementById("butt4");
let b5 = document.getElementById("butt5");

b1.addEventListener("click", toggleState, false);
b2.addEventListener("click", toggleState, false);
b3.addEventListener("click", toggleState, false);
b4.addEventListener("click", toggleState, false);
b5.addEventListener("click", toggleState, false);

function toggleState() {
    console.log("Toggled!");
    b1.classList.toggle("selected");
}