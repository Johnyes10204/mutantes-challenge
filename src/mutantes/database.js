const mariadb = require('mariadb');
require('dotenv').config();

const credential = {
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    connectionLimit: 5
}


const insertDna = async (dna, result) => {
    const pool = await mariadb.createConnection(credential);
    const count= await pool.query(`select count(*) as countdna from mutantes.dna where dna = '${dna}'`);
    var dnas = count[0].countdna
    if (dnas == 0) {
        const count= await pool.query(`INSERT mutantes.dna(dna,tipodna) VALUES('${dna}','${result}')`);
        }
    const res = {
        statusCode: result     ,  
        body: JSON.stringify("")
    };
    return res;    
}

module.exports = {
    insertDna
}