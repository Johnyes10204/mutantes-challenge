const mariadb = require('mariadb');
require('dotenv').config();

const credential = {
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    connectionLimit: 5
}
/*const getDataDna = (req,res) => {
    var response = []
    con.query('select tipodna , count(*) count from dna group by tipodna', (_er, rows) => {
        rows.map(e => {
            var pushar = (e.tipodna == 200 ? {count_mutan_dna : e.count}: (e.tipodna == 403 ? {count_human_dna : e.count} : ''));
            response.push(pushar)
        })
        var ratio = rows[0].count / rows[1].count;
        response.push({ratio:ratio})
        res.json(response)
    })
}*/

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
   // getDataDna,
    insertDna
}