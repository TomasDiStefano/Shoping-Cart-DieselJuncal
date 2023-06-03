
let producto;
let cantidadCuotas;
let precioTotal = 0;
let totalEnCuotas = 0;
let cuotaActual = 0;

ingresarProducto();

function ingresarProducto(){
    producto = prompt('Ingrese el producto que desee adquirir (1: Inyector, 2: Bomba, 3: Sensor)');
    selectorCuotas();
}

function selectorCuotas () {
    switch (producto) {
        case '1':
            cantidadCuotas = prompt('El precio de su inyector en 1 pago es de $125.354, eliga la cantidad de cuotas: ');
            precioTotal = 125354; 
            calcularPago()
            break;
        case '2':
            cantidadCuotas = prompt('El precio de su bomba en 1 pago es de $540.350, eliga la cantidad de cuotas: ');
            precioTotal = 540350;
            calcularPago()
            break
        case '3':
            cantidadCuotas = prompt('El precio de su Sensor en 1 pago es de $35.690, eliga la cantidad de cuotas: ');
            precioTotal = 35690;
            calcularPago()
            break;
        default:
            ingresarProducto();
            break;
    }
} 

function calcularPago(){
    //Calculo el valor de la cuota sin intereses
    cuotaActual = precioTotal/cantidadCuotas;
    //En cada cuota se hará un recargo del 5% respecto de la cuota anterior.
    for(let i=0;i<cantidadCuotas;i++){
        cuotaActual *= 1.05;
        console.log('La cuota ', i+1, 'será de:', cuotaActual.toFixed(2));
        totalEnCuotas += cuotaActual;
    }
    console.log('El total a abonar en cuotas será de: ', totalEnCuotas.toFixed(2), 'en 1 cuota sería de:', precioTotal.toFixed(2));
    console.log('Realizando el pago en 1 cuota se ahorraría:', (totalEnCuotas - precioTotal).toFixed(2))
}
