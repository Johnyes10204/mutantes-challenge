
const letters = [];
var matriz = [];

const process = (posicion) => {

    var vertical = [];
    var horizontal = [];
    var oblicuo = [];



    for (let v of posicion) {
        var fila = 0;
        var columna = 0;
        fila = v[0];
        columna = v[1];


        if (posicion.find((e => e == `${fila + 1},${columna + 1}`)) && posicion.find((e => e == `${fila + 2},${columna + 2}`)) && posicion.find((e => e == `${fila + 3},${columna + 3}`))) {

            oblicuo.push(v);
        }

        if (posicion.find((e => e == `${fila},${columna + 1}`)) && posicion.find((e => e == `${fila},${columna + 2}`)) && posicion.find((e => e == `${fila},${columna + 3}`))) {
            horizontal.push(v);

        }

        if (posicion.find((e => e == `${fila},${columna}`)) && posicion.find((e => e == `${fila + 1},${columna - 1}`)) && posicion.find((e => e == `${fila + 2},${columna - 2}`)) && posicion.find((e => e == `${fila + 3},${columna - 3}`))) {
            oblicuo.push(v)
        }

        if (posicion.find((e => e == `${fila + 1},${columna}`)) && posicion.find((e => e == `${fila + 2},${columna}`)) && posicion.find((e => e == `${fila + 3},${columna}`))) {
            vertical.push(v);
        }
    }
    return vertical.length == 1 || horizontal.length == 1 || oblicuo.length == 1 ? true : false;
}


const lettersmap = async () => {
    var count  = 0;
    for (let i of matriz) {
        for (let p = 0; p < i.length; p++) {
            if (letters.includes(i[p]) ? true : letters.push(i[p]));
        }
        count++;
        const d = (count == matriz.length ?  true : false)
        if(d){
            return d;
        }
    }
    
}

exports.handler = async (event) => {
    // TODO implement
    try{
        let connection;
    // Connects to a connection pool to the MariaDB database.
    /*if (typeof connection === "undefined") {
      const dataConnection = {dbName: }
      connection = await mariadb.createPool(dataConnection);
    }*/
        
        let { body } = event;
        body = body ? JSON.parse(body) : null;
        console.log("body",body,body.dna)
        const dna = body ? body.dna :  null;
            if (dna == "" || dna == null) return {
            statusCode: 404,
            body: JSON.stringify('Ean es obligatorio'),
        };
            const response = []
        var posiciona = [];
        dna.map((dna) => {
            let array_element = [];
            for (let index = 0; index < dna.length; index++) {
                var any = dna.charAt(index);
                array_element.push(any)
            }

            matriz.push(array_element);
        })

        const resletter = await lettersmap();


        if (resletter) {
            letters.map(e => {
                for (let i of matriz) {
                    for (let p = 0; p < i.length; p++) {
                        if (i[p] == `${e}`) {
                            posiciona.push([matriz.indexOf(i), p])
                        }
                    }
                }
                response.push(process(posiciona))
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
            body: countdna > 1 ? JSON.stringify('Mutante') : JSON.stringify('Humano'),
        };
        return res;
    }catch(err){
        const response = {
            statusCode: err.statusCode ? err.statusCode : 500,
            body: JSON.stringify('internal server error'),
        };
        return response;
    }
    
};
