

const precio1 = 100;
const precio2 = 10;
const descuento = 50;
let suma = precio1 + precio2;

function aplicarDescuento(precio, descuento){
    const subTotal= precio * (descuento/100);
    const total= precio - subTotal;
    return total;
}

function seleccionar(){
    let opcion= "";
    while (opcion !=="1" && opcion !== "2"  && opcion !== "1 2" && opcion.toUpperCase() !== "SALIR"){
        opcion = prompt("Selecciona un producto (PUEDES SELECCIONAR AMBOS ESCRIBIENDO LAS DOS OPCIONES SEPARADAS POR UN ESPACIO):\n1.Teclado\n2.Mouse\nEscriba salir para finalizar");
    }

    while (opcion.toUpperCase()!== "SALIR"){
        switch (opcion){
            case "1":
                const precioDescuento1 =  aplicarDescuento(precio1, descuento)
                alert ("Haz seleccionado el Teclado y tiene un costo con DESCUENTO de USD " + precioDescuento1);
                break;

            case "2":
                const precioDescuento2 =  aplicarDescuento(precio2, descuento)
                alert("Haz seleccionado el Mouse tiene un costo con DESCUENTO de USD " + precioDescuento2);
                break;

            case "1 2":
                const precioDescuento3 =  aplicarDescuento(suma, descuento)
                    alert("Haz seleccionado Teclado y Mouse tiene un costo con DESCUENTO de USD " +  precioDescuento3);
                    break;

                default:
                alert ("Opcion Invalida");
                break;
        }
        opcion = "";
        while (opcion !=="1" && opcion !== "2"  && opcion !== "1 2" && opcion.toUpperCase() !== "SALIR"){
            opcion = prompt("Selecciona un producto (PUEDES SELECCIONAR AMBOS ESCRIBIENDO LAS DOS OPCIONES SEPARADAS POR UN ESPACIO):\n1.Teclado\n2.Mouse\nEscriba salir para finalizar");
        }
    }

    alert ("saliendo del menu");
}

seleccionar();
