// #clock JS
var clockInterval = setInterval(function () {
    var now = new Date();
    var s = now
        .getHours()
        .toString()
        .padStart(2, 0) + " : " + now
        .getMinutes()
        .toString()
        .padStart(2, 0) + " : " + now
        .getSeconds()
        .toString()
        .padStart(2, 0);

        document.getElementById("clock").innerHTML = s;
}, 1000)