const mariadb = require('mariadb');
require('dotenv').config();

const credential = {
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    connectionLimit: 5
}

exports.statsHandler = async (event) => {
    var response = []
    const pool = await mariadb.createConnection(credential);
    const rows= await pool.query('select tipodna , count(*) count from mutantes.dna group by tipodna');
    rows.map(e => {
        var pushar = (e.tipodna == 200 ? {count_mutan_dna : Number(e.count)}: (e.tipodna == 403 ? {count_human_dna : Number(e.count)} : ''));
        response.push(pushar)
    })
    var ratio = Number(rows[0].count) / Number(rows[1].count);
    
    response.push({ratio:ratio})
    const body = { code: "200", response};
    const res = {
        statusCode: 200,  
        body: JSON.stringify(response)
    };
    return res; 
}