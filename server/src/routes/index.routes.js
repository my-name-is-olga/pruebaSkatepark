const { Router } = require("express");
const router = Router();
const loginRoutes = require("./login.routes");
const registroRoutes = require("./registro.routes");

router.use("/login", loginRoutes);

router.use("/registro", registroRoutes);

module.exports = router;
