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
    const rows= await pool.query('select tipodna , count(*) count from dna group by tipodna');
    
    rows.map(e => {
        var pushar = (e.tipodna == 200 ? {count_mutan_dna : e.count}: (e.tipodna == 403 ? {count_human_dna : e.count} : ''));
        response.push(pushar)
    })
    var ratio = rows[0].count / rows[1].count;
        response.push({ratio:ratio})

    const res = {
        statusCode: 200,  
        body: JSON.stringify(response)
    };
    return res; 
}