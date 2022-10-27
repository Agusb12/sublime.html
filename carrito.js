const stockProductos = [
    {id:1,producto:"remera",talle:"S",precio:3500,imagen:"./assets/09234_416X1.webp"},
    {id:2,proucto:"remera",talle:"M",precio:3500,imagen:"./assets/09234_416X1.webp"},
    {id:3,producto:"pantalon",talle:"M",precio:5500,imagen:"./assets/JOGGERLACEYBLACK_2_600x.webp"},
    {id:4,producto:"pantalon",talle:"S",precio:5500,imagen:"./assets/JOGGERLACEYBLACK_2_600x.webp"},
    {id:5,producto:"buzo",talle:"S",precio:32500,imagen:"./assets/buzos-4.jpg"},
    {id:6,producto:"buzo",talle:"M",precio:3250,imagen:"./assets/buzos-4.jpg"}
    ]
    const contenedorProductos = document.getElementById("contenedor-productos")
    let carrito = []
    stockProductos.forEach( (producto)=>{
        const contenido = document.createElement("div")
        contenido.classList.add("div-elementos")
        contenido.innerHTML = `
        <img src="${producto.imagen}" alt=""
        <p>Precio:${producto.precio}</p>
        <p>Talle:${producto.talle}</p>
        <button id="agregar${producto.id}"class="btn-agregar">Agregar al carrito<iconify-icon class="basura-cart" icon="fa:cart-plus"></iconify-icon></button>
       `
       contenedorProductos.appendChild(contenido)
       const agregado = document.getElementById(`agregar${producto.id}`)
       
       agregado.addEventListener("click", ()=>{
        agregarCarrito(producto.id)
       })
    })
    
    const agregarCarrito = (prodId)=>{
        const item = stockProductos.find((prod) => prod.id === prodId)
        carrito.push(item)
        console.log(carrito)
        
    }


    
    
    

