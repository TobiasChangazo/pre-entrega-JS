let Menu;
let Total = 0;

function Sumar_Total(Precio) {
    return Total += Precio;
}

do {
    Menu = parseInt(prompt("Ingrese lo que va a llevar:  \n\n1. Pizza - $5500\n2. Empanada - $700\n3. Sanguche - $3400\n4. Tarta - $6500\n\n5. Ir a la caja.\n6. Salir del Menu"));

    switch (Menu) {
        case 1:
            Total += 5500;
            alert("Perfecto, acérquese a la caja para pagar.");
            break;
        case 2:
            Total += 700;
            alert("Perfecto, acérquese a la caja para pagar.");
            break;
        case 3:
            Total += 3400;
            alert("Perfecto, acérquese a la caja para pagar.");
            break;
        case 4:
            Total += 6500;
            alert("Perfecto, acérquese a la caja para pagar.");
            break;
        case 5:
            alert("Dirigiendose a la caja.");
            break;
        case 6:
            alert("Saliendo del Menu.");
            break;
    }
} while((Menu !== 5 && Menu !== 6 ));

if (Total > 0) {
    alert("El total a pagar es: $" + Total);
}
