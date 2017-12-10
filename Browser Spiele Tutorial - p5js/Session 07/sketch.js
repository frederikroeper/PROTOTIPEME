var sonne = 0;

var img_wolke;
var wolke = 250;
var wolken_richtung = true;

var img_wellen;
var wellen = -33;
var wellen_richtung = true;

var img_boot;
var boot = 0;

var img_ski;


function preload() {
    img_wolke = loadImage("cloud.png");
    img_wellen = loadImage("waves.png");
    img_boot = loadImage("boat.png");
    img_ski = loadImage("ski.png");
}

function setup() {
    createCanvas(600, 400);
}

function draw() {
    clear();
    
    // Sonne
    sonne = sonne + 0.2;
    var color_sonne = color(255, 204, 0);
    fill(color_sonne);
    ellipse(sonne, sonne/2, 60, 60);
    
    // Meer 
    var color_meer = color(97, 214, 229);
    fill(color_meer);
    noStroke();
    rect(0, 250, 600, 150);
    
    // Wolke
    image(img_wolke, wolke, 50, 196, 125);
    if (wolken_richtung) {
        wolke = wolke+0.1;
    } else {
        wolke = wolke-0.1;
    }
    if (wolke > 350) {
        wolken_richtung = false;
    } else if (wolke < 250) {
        wolken_richtung = true;
    }
    
    
    // Wellen
    image(img_wellen, wellen, 200, 640, 102);
    if (wellen_richtung) {
        wellen = wellen+0.05;
    } else {
        wellen = wellen-0.05;
    }
    if (wellen > -10) {
        wellen_richtung = false;
    } else if (wellen < -33) {
        wellen_richtung = true;
    }
    
    // Boot
    image(img_boot, boot, 190, 206, 53);
    boot++;
    
    // Ski
    var color_seil = color(0);
    fill(color_seil);
    noStroke();
    image(img_ski, boot-80, 200, 60, 60);
    rect(boot-31, 217, 40, 1);
    
    
    
    
    
}