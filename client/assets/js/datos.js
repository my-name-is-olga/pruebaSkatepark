const url = "http://localhost:3000";
const email = document.getElementById("email");
const nombre = document.getElementById("nombre");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const experiencia = document.getElementById("experiencia");
const especialidad = document.getElementById("especialidad");

const datos = [];
window.onload = function () {
  updateSkaters();
  const updateBtn = document.getElementById("updateBtn");
  updateBtn.addEventListener("submit", updateSkaters());
};

window.onload = function () {
  deleteSkaters();
  const deleteBtn = document.getElementById("deleteBtn");
  deleteBtn.addEventListener("submit", deleteSkaters());
};

const updateSkaters = async (id) => {
  try {
    await axios
      .put(url + "/datos" + id, {
        email: email.value,
        nombre: nombre.value,
        password: password.value,
        confirmPassword: confirmPassword.value,
        anos_experiencia: experiencia.value,
        especialidad: especialidad.value,
      })

      .then(() => {
        updateSkaters();
      });
  } catch (error) {
    console.error(error.message);
  }
};

const deleteSkaters = async (i, id) => {
  try {
    await axios.delete(url + "/datos" + id).then(() => {
      alert("REGISTRO: " + registro[i].email + "ELIMINADO EXITOSAMENTE");
      getSkaters();
    });
  } catch (error) {
    console.error(error.message);
  }
};
