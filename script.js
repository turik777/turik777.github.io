let div = document.getElementById("time");

function time() {
    let d = new Date();
    let s = d.getUTCSeconds();
    let m = d.getUTCMinutes();
    let h = d.getUTCHours() + 3;
    if (h > 24) {
        h -= 24;
        s += " AM";
    } else if (h == 24) {
        h -= 12;
        s += " AM";
    } else if (h > 12) {
        h -= 12;
        s += " PM";
    } else if (h == 12) {
        s += " PM";
    } else {
        s += " AM";
    }
    div.textContent =
        ("0" + h).substr(-2) + ":" + ("0" + m).substr(-2) + ":" + ("0" + s).substr(-5) + " UTC+3";
}

time();
setInterval(time, 1000);

function darkMode() {
    let element = document.body;
    element.classList.toggle("dark");
}