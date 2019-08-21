const router = require("express").Router();
const controller = require("./controller");

router.get("/", controller.getInspections);

module.exports = router;