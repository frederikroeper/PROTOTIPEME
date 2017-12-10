var farbe;
var x = 50;
var y = 50;
var breite = 40;
var hoehe = 40;

function setup() {
    createCanvas(600, 400);
    farbe = color(255, 0, 0);
}

function draw() {
//    console.log(keyIsPressed);
//    rect(50, 50, 30, 30);
//    
//    fill(0);
//    if (keyIsPressed) {
//        fill(255);
//    }
    clear();
    
    fill(farbe);
    rect(x, y, breite, hoehe);
    
    if (keyIsDown(RIGHT_ARROW)) {
        x += 5;
    }
    if (keyIsDown(LEFT_ARROW)) {
        x -= 5;
    }
    if (keyIsDown(UP_ARROW)) {
        y -= 5;
    }
    if (keyIsDown(DOWN_ARROW)) {
        y += 5;
    }
}

function keyPressed() {
//    console.log(keyCode);

    if (keyCode == 82) {
        farbe = color(255, 0, 0);
    }
    
    if (keyCode == 71) {
        farbe = color(0, 255, 0);
    }
    
    // q = 81 höhe größer
    if (keyCode == 81) {
        hoehe += 5;
    }
    // a = 65 höhe kleine
    if (keyCode == 65) {
        hoehe -= 5;
    }
    // w = 87 breite größer
    if (keyCode == 87) {
        breite += 5;
    }
    // s = 83 breite kleiner
    if (keyCode == 83) {
        breite -= 5;
    }
    
    
}


