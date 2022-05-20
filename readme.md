Instrucciones de uso 

#Mutante = "dna":["ATGCGA","CAGTGC","TTATGT","AGAAGG","CCCCTA","TCACTG"]
#Humano = "dna": ["XAACGAA","XAGCAAT","XATACTC","XAGATGC","DCCAATC","DTCACAG"]



#Inicializar api

cd challenge 
npm start  o ejecutar node app/server.js


Para procesar los dna, por postman se debe enviar el cuerpo en el siguiente endpoint

#POST 

http://localhost:8080/mutant

{
    "dna":["ATGDFGCGA","CAFDGGTGC","TTDFGATGT","AGFDGAAGG","CFDGCCCTA","TCFDGACTG"]
}


#En el siguiente endpoint se pueden consultar las estadísticas de los dna procesados
#GET 

http://localhost:8080/stats









