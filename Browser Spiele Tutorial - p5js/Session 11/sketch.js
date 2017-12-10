var stadium = 0;

var tasse = {};
var scherbe;
function preload() {
    tasse.bild = loadImage("tasse.png");
    tasse.scherbe = loadImage("scherben.png");
}

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
// 0
function start () {    
    textSize(15);
    fill(0, transparent);
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


var steine = [];

function init() {
    steine = [];
    tasse.breite = 82;
    tasse.hoehe = 85;
    tasse.y = 300;
    tasse.x = 300;
    tasse.getroffen = false;
    
    for (var i = 0; i < 6; i++) {
        var stein = {};
        stein.x = Math.random() * 600;
        stein.y = -(Math.random() * 200);
        stein.breite = 20 + Math.random() * 20;
        stein.hoehe = 20 + Math.random() * 20;
        steine.push(stein);
    }
    
}

function steine_malen () {
    fill(100);
    for (var i = 0; i < steine.length; i++) {
        if (steine[i].y > 400) {
            steine[i].y = -(Math.random() * 200);
            steine[i].x = Math.random() * 600;
            steine[i].breite = 20 + Math.random() * 20;
            steine[i].hoehe = 20 + Math.random() * 20;
        }
        steine[i].y += 3;
        rect(steine[i].x, steine[i].y, steine[i].breite, steine[i].hoehe);
    }
}

function gameover_check () {
    for (var i = 0; i < steine.length; i++) {
        if ((steine[i].y+steine[i].hoehe)>tasse.y) {
            if ((tasse.x <= steine[i].x && 
                 steine[i].x <= tasse.x + tasse.breite) || 
                (tasse.x <= steine[i].x + steine[i].breite && steine[i].x + steine[i].breite <= tasse.x + tasse.breite)) {
                tasse.getroffen = true;
            }
        }
    }
}

// 1
function spiel () {
    steine_malen();
    gameover_check();
    if (tasse.getroffen) {
        image(tasse.scherbe, tasse.x, tasse.y, tasse.breite, tasse.hoehe);
    } else {
        image(tasse.bild, tasse.x, tasse.y, tasse.breite, tasse.hoehe);
    }
    
    
    if (keyIsDown(RIGHT_ARROW)) {
        if (tasse.x < (600 - tasse.breite)) {
            tasse.x += 5;
        }
    }
    if (keyIsDown(LEFT_ARROW)) {
        if (tasse.x > 0) {
            tasse.x -= 5;
        }
    }
    
    if (tasse.getroffen) {
        text("GAMEOVER (n) für Neustart", 200, 250);
    }
}


function keyPressed() {
    // Leerzeichen
    if (keyCode == 32 && stadium == 0) {
        init();
        stadium = 1;
    }
    if (keyCode == 78 && stadium == 1) {
        init();
        stadium = 1;
    }

}







