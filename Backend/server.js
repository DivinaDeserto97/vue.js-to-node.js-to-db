const express = require("express");
const dbConnection = require("./app/config.db/testConfig");
const cors = require("cors");
const dataRoutes = require("./app/routes/dataRoutes");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.static(__dirname + '/public'));

dbConnection.connect((err) => {
    if (err) {
        console.error("Fehler beim Verbinden:", err.stack);
        return;
    }
    console.log("Mit der Datenbank verbunden");
});

// Verwenden Sie die ausgelagerten Routen
app.use(dataRoutes);

app.listen(PORT, () => {
    console.log(`Server läuft auf http://localhost:${PORT}`);
});
