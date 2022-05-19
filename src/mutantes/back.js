module.export = class back {
    constructor(connection) {
        this._connection = connection;
        this.lettersmap = this.lettersmap.bind(this);
        this.process = this.process.bind(this);
    }

    async lettersmap(){
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

    async process(posicion) {
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
}