const mysql = require('mysql');
require('dotenv').config();


const con = mysql.createConnection({
    host: process.env.HOST,
    user: "admin",
    database: process.env.DB,
    password: process.env.PASSWORD
});




const getDataDna = (req,res) => {
    var response = []
    con.query('select tipodna , count(*) count from dna group by tipodna', (_er, rows) => {
        if(_er){
            res.json(_er);
            return
        }
        rows.map(e => {
            var pushar = (e.tipodna == 200 ? {count_mutan_dna : e.count}: (e.tipodna == 403 ? {count_human_dna : e.count} : ''));
            response.push(pushar)
        })

        var ratio = rows[0].count / rows[1].count;
        response.push({ratio:ratio})

        res.json(response)
    })
}

const insertDna = (dna, result, res) => {
    con.query(`select count(*) as countdna from dna where dna = '${dna}'`, (_erc, count) => {
        var dnas = count[0].countdna
        if (dnas == 0) {
            con.query(`INSERT dna(dna,tipodna) VALUES('${dna}','${result}')`, (_er, rows) => {

            })
        }
    })
    res.sendStatus(result);
}

module.exports = {
    getDataDna,
    insertDna
}