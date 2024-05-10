const login = async (req, res) => {
  try {
    const { email, password } = req.query;
    const selectedUser = { email, password };

    const loggedUser = skaters.find(
      (skater) => skater.password === password && skater.email === email
    );

    if (loggedUser) {
      const token = jwt.sign(selectedUser, secretKet, tokenOptions);
      localStorage.setItem("token", token);

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

localStorage.setItem("token", JSON.stringify("${token}"));
