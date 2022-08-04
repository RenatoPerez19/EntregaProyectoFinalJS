let productos = [
    {id: 102, nombre: "Zapatilla nike", precio:20000 },
    {id: 103, nombre: "Zapatilla nike", precio: 20000},
    {id: 104, nombre: "buzo drew", precio: 10000},
    {id: 105, nombre: "Zapatillas lacoste", precio:25500 },
    {id: 106, nombre: "Zapatilla nike", precio: 25500},
    {id: 107, nombre: "Zapatilla nike", precio: 20000},
    {id: 108, nombre: "zapatillas lacoste", precio: 25500},
    {id: 109, nombre: "zapatillas lacoste", precio: 20500},
    {id: 110, nombre: "campera nautica azul", precio: 30000},
];

let aux = localStorage.getItem("productosEnCarro");

let productosEnCarro;

if (!aux) {
    productosEnCarro = [];
}else {
    productosEnCarro = JSON.parse(aux);
    listadoProductosEnCarro();
}



function listadoProductos() {
    let aux = '';
    for (let i = 0; i < productos.length; i++) {
        aux = aux +  `<div onclick= "meterAlCarro({id: ${productos[i].id}, nombre: '${productos[i].nombre}', precio: ${productos[i].precio}})" style="cursor: pointer;border: 1px solid black; ">
                    <h3>${productos[i].nombre}</h3>
                    <p>${productos[i].precio}</p>
                    <p> id: ${productos[i].id}</p>
                    </div> `;
    }
    document.getElementById('div-productos').innerHTML = aux;
}



listadoProductos();

//-----CARRO-----//

function meterAlCarro (objetoProducto){
    productosEnCarro.push(objetoProducto);

    localStorage.setItem("productosEnCarro", JSON.stringify(productosEnCarro));
    listadoProductosEnCarro();

    Swal.fire({
        title: "Excelente",
        text: "Agregado al Carrito",
        icon: "success",
        timer: 800,
        width: 400,
      });
}

function BorrarDelCarro (id) {
    productosEnCarro.splice(id, 1);

    localStorage.setItem("productosEnCarro", JSON.stringify(productosEnCarro));
    listadoProductosEnCarro();
}


function listadoProductosEnCarro() {
    let aux = '';
    for (let i = 0; i < productosEnCarro.length; i++) {
        aux = aux + `<div style ="border: 1px solid green;">
                        <h3>${productosEnCarro[i].nombre}</h3>
                        <p>${productosEnCarro[i].precio}</p>
                        <p> id: ${productosEnCarro[i].id}</p>
                        <p onclick= "BorrarDelCarro(${i})" style = "cursor: pointer;"><button>BORRAR DEL CARRO</button></p>
                    </div> `;
    }
    document.getElementById('div-carrito').innerHTML = aux;
}

//-----TERMINA CARRO---///


