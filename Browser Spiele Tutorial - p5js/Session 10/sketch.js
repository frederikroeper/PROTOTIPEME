var obj = {};
obj.brot = "Das ist ein Brot!";
obj.gemuese = "Das ist eine Tomate!";

var rechteck = {};
rechteck.x = 10;
rechteck.y = 10;
rechteck.breite = 60;
rechteck.hoehe = 60;

var rechteck2 = {};
rechteck2.x = 200;
rechteck2.y = 200;
rechteck2.breite = 60;
rechteck2.hoehe = 60;

var rechteck3 = {};
rechteck3.x = 100;
rechteck3.y = 100;
rechteck3.breite = 60;
rechteck3.hoehe = 60;

var rucksack = [];
rucksack.push(rechteck);
rucksack.push("Ich bin im Rucksack!");

var rucksack_rechtecke = [];
rucksack_rechtecke.push(rechteck);
rucksack_rechtecke.push(rechteck2);
rucksack_rechtecke.push(rechteck3);

function setup() {
    createCanvas(600, 400);
    console.log(obj);
    console.log(rechteck);
    console.log(rucksack);
    console.log(rucksack.length);
    for (var i = 0; i < rucksack.length; i++) {
        console.log(rucksack[i]);
    }
    console.log(rucksack[1]);
    
}

function draw() {
    clear();
    fill(0);
    for (var i = 0; i < rucksack_rechtecke.length; i++) {
        rect(rucksack_rechtecke[i].x, rucksack_rechtecke[i].y, rucksack_rechtecke[i].breite, rucksack_rechtecke[i].hoehe);
    }
}









