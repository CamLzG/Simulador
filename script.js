//Simulador de entradas concierto

const precioMayores = 1200
const precioMenores = 600
const cantidadMaxima = 4

alert("Bienvenido al simulador de entradas para el concierto de Bad Bunny en Uruguay.")

do {
    let cantidadEntradas = 0;
    let entradasMenores = 0;

    do {
        cantidadEntradas = Number(prompt("El precio para mayores es " + precioMayores + ". Y el precio para menores es " + precioMenores + " \n Ingresa la cantidad de entradas que deseas (Máximo " + cantidadMaxima +")"))
        if (isNaN(cantidadEntradas)) {
            alert("Debes ingresar un número")
        }else if (cantidadEntradas > cantidadMaxima) {
            alert("Solo se permiten " + cantidadMaxima + " entradas por persona")
        }
        
    } while (isNaN(cantidadEntradas) || cantidadEntradas > cantidadMaxima || cantidadEntradas < 1);

    if (cantidadEntradas > 1) {
        do {
            entradasMenores = Number(prompt("¿Cuantas entradas son para menores?"))
            if (isNaN(entradasMenores)) {
                alert("Debes ingresar un número")
            }else if (entradasMenores > (cantidadEntradas - 1)) {
                alert("Los menores deben ir acompañados de por lo menos 1 adulto.")
            }
        } while (isNaN(entradasMenores) || entradasMenores > (cantidadEntradas - 1));    
    } 
    
    let totalMayores = (cantidadEntradas - entradasMenores) * precioMayores
    let totalMenores = entradasMenores * precioMenores
    let costoTotal = totalMayores + totalMenores

    console.log(costoTotal)
    alert("El total sería " + costoTotal + " pesos uruguayos")

} while (prompt("¿Quieres realizar otra simulación? \n - Si \n - No").toLowerCase() == "si");

