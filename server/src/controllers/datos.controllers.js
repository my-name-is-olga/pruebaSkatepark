const { pool } = require("../db");

const setSkaterStatus= async ()=>{
    const result = await pool.query(`
    update skaters set estado=$1 where id=$2 returning*
    `)
    const skater = result.rows[0];
    return skater;
}

const getSkaterData =async()=>{
    try {
        const result = await pool.query(
            "select * from skaters where email=$1 and password=$2;"
        )
        return result.rows;
    } catch (error) {
        console.error(error.message)
    }
}

const setSkaterData =async()=>{
        try {
        const result= await pool.query(
"update skaters set nombre=$1, password=$2, anos_experiencia=$3, especialidad=$4 where email=$5 returning *"
        )
        const skater = result.rows[0];
        return usuario;
    } catch (error) {
        console.error(error.message)
    }
}

const deleteSkaterData = async()=>{
    try {
        const result = await pool.query(
        "delete from skaters where email=$1"
    )
    return result.rowCount
    } catch (error) {
        console.error(error.message)
    }
    
}

module.exports = {
    setSkaterStatus,
getSkaterData,
setSkaterData,
deleteSkaterData
};
       