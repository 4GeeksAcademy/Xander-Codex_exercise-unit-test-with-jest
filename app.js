// Declaramos una función con el nombre exacto "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}

const fromEuroToJPY = function(valueInEuro) {
    // Convertimos el valor a YENES
    let valueInJPY = valueInEuro * 156.5;
    // Retornamos el valor en YENES
    return valueInJPY;
}

const fromEuroToGBP = function(valueInEuro) {
    // Convertimos el valor a LIBRAS
    let valueInGBP = valueInEuro * 0.87;
    // Retornamos el valor en LIBRAS
    return valueInGBP;
}

const fromDollarToJPY = function(valueInDollar
) {
    // Convertimos el valor a YENES
    let valueInJPY = valueInDollar * 142.8;
    // Retornamos el valor en YENES
    return valueInJPY;
}

const fromJPYToGBP = function(valueInJPY) {
    // Convertimos el valor a LIBRAS
    let valueInGBP = valueInJPY * 0.0052;
    // Retornamos el valor en LIBRAS
    return valueInGBP;
}

const sum = (a,b) => {
    return a + b
}

console.log(sum(7,3))

module.exports = { sum, fromEuroToDollar, fromEuroToJPY, fromEuroToGBP, fromDollarToJPY, fromJPYToGBP}