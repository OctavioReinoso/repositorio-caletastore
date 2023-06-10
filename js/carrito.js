let prodAggCarrito = localStorage.getItem('carrito');
prodAggCarrito = JSON.parse(prodAggCarrito);

const carritoVacioP = document.querySelector('#txt-carrito-vacio');
const carritoProductos = document.querySelector('#carrito-prod');
const carritoAcciones = document.querySelector('#carrito-acciones');
const btnComprar = document.querySelector('#btn-comprar');
const carritoCompraP = document.querySelector('#txt-compra');
let btnEliminar = document.querySelectorAll('.carrito-producto-eliminar');
const btnVaciar = document.querySelector('#btn-vaciar');
const totalPrecio = document.querySelector('#total');


if (prodAggCarrito.length === 0) {
    const conteo = function () {
        setTimeout(function () {
            Swal.fire({
                title: '¿Encontraste lo que buscabas?'
            });
        }, 15000);
    };
    conteo();
};

function traerProductosEnCarrito() {
    if (prodAggCarrito && prodAggCarrito.length > 0) {
        carritoVacioP.classList.add("disabled");
        carritoProductos.classList.remove("disabled");
        carritoAcciones.classList.remove("disabled");
        // carritoCompraP.classList.remove('disabled')

        carritoProductos.innerHTML = "";


        prodAggCarrito.forEach((producto) => {
            const divProdCarrito = document.createElement('div');
            divProdCarrito.classList.add('carrito-producto');
            divProdCarrito.innerHTML = `
            <img src="${producto.img}" alt="${producto.titulo}" class="img-carrito">
            <div class="titulo-carrito">
                <h3 class="tit-prod-carrito">Prenda</h3>
                <p class="subt-prod-carrito">${producto.titulo}</p>
            </div>
            <div class="carrito-producto-cantidad">
                <h3 class="tit-prod-carrito">Cantidad</h3>
                <p class="subt-prod-carrito">${producto.cantidad}</p>
            </div>
            <div class="carrito-producto-precio">
                <h3 class="tit-prod-carrito">Precio</h3>
                <p class="subt-prod-carrito">${producto.precio}</p>
            </div>
            <div class="carrito-producto-eliminar">
                <h3 class="tit-prod-carrito">Subtotal</h3>
                <p class="subt-prod-carrito">${producto.precio * producto.cantidad}</p>
            </div>
            <button class="carrito-producto-eliminar" id="${producto.id}"><i class='bx bx-trash'></i></button>
            `;
            carritoProductos.append(divProdCarrito);
        });
        precioTotal();
        btnComprar.addEventListener('click', msjBtnComprar);

    } else {
        carritoVacioP.classList.remove("disabled");
        carritoProductos.classList.add("disabled");
        carritoAcciones.classList.add("disabled");
    }
    actualizarBotonEliminar();

}

traerProductosEnCarrito();


function actualizarBotonEliminar() {
    btnEliminar = document.querySelectorAll('.carrito-producto-eliminar');
    btnEliminar.forEach((boton) => {
        boton.addEventListener('click', eliminarProducto);
    })
}


function eliminarProducto(e) {
    const idBtn = e.currentTarget.id;
    const itemBorrado = prodAggCarrito.findIndex(item => item.id === idBtn);
    const prodB = prodAggCarrito[itemBorrado];

    if (prodB.cantidad > 1) {
        prodB.cantidad -= 1;
    } else {
        prodAggCarrito.splice(itemBorrado, 1);
    }


    traerProductosEnCarrito();

    localStorage.setItem('carrito', JSON.stringify(prodAggCarrito));

}

btnVaciar.addEventListener('click', variarCarrito);

function variarCarrito() {
    prodAggCarrito.length = 0;
    localStorage.setItem('carrito', JSON.stringify(prodAggCarrito));
    traerProductosEnCarrito();

}

function msjBtnComprar() {
    btnComprar.onclick = () => {
        Swal.fire(
            {
                title: '¿Está seguro que desea realizar la compra?',
                showDenyButton: true,
                showCancelButton: true,
                confirmButtonText: 'Comprar',
                denyButtonText: 'Cancelar'
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire('Compra exitosa', '', 'success')
                    variarCarrito();
                } else if (result.isDnied) {
                    Swal.fire('Compra cancelada', '', 'info')
                }
            })
    }
}

function precioTotal() {
    let calcularPrecioTotal = prodAggCarrito.reduce((acc, total) => acc + total.precio * total.cantidad, 0);
    totalPrecio.innerText = `TOTAL: $${calcularPrecioTotal}`;
}