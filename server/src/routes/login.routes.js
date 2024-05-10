const { Router } = require("express");
const router = Router();
const { pool } = require("../db");
const { login, peticion } = require("../controllers/login.controllers");

router.post("/login", login);
router.get("/login", peticion);

module.exports = router;
