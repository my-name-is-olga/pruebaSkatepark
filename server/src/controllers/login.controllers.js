const { pool } = require("../db");
const jwt = require("jsonwebtoken");

const secretKet = "mySecretKey";
const tokenOptions = { expiresIn: "120000" };

const login = async (req, res) => {
  try {
    const { email, password } = req.query;
    const selectedUser = { email, password };

    const loggedUser = skaters.find(
      (skater) => skater.password === password && skater.email === email
    );

    if (loggedUser) {
      const token = jwt.sign(selectedUser, secretKet, tokenOptions);
      sessionStorage.setItem("token", token);

      res.status(200).json({
        status: "ok",
        is_Active: true,
        message: "Usuario logueado",
        token: token,
        loggedUser: loggedUser,
      });
    } else {
      res.status(200).json({
        message: "Usuario y/o contraseña incorrectas.",
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
};

const peticion = async (req, res) => {
  try {
    const { token } = req.query;
    return jwt.verify(token, secretKet, (err, data) => {
      err
        ? res.status(404).json({
            status: "Error",
            message: "Usuario no encontrado",
            error: err,
          })
        : res.status(200).json({ status: "ok", message: "Petición exitoas" });
    });
  } catch (error) {
    res.json(error);
  }
};

module.exports = {
  login,
  peticion,
};

