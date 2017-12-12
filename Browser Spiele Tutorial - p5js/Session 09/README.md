[Zum Video →](https://www.youtube.com/watch?v=UxuH_j_PnSQ)

Um einen Text auf dem Display ausgeben zu können, verwendet man folgenden Befehlt:
```javascript
text("text in Anführungszeichen", position_x, position_y);
```
Wenn der Text in ein Kasten gehört oder als Blog geschrieben werden soll, dann kannst du noch zwei Parameter hinzufügen, die die Größe des Text Blockes bestimmen:
```javascript
text("text in Anführungszeichen", position_x, position_y, breite, höhe);
```
Heute lernen wir zusätzlich noch ein einfaches System wie man mehrere unterschiedliche Seite erstellen kann. Zum Beispiel eine Start Seite mit einem Menü. Dann brauchen wir noch eine Seite auf der dann das Spiel gespielt wird und zuletzt noch eine Seite, die anzeigt ob wir gewonnen haben. Dafür führen wir eine Variable ein die du beliebig nennen kannst. In dieser speichern wir die aktuelle Seite. Und in unserer draw function fragen wir diesen dann ab und führen dann die jeweilige Seite aus.