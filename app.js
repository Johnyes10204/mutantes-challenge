

array = ["ACCGAA","AAGCAT","ATACTC","AGATGC","CCTATC","TCTCAG"];
array2 = ["ATGCGA","CAGTGC","TTATGT","AGAAGG","CCCCTA","TCACTG"];
const letters = ["A", "G", "C", "T"];
var matriz = [];




const process = (posicion) => {
  
    var vertical = [];
    var horizontal = [];
    var oblicuo = [];


    console.log(matriz)
    for (let v of posicion) {
        var fila = 0;
        var columna = 0;
        fila = v[0];
        columna = v[1];
       
     
        if (posicion.find((e => e == `${fila + 1},${columna + 1}`)) && posicion.find((e => e == `${fila + 2},${columna + 2}`)) && posicion.find((e => e == `${fila + 3},${columna + 3}`))) {
            console.log(fila)
            oblicuo.push(v);
        }
     
        if (posicion.find((e => e == `${fila},${columna + 1}`)) && posicion.find((e => e == `${fila},${columna + 2}`)) && posicion.find((e => e == `${fila},${columna + 3}`))) {
            horizontal.push(v);

        }

        if (posicion.find((e => e == `${fila},${columna}`)) && posicion.find((e => e == `${fila+1},${columna-1}`)) && posicion.find((e => e == `${fila + 2},${columna  - 2}`))  && posicion.find((e => e == `${fila + 3},${columna  -  3}`))   ) {  
            oblicuo.push(v)
        }

        if (posicion.find((e => e == `${fila + 1},${columna}`)) && posicion.find((e => e == `${fila + 2},${columna}`)) && posicion.find((e => e == `${fila + 3},${columna}`))) {
            vertical.push(v);
        }
    }

  

    return vertical.length == 1 || horizontal.length == 1 || oblicuo.length == 1 ? true : false;
}


const isMutant = (dna) => {
    const response = []
    var posiciona = [];
    var posiciong = [];
    var posicionc = [];
    var posiciont = [];
    
    dna.map((dna) => {
        let array_element = [];
        for (let index = 0; index < dna.length; index++) {
            var any = dna.charAt(index);
            array_element.push(any)
        }
        matriz.push(array_element);
    
    })


    let count = 0;
    for (let i of matriz) {
        for (let p = 0; p < i.length; p++) {
            if (i[p] == "A") {
                posiciona.push([count, p])
            }
            if (i[p] == "G") {
                posiciong.push([count, p])
            }
            if (i[p] == "C") {
                posicionc.push([count, p])
            }
            if (i[p] == "T") {
                posiciont.push([count, p])
            }
        }
        
        count++;
    }

  

   response.push(process(posiciona));
    response.push(process(posicionc))
    response.push( process(posiciong))
    response.push(process(posiciont))
    var countdna = 0;
    console.log(response)
    response.filter((element) => {  
   
        if(element){
            countdna++;
            return true;
        }
    })

    return countdna > 1 ? true : false;
}


console.log(isMutant(array2));






// console.log(posicion)
