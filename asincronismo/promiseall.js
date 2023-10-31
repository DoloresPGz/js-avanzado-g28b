//Paso 1: Realizar nuestro proceso asíncrono
function prepararPizza(especialidad, tiempo){
    return new Promise((res, rej) => {
        setTimeout(() => {
            if(tiempo < 3000)
                res(`Pizza preparada: ${especialidad}`)
            else
                rej("La pizza se quemó")
        }, tiempo);
    })
}

//Paso 2: Crear un arreglo de las promesas que se van a ejecutar en paralelo
const ordenPizzas = [
    prepararPizza('Peperoni', 1500),
    prepararPizza('Ranchera', 2000),
    prepararPizza('Hawaiana', 2500),
    prepararPizza('Napolitana', 1800)
]

//Paso 3: Ejecutar nuestro arreglo de promesas
/*Promise.all(ordenPizzas)
    .then(
        pizzas => {
            //console.log(pizzas); //Imprimo el arreglo de respuestas
            pizzas.forEach( pizza => console.log(pizza) )
        }
    )
    .catch(
        err => console.log(err)
    )*/

async function mandarOrdenPizzas(){
    try {
        const pizzasPreparadas = await Promise.all(ordenPizzas) // espera a que se ejecute el proceso asíncrono
        pizzasPreparadas.forEach(pizza  => console.log(pizza))
    } catch (error) {
        console.log(error);
    }
}

mandarOrdenPizzas()