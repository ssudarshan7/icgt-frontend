const Pool = require("pg").Pool;


const pool = new Pool({
    user: "postgres",
    password: "4026302",
    host: "localhost",
    port: 5432,
    database: "members"
});

module.exports = pool;
