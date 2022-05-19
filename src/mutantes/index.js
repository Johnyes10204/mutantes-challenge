const Back = require("./back")

exports.handler = async (event) => {
    // TODO implement
    try{
        let connection;
    // Connects to a connection pool to the MariaDB database.
    /*if (typeof connection === "undefined") {
      const dataConnection = {dbName: }
      connection = await mariadb.createPool(dataConnection);
    }*/
    const repository = new Back(connection);
        const { body } = event;
        const dna = body.dna;
    
            if (dna == "" || dna == null) throw{statusCode: 400, body: "Ean es obligatorio"};
            const response = [];
            var posiciona = [];
            dna.map((dna) => {
                let array_element = [];
                for (let index = 0; index < dna.length; index++) {
                    var any = dna.charAt(index);
                    array_element.push(any)
                }
    
                matriz.push(array_element);
            })
    
            const resletter = await repository.lettersmap();
    
    
            if (resletter) {
                letters.map(e => {
                    for (let i of matriz) {
                        for (let p = 0; p < i.length; p++) {
                            if (i[p] == `${e}`) {
                                posiciona.push([matriz.indexOf(i), p])
                            }
                        }
                    }
                    const process = await repository.process(posiciona);
                    response.push(process);
                    posiciona = []
                });
            }
            var countdna = 0;
    
            response.filter((element) => {
    
                if (element) {
                    countdna++;
                    return true;
                }
            })
            matriz = [];
    
        const res = {
            statusCode: countdna > 1 ? 200 : 403,
            body: JSON.stringify('ok!'),
        };
        return res;
    }catch(err){
        const response2 = {
            statusCode: err.statusCode,
            body: JSON.stringify(err.body),
        };
        return response;
    }
    
};
