
function setup() {
    createCanvas(600, 400);
    
}

function draw() {
    clear();
    
    console.log(mouseX + " : " + mouseY);
    
    
    if (mouseIsPressed) {
        rect(mouseX - 25, mouseY - 25, 50, 50);
    } else {
        ellipse(mouseX, mouseY, 50, 50);
    }
    
}





