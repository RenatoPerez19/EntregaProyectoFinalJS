const contenedorProductos = document.getElementById('contenedor-productos')
const contenedorCarrito= document.getElementById('carrito-contenedor')
const botonVaciar= document.getElementById("vaciar-carrito")
const contadorCarrito= document.getElementById("contadorCarrito")
const precioTotal= document.getElementById("precioTotal")
let carrito = []







botonVaciar.addEventListener("click",()=>{
    carrito.length=0
    actualizarCarrito ()
})

stockProductos.forEach((producto) =>{
    const div = document.createElement('div')
    div.classList.add("producto1")
    div.innerHTML=`
    <img src=${producto.img} alt="">
    <h3>${producto.nombre}</h3>
    <p>talle:${producto.talle}</p>
    <p class="precioProducto">Precio:${producto.precio}</p>
    <button id="agregar${producto.id}" class="boton-agregar">Agregar<i class="fas fa-shopping-cart"></i></button>

    `

    contenedorProductos.appendChild(div)

    const boton= document.getElementById(`agregar${producto.id}`)

    boton.addEventListener('click',()=>{
        agregarAlCarrito(producto.id)
    })

})


const agregarAlCarrito= (prodId)=>{
    const item= stockProductos.find((prod)=>prod.id=== prodId)
    carrito.push(item)
    actualizarCarrito()

    console.log(carrito)
}

const eliminarDelCarrito= (prodId)=>{
    const item=carrito.find((prod)=>prod.id===prodId)
    const indice=carrito.indexOf(item)
    carrito.splice(indice,1)
    actualizarCarrito()
}



const actualizarCarrito = ()=>{
    contenedorCarrito.innerHTML=""

    carrito.forEach((prod)=>{
        const div= document.createElement(`div`)
        div.className=("productoEnCarrito")
        div.innerHTML =`
        <p>${prod.nombre}</p>
        <p>precio: ${prod.precio}</p>
        <p>cantidad : <span id="cantidad">${prod.cantidad}</span></p>
        <button onclick ="eliminarDelCarrito(${prod.id})" class="boton"><i class="fas fa-trash-alt"></i></button>
        `

        contenedorCarrito.appendChild(div)

    })

    contadorCarrito.innerText=carrito.length

    precioTotal.innerText = carrito.reduce((acc,prod)=> acc+ prod.precio, 0)


}