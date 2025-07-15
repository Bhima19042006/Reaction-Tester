var start = new Date().getTime();

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function move() {
    var left = Math.random() * 300;
    var top = Math.random() * 300;
    var wh = (Math.random() * 100) + 100;

    var square = document.getElementById("sq");

    square.style.left = left + "px";
    square.style.top = top + "px";
    square.style.width = wh + "px";
    square.style.height = wh + "px";
    square.style.backgroundColor = getRandomColor();
    square.style.display = "block";

    start = new Date().getTime();
}

move();

document.getElementById("sq").onclick = function () {
    document.getElementById("sq").style.display = "none";
    var end = new Date().getTime();
    var timeTaken = (end - start) / 1000;
    alert(timeTaken + " Seconds.");
    move();
};
