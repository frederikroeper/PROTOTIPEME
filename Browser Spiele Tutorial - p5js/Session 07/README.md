[Zum Video →](https://www.youtube.com/watch?v=4QkDhN9nQ6c)

Chrome hat leider recht strikte Bestimmungen wie Bilder im Browser geladen werden. Und so ist es nicht erlaubt lokale Bilder in den Browser zu laden. Aus diesem Grund müssen wir in diesem Tutorial leider auf den Firefox Browser ausweichen, der uns das erlaubt. Dafür einfach die passende Datei für dein Betriebsystem herunterladen und installieren.

Firefox: https://www.mozilla.org/de/firefox/new/

Um ein Bild zu laden, brauchst du eine sogenannte preloading Funktion. Diese lädt die Bilder bevor es losgeht, damit sie dann zur Verfügung stehen, wenn du sie brauchst.
```javascript
var img;
function preload() {
    img = loadImage("der/weg/zum/bild.jpg");
}
function setup() {
    image(img, 0, 0);
}
```