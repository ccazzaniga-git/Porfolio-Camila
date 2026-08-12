var pool = require('./bd')

async function getProductos(){
    var query = "select * from productos order by id desc";
    var rows = await pool.query(query);
    return rows;
}

module.exports = {getProductos}