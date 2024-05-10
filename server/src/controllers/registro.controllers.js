const { pool } = require("../db");

const registerSkater = async (req, res) => {
  console.log(registerSkater);
  const {
    email,
    nombre,
    password,
    confirmPassword,
    anosExperiencia,
    especialidad,
    foto,
  } = req.body;
   
  const checkPassword = async (password1, password2) => {
    return password1 === password2;
  };
  try {
    if (!(await checkPassword(password, confirmPassword))) {
      console.log("CONTRASEÑAS NO COINCIDEN");
      return res.status(400).json({ message: "CONTRASEÑAS NO COINCIDEN" });
    }
    const { profilePhoto } = req.files;
    const { name } = profilePhoto;
    const date = new Date();
    const time = date.getTime();
    const newFileName = `${time + "-" + name}`;
    profilePhoto.mv(`${__dirname}/public/${newFileName}`, (err) => {
      if (err) {
        console.log(err);
        res.send("ERROR INESPERADO");
      } else {
        res.send("http://localhost:3000/" + newFileName);
      }
    });
    axios.post(url + "/registro", data).then(() => getSkaters());
  
    const query = `
    insert into skaters(email, nombre, password, anos_experiencia, especialidad, foto, estado)
values($1, $2, $3, $4, $5, $6, $7) returning *
    `;
    const values = [
      email,
      nombre,
      password,
      anosExperiencia,
      especialidad,
      foto
    ];

    const client = await pool.connect();
    await client.query(query, values);
    client.release();

    console.log("¡REGISTRO REALIZADO EXITOSAMENTE!");
    //res.redirect("registroExitoso"); REVISAR ESTA RUTA EVENTUALMENTE
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: "ERROR AL REALIZAR EL REGISTRO" });
  }
}; 

const getStakers = async (req, res) => {
  try {
    const result = await pool.query("select * from skaters");
    res.send(result.rows);
  } catch (error) {
    console.error(error.message);
    res.status(400).send("ERROR AL OBTENER LOS REGISTROS");
  }
};

const editSkater = async (req, res) => {
  try {
    const {
      email,
      nombre,
      password,
      confirmPassword,
      anosExperiencia,
      especialidad,
      foto,
      estado,
    } = req.body;
    const { id } = req.query;
    const values = [
      email,
      nombre,
      password,
      confirmPassword,
      anosExperiencia,
      especialidad,
      foto,
      estado,
      id,
    ];
    const queryEditSkater =
      "update skaters set email=$1, nombre=$2, password=$3, confirmPassword=$4, anosExperiencia=$5, especialidad=$6, foto=$7, estado=$8 where id=$9 returning *";
    const result = await pool.query(queryEditSkater, values);
    res.send(result.rows);
  } catch (error) {
    console.error(error);
    res.status(400).send("ERROR AL MODIFICAR REGISTRO");
  }
};

const deleteSkater = async(req, res)=>{
  try {
    const {id}=req.query;
    const values= [id]; 
    const queryDeleteSkater = `delete from skaters where id=${id} returning *`;
    const result = await poo.query(queryDeleteSkater, values) ;
    res.status(200).json(result.rowCount)
        } catch (error) {
    console.error(error);
    res.status(400).send("ERROR AL ELIMINAR REGISTRO")
  }
}

module.exports = {
  registerSkater,    
  getStakers,
  editSkater,
  deleteSkater
};
