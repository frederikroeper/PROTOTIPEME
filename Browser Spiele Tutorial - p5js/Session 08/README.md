[Zum Video →](https://www.youtube.com/watch?v=5lkE4V9YRis)

Um ein Spiel zu entwickeln ist die Tastatur äußerst wichtig. Jede Taste auf der Tastatur hat einen KeyCode. Dieser KeyCode ist eine Standardisierte Zahl, die an jedem Computer die Gleiche ist. Es handelt sich hierbei um den ASCII Standard. Ihr könnt euch hier etwas genauer darüber informieren: https://de.wikipedia.org/wiki/American_Standard_Code_for_Information_Interchange

Unsere p5.min.js Datei ruft automatisch eine Funktion auf, sobald wir auf eine Taste auf der Tastatur drücken. Diese nennt sich keyPressed().
```javascript
function keyPressed() {

}
```

In der Variable keyCode, steht dann die Zahl der aktuell gedrückten Taste. Über eine einfache if Abfrage, können wir also überprüfen, welche Taste gedrückt wurde und dann etwas machen...
```javascript
if (keyCode == 50) {

}
```

Wenn wir allerdings auch das gedrückt halten von Tasten erlauben wollen, können wir in der draw function abfragen ob eine bestimmte Taste zum aktuellen Zeitpunkt gedrückt ist, indem wir die function keyIsDown(keyCode) verwenden:
```javascript
function draw() {
    if (keyIsDown(50)) {

    }
}
```