let productos = [];

const producto01 = (new Producto("remera01", "../img/rem1.jpg", "Remera Verde", "Remera", 6499, 1));
const producto02 = (new Producto("remera02", "../img/rem2.jpg", "Remera azul", "Remera", 7500, 1));
const producto03 = (new Producto("remera03", "../img/rem3.jpg", "Remera bordo", "Remera", 7500, 1));
const producto04 = (new Producto("remera04", "../img/rem4.jpg", "Remera blanca", "Remera", 6499, 1));
const producto05 = (new Producto("zapatillas01", "../img/zapas1.jpg", "Jordan(black)", "Zapatillas", 29999, 1));
const producto06 = (new Producto("zapatillas02", "../img/zapas3.jpg", "Air force(black)", "Zapatillas", 27000, 1));
const producto07 = (new Producto("zapatillas03", "../img/zapas4.jpg", "Nike(white)", "Zapatillas", 22000, 1));
const producto08 = (new Producto("zapatillas04", "../img/zap2.jpg", "Nike(lightblue)", "Zapatillas", 26000, 1));
const producto09 = (new Producto("pantalon01", "../img/pantalon1.jpg", "Pantalon cargo", "Pantalon", 7000, 1));
const producto10 = (new Producto("pantalon02", "../img/pantalon2.jpg", "Jean claro", "Pantalon", 7500, 1));
const producto11 = (new Producto("pantalon03", "../img/pant3.jpg", "Jean gris", "Pantalon", 8200, 1));
const producto12 = (new Producto("pantalon04", "../img/pantalon4.jpg", "Jean celeste", "Pantalon", 9000, 1));

productos.push(producto01, producto02, producto03, producto04, producto05, producto06, producto07, producto08, producto09, producto10, producto11, producto12);

// localStorage.setItem('productos', JSON.stringify(productos)); 
const prodAggCarritoLocalS = JSON.parse(localStorage.getItem('carrito'));

const containerProductos = document.getElementById('container-prod');
let botonesComprar = document.querySelectorAll('.btn_comprar');
const numCarrito = document.querySelector(".numCarrito");

function cargarProductos(){
    productos.forEach((producto) => {
        
        const divProd = document.createElement('div');
        divProd.classList.add('box_productos');
        divProd.innerHTML = `
        <img src="${producto.img}" alt="${producto.titulo}" class="img_prenda">
        <h2 class="tit_img">"${producto.titulo}"</h2>
        <p>${producto.precio}</p>
        <button id="${producto.id}" class="btn_comprar">Comprar</button>
        `
        containerProductos.append(divProd);
    });
    actualizarBotonesComprar();
    
}

cargarProductos();

function actualizarBotonesComprar(){
    botonesComprar = document.querySelectorAll('.btn_comprar');

    botonesComprar.forEach((boton) => {
        boton.addEventListener('click', agregarAlCarrito);
    })
}

function agregarAlCarrito(e){
    const idProd = e.currentTarget.id;
    const prodSeleccionado = productos.find(producto => producto.id === idProd);

    const itemExistente = carrito.find(item => item.id === idProd)
    if(itemExistente){
        prodSeleccionado.cantidad++;
    }else{
        carrito.push(prodSeleccionado);
    }
    
    actualizarNumCarrito();
    localStorage.setItem('carrito', JSON.stringify(carrito));
    
}

let carrito;

if(prodAggCarritoLocalS){
    carrito = prodAggCarritoLocalS;
    actualizarNumCarrito();
}else{
    carrito = [];
}

function actualizarNumCarrito(){
    let numerito = carrito.reduce((ac, producto)=> ac+producto.cantidad, 0);
    numCarrito.innerText = numerito;
}