// Importar la función sum del archivo app.js
const { sum } = require('./app.js');

// Comienza tu primera prueba
test('adds 14 + 9 to equal 23', () => {
    // Dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);

    // Esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});

test("One euro should be 1.07 dollars", function() {
    // Importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js');

    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 3.5 * 1.07;

    // Hago mi comparación (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})

test("One euro should be 156.5 JPY", function() {
    // Importo la funcion desde app.js
    const { fromEuroToJPY } = require('./app.js');

    // Uso la función como debe ser usada
    const JPY = fromEuroToJPY(3.5);

    // Si 1 euro son 156.5 yenes, entonces 3.5 euros debe ser (3.5 * 156.5)
    const expected = 3.5 * 156.5;

    // Hago mi comparación (la prueba)
    expect(fromEuroToJPY(3.5)).toBe(547.75); // 1 euro son 156.5 yenes, entonces 3.5 euros deberían ser = (3.5 * 156.5)
})

test("One euro should be 0.87 GBP", function() {
    // Importo la funcion desde app.js
    const { fromEuroToGBP } = require('./app.js');

    // Uso la función como debe ser usada
    const GBP = fromEuroToGBP(3.5);

    // Si 1 euro son 0.87 LIBRAS, entonces 3.5 euros debe ser (3.5 * 0.87)
    const expected = 3.5 * 0.87;

    // Hago mi comparación (la prueba)
    expect(fromEuroToGBP(3.5)).toBe(3.045); // 1 euro son 0.87 LIBRAS, entonces 3.5 euros deberían ser = (3.5 * 0.87)
})

test("One Dollar should be 142.86 JPY", function() {
    // Importo la funcion desde app.js
    const { fromDollarToJPY } = require('./app.js');

    // Uso la función como debe ser usada
    const JPY = fromDollarToJPY(3.5);

    // Si 1 dolar son 142,86 yenes, entonces 3.5 dolares debe ser (3.5 * 142,8)
    const expected = 3.5 * 142.8;

    // Hago mi comparación (la prueba)
    expect(fromDollarToJPY(3.5)).toBe(499.80000000000007); // 1 dolar son 142,8 yenes, entonces 3.5 dolares deberían ser = (3.5 * 142,8)
})

test("One JPY should be 0,0052 GBP", function() {
    // Importo la funcion desde app.js
    const { fromJPYToGBP } = require('./app.js');

    // Uso la función como debe ser usada
    const GBP = fromJPYToGBP(3.5);

    // Si 1 JPY son 0,0052 GBP, entonces 3.5 JPY debe ser (3.5 * 0,0052)
    const expected = 3.5 * 0.0052;

    // Hago mi comparación (la prueba)
    expect(fromJPYToGBP(3.5)).toBe(0.0182); // 1 JPY son 0,0052, entonces 3.5 JPY deberían ser = (3.5 * 0,0052)
})