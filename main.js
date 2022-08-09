var a, b, c, x, y;

function start() {
    a = document.querySelector("#play");
    if (a.style.display === "none") {
        a.style.display = "block";
        x = Math.floor(Math.random() * 10) + 1;
        document.querySelector("#btn").value = "Cancel";
    }
    else {
        a.style.display = "none";
        document.querySelector("#btn").value = "Let's Play";
        y = undefined;
        document.querySelector("#number").value="";
        b = document.querySelector("#won");
        b.innerHTML = "";
        b.style.display = "none";
        c = document.querySelector("#lose");
        c.innerHTML = "";
        c.style.display = "none";

    }
}

function result() {
    y = parseInt(document.querySelector("#number").value);
    if (x == y) {
        b = document.querySelector("#won");
        b.innerHTML = ("Congratulations...You have won this game. The number was " + x);
        b.style.display = "block";
    }
    else {
        c = document.querySelector("#lose");
        c.innerHTML = ("Opps...You have lost this game. The number was " + x);
        c.style.display = "block";
    }
}