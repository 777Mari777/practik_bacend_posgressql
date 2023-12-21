const Pool = require('pg').Pool
//создаем новый объект этого класса
const pool = new Pool({
    user: "postgres",
    password: "12345",
    host: "localhost",
    port: 5432,
    database: "node"
})

module.exports = pool