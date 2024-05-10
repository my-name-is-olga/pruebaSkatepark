const url = "http://localhost:3000";
const email = document.getElementById("email");
const nombre = document.getElementById("nombre");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const experiencia = document.getElementById("experiencia");
const especialidad = document.getElementById("especialidad");
const foto = document.getElementById("photo");

const registro = [];
window.onload = function () {
  getSkaters();
  const newSkaterBtn = document.getElementById("newSkaterBtn");
  newSkaterBtn.addEventListener("submit", newSkater);
};

const newSkater = async () => {
  try {
    let data = {
      email: email.value,
      nombre: nombre.value,
      password: password.value,
      confirmPassword: confirmPassword.value,
      anos_experiencia: experiencia.value,
      especialidad: especialidad.value,
      foto: foto.value,
    };
    axios.post(url + "/registro", data).then(() => newSkater());
  } catch (error) {
    console.error(error.message);
  }
};

const getSkaters = async () => {
  await axios.get(url + "/registro").then((result) => {
    try {
      const result = pool.query(`select * from skaters`);
      res.send(result.rows);
    } catch (error) {
      console.error(error.message);
    }
  });
};

const deleteSkater = async (i, id) => {
  try {
    await axios.delete(url + "/registro" + id).then(() => {
      alert("REGISTRO: " + registro[i].email + "ELIMINADO EXITOSAMENTE");
      getSkaters();
    });
  } catch (error) {
    console.error(error.message);
  }
};

const updateSkater = async (id) => {
  try {
    await axios
      .put(url + "/registro" + id, {
        email: email.value,
        nombre: nombre.value,
        password: password.value,
        confirmPassword: confirmPassword.value,
        anos_experiencia: experiencia.value,
        especialidad: especialidad.value,
        foto: foto.value,
      })
      .then(() => {
        getSkaters();
      });
  } catch (error) {
    console.error(error.message);
  }
};
