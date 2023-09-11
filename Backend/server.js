const express = require("express");
const dbConnection = require("./app/config.db/testConfig");
const cors = require("cors"); // Importieren Sie das cors-Paket

const app = express();
const PORT = 3000;

// Aktivieren Sie CORS für alle Routen
app.use(cors());

dbConnection.connect((err) => {
  if (err) {
    console.error("Fehler beim Verbinden:", err.stack);
    return;
  }
  console.log("Mit der Datenbank verbunden");
});

app.get("/", (req, res) => {
  dbConnection.query("SELECT * FROM a", (err, results) => {
    if (err) {
      res.send("Fehler beim Abfragen der Datenbank: " + err);
      return;
    }

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

app.get("/api/data", (req, res) => {
  dbConnection.query("SELECT * FROM a", (err, results) => {
    if (err) {
      res
        .status(500)
        .json({ error: "Fehler beim Abfragen der Datenbank: " + err });
      return;
    }
    res.json(results);
  });
});

app.listen(PORT, () => {
  console.log(`Server läuft auf http://localhost:${PORT}`);
});
