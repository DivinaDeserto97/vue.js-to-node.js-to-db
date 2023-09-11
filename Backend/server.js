const express = require('express');
const mysql = require('mysql2');

const app = express();
const PORT = 3000;

// Du kannst hier eine Verbindung zu deiner MySQL-Datenbank aufbauen, wenn nötig
// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'deinBenutzername',
//   database: 'deineDatenbank'
// });

app.get('/', (req, res) => {
  res.send('Hallo Welt! Ich bin Tobias.');
});

app.listen(PORT, () => {
  console.log(`Server läuft auf http://localhost:${PORT}`);
});
