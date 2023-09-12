// Importieren von benötigten Modulen und Dateien
const express = require("express");           // Das Hauptmodul für den Webserver
const dbConnection = require("./app/config.db/testConfig");  // Verbindungseinstellungen für die Datenbank
const cors = require("cors");                 // Modul, um Cross-Origin Requests zu erlauben

// Erstellen einer neuen Express-App
const app = express();
const PORT = 3000;

// Aktivieren von CORS (Cross-Origin Resource Sharing), um Anfragen von anderen Domains zuzulassen
app.use(cors());

// Servieren von statischen Dateien (wie HTML, CSS, JavaScript) aus dem "public"-Ordner
app.use(express.static(__dirname + '/public'));

// Verbindung zur Datenbank herstellen
dbConnection.connect((err) => {
  if (err) {
    // Bei einem Verbindungsfehler eine Fehlermeldung ausgeben
    console.error("Fehler beim Verbinden:", err.stack);
    return;
  }
  console.log("Mit der Datenbank verbunden");
});

// Route, um Daten aus der Datenbank als HTML-Tabelle zu präsentieren
app.get("/data", (req, res) => {
  dbConnection.query("SELECT * FROM a", (err, results) => {
    if (err) {
      // Bei einem Datenbankfehler eine Fehlermeldung zurückgeben
      res.send("Fehler beim Abfragen der Datenbank: " + err);
      return;
    }

    // Ergebnisse der Datenbankabfrage in eine HTML-Tabelle umwandeln
    let tableContent = results
      .map(
        (row) => `
      <tr>
        <td>${row.id}</td>
        <td>${row.name}</td>
      </tr>
    `
      )
      .join("");

    let html = `
    <h1> Hallo das ist ein test der db conection:</h1>
      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          ${tableContent}
        </tbody>
      </table>
    `;

    res.send(html);
  });
});

// API-Route, um Daten aus der Datenbank als JSON zurückzugeben
app.get("/api/data", (req, res) => {
  dbConnection.query("SELECT * FROM a", (err, results) => {
    if (err) {
      // Bei einem Datenbankfehler ein JSON-Objekt mit einer Fehlermeldung zurückgeben
      res
        .status(500)
        .json({ error: "Fehler beim Abfragen der Datenbank: " + err });
      return;
    }
    res.json(results);
  });
});

// Route für die Startseite, die eine index.html-Datei aus dem "public"-Ordner zurückgibt
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

// Server starten und auf dem angegebenen Port (3000) lauschen
app.listen(PORT, () => {
  console.log(`Server läuft auf http://localhost:${PORT}`);
});
