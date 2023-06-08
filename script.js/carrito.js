// Variables
const carrito = [];
const items = document.getElementById('items');
const carritoElemento = document.getElementById('carrito');
const total = document.getElementById('total');
const totalCarritoElemento = document.getElementById('total-carrito');
const botonVaciar = document.getElementById('boton-vaciar');

// Función para agregar un producto al carrito
function agregarProducto(evento) {
  const boton = evento.target;
  const item = boton.closest('.card');
  const itemId = item.querySelector('.agregar-carrito').dataset.id;
  const itemNombre = item.querySelector('.card-title').textContent;
  const itemPrecio = item.querySelector('.agregar-carrito').dataset.precio;

  const producto = {
    id: itemId,
    nombre: itemNombre,
    precio: itemPrecio
  };

  carrito.push(producto);
  calcularTotal();
  actualizarCarritoHTML();
}

// Función para calcular el total del carrito
function calcularTotal() {
  let totalCarrito = 0;
  for (let i = 0; i < carrito.length; i++) {
    totalCarrito += parseFloat(carrito[i].precio);
  }
  total.textContent = totalCarrito.toFixed(2);
  totalCarritoElemento.textContent = "(" + carrito.length + ")";
}

// Función para actualizar el carrito en el HTML
function actualizarCarritoHTML() {
  carritoElemento.innerHTML = '';
  for (let i = 0; i < carrito.length; i++) {
    const productoElemento = document.createElement('li');
    productoElemento.classList.add('list-group-item');
    productoElemento.textContent = `${carrito[i].nombre} - $${carrito[i].precio}`;
    carritoElemento.appendChild(productoElemento);
  }
}

// Función para vaciar el carrito
function vaciarCarrito() {
  carrito.splice(0, carrito.length);
  actualizarCarritoHTML();
  calcularTotal();
}

// Evento para agregar producto al hacer clic en el botón "Agregar al carrito"
items.addEventListener('click', function(evento) {
  if (evento.target.classList.contains('agregar-carrito')) {
    agregarProducto(evento);
  }
});

// Evento para vaciar el carrito al hacer clic en el botón "Vaciar"
botonVaciar.addEventListener('click', vaciarCarrito);

// Llamar a la función para actualizar el carrito inicialmente
calcularTotal();
actualizarCarritoHTML();

