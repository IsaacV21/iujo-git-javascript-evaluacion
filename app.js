import Calculadora from "./clases/calculadora.js"
import { integrantes } from "./clases/participantes.js"

const calculadora = new Calculadora

console.log("Bienvenidos a los juegos")

var suma = calculadora.suma(7,8)
var resta = calculadora.resta(15,20)
var multiplicacion = calculadora.multiplicacion(-5,-100)
var division =  calculadora.division(multiplicacion,50)

console.log("=======SUMA=========")
console.log(suma)
console.log("=======RESTA=========")
console.log(resta)
console.log("=======MULTIPLICACION=========")
console.log(multiplicacion)
console.log("=======DIVISION=========")
console.log(division)
console.log(integrantes())

/**
 *  
 * 
 * 
 * 
 * 
 * 
 * 
 */

// imprime las salidas correspondientes 
// usando las funciones ya codificadas en las otras ramas
    //suma 7+8

    //resta 15-20

    //multiplica -5 * -100

    //divide el resultado de la multiplicacion entre 50
//