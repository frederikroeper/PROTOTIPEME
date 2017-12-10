var abstand_links = 0;
var abstand_oben = 0;
var breite = 0;
var hoehe = 0;

function setup() {
    createCanvas(600, 400);
}

function draw() {
    clear();
    ellipse(150, 150, 10, 10);
    rect(160, 160, 50, 50, 50, 10, 50, 10);
    triangle(60, 75, 58, 20, 86, 75);
    rect(50, 50, 155, 5);
    
    ellipse(abstand_links,abstand_oben,breite,hoehe);
    abstand_links = abstand_links + 0.2;
    abstand_oben = abstand_oben + 0.2;
    breite = breite + 0.2;
    hoehe = hoehe + 0.2;

    if (breite > 200) {
        abstand_links = abstand_links - 0.4;
    }
    
    
}