const router = require("express").Router();
const inspections = require("./inspections");

router.use("/inspections", inspections);

module.exports = router;