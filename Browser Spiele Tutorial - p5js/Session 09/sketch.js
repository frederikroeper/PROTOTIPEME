var stadium = 0;

function setup() {
    createCanvas(600, 400);
}

function draw() {
    clear();
    if (stadium == 0) {
        start();
    } else if (stadium == 1) {
        spiel();
    } else if (stadium == 2) {
        gameover();
    }
}

var transparent = 0;
var richtung = true;
// start, stadium = 0
function start () {
    textSize(20);
    fill(0, transparent)
    text("< Mit Leertaste fortfahren! >", 200, 250);
    
    if (transparent >= 200) {
        richtung = false;
    } else if (transparent <= 50) {
        richtung = true;
    }
    if (richtung) {
        transparent += 5;
    } else {
        transparent -= 5;
    }
}

// spiel, stadium = 1
function spiel() {
    textSize(32);
    fill(255, 0, 0);
    text("Hallo, dass ist ein sehr sehr langer Text!", 40, 40);
    fill(255, 0, 0, 100);
    text("Hallo, dass ist ein sehr sehr langer Text!", 40, 40, 200);
    rect(50, 50, 40, 40);
}

// gameover, stadium = 2
function gameover () {
    textSize(20);
    fill(0)
    text("Du hast verloren!", 200, 250);
    
}


function keyPressed() {
//    console.log(keyCode);
    if (keyCode == 32 && stadium == 0) {
        stadium = 1;
    }
    if (keyCode == 70 && stadium == 1) {
        stadium = 2;
    }
}
