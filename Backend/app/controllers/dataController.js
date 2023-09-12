const dbConnection = require("../config.db/testConfig");

exports.getDataHtml = (req, res) => {
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
            <h1> Hallo das ist ein test der db connection:</h1>
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
};

exports.getDataJson = (req, res) => {
  dbConnection.query("SELECT * FROM a", (err, results) => {
    if (err) {
      res
        .status(500)
        .json({ error: "Fehler beim Abfragen der Datenbank: " + err });
      return;
    }
    res.json(results);
  });
};
