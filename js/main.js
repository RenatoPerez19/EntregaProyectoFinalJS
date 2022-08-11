function clickEnProductos(id){
    alert ("se selecciono el producto " + id)
}

fetch("/data.json")
.then((resinicial)=>resinicial.json())
.then((res)=>{

    const miArray= res;
    
    let htmlAux=``;
    for(let i=0; i<miArray.length; i++){
        htmlAux= htmlAux+ 
                            `<div onclick="clickEnProductos (${miArray[i].id})">
                            <strong>${miArray[i].name}</strong>
                            <p style="color:green">${miArray[i].precio}</p>
                            <img src="../img/zapatilla.jpg" alt="zapatilla">
                            
                            </div>
                            <br/>`
    }
    document.getElementById("listadoDePrecios").innerHTML= htmlAux;
})
.catch((e)=>{
    console.log(e)
})



//listadoProductos();

//-----CARRO-----//

/*function meterAlCarro (objetoProducto){
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
                        <h3>${productosEnCarro[i].name}</h3>
                        <p>${productosEnCarro[i].precio}</p>
                        <p> id: ${productosEnCarro[i].id}</p>
                        <p onclick= "BorrarDelCarro(${i})" style = "cursor: pointer;"><button>BORRAR DEL CARRO</button></p>
                    </div> `;
    }
    document.getElementById('div-carrito').innerHTML = aux;
}

//-----TERMINA CARRO---///
*/

