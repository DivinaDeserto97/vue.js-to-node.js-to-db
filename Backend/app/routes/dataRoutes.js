const express = require("express");
const router = express.Router();
const dataController = require("../controllers/dataController");

router.get("/data", dataController.getDataHtml);
router.get("/api/data", dataController.getDataJson);
router.get('/', (req, res) => {
    res.sendFile(__dirname + '/../../public/index.html');
});

module.exports = router;
