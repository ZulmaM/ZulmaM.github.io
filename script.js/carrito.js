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

// Función para eliminar un producto del carrito
function eliminarProducto(evento) {
  const botonEliminar = evento.target;
  const itemId = botonEliminar.dataset.id;

  // Buscar el índice del producto en el carrito
  const indice = carrito.findIndex(producto => producto.id === itemId);

  // Si se encuentra el producto, eliminarlo del carrito
  if (indice !== -1) {
    carrito.splice(indice, 1);
    calcularTotal();
    actualizarCarritoHTML();
  }
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

    const botonEliminar = document.createElement('button');
    botonEliminar.classList.add('btn', 'btn-danger', 'btn-sm', 'float-right', 'delete-button');
    botonEliminar.dataset.id = carrito[i].id;
    botonEliminar.innerHTML = '<i class="fas fa-trash"></i>';
    botonEliminar.addEventListener('click', eliminarProducto);

    productoElemento.appendChild(botonEliminar);
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

// Agregar evento de clic al botón de vaciar carrito
botonVaciar.addEventListener('click', vaciarCarrito);

// Esperar a que se cargue el contenido HTML completamente
document.addEventListener('DOMContentLoaded', function() {
  // Obtener el botón de eliminar
  var deleteButtons = document.querySelectorAll('.delete-button');

  // Agregar un evento de clic a cada botón de eliminar
  deleteButtons.forEach(function(button) {
    button.addEventListener('click', eliminarProducto);
  });
});

