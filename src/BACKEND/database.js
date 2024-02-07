const { createPool } =require('mysql');

const pool=createPool({
    host: "65.21.7.252",
    user: "dba",
    password: "Sapl@2023",
    database: "USPL",
    multipleStatements: true,
    timezone: "local",
    connectionLimit: 150
})