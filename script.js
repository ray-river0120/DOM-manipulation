// Do your magic here!
function changeBackgroundColor() {
    document.getElementById("container").style.backgroundColor = "beige";
}


function validate() {
    if (document.getElementById("numb").value < 1 || document.getElementById("numb").value > 10) {
        document.getElementById('demo').innerHTML = "Invalid input";
    } else {
        document.getElementById('demo').innerHTML = "Valid input";
    }
}

function checkDateTime() {
    document.getElementById('myBtn').innerHTML = alert(Date());
}