const { Router } = require("express");
const router = Router();
const { pool } = require("../db");
const {
  registerSkater,
  getStakers,
  editSkater, 
  deleteSkater
} = require("../controllers/registro.controllers");

router.post("/registro", registerSkater);
router.get("/registro", getStakers);
router.put("/registro", editSkater);
router.delete("/registro", deleteSkater )

module.exports = router;
