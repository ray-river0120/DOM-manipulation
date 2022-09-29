// Do your magic here!
let colors = ["blue", "yellow", "dark", "red", "brown", "orang"];
//get button
let button = document.getElementById("button");
//add event listener
button.addEventListener("click", function () {
    //randomizer

    let randomColors = colors[Math.floor(Math.random() * colors.length)];
    //get container
    let container = document.getElementById("container");

    container.style.background = randomColors;
});



function validate() {
    let x = document.getElementById('numb').value;
    if (isNaN(x) || x < 1 || x > 10) {
        document.getElementById('demo').innerHTML = "Input not valid";
        return false;
    } else {
        document.getElementById('demo').innerHTML = "Input Valid";
        return true;
    }
}

function checkDateTime() {
    document.getElementById('myBtn').innerHTML = alert(Date());
}