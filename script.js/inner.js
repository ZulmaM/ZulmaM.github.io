/* llamamos al header mediante id "header"*/
var element = document.getElementById("header");
element.innerHTML = '<header id="header" class="headerbienvenida">' +
  '<br><br><br>' +
  '<div class="bienvenida">' +
  '<h1>Bienvenidos a Huerta Zuculenta</h1>' +
  '</div>' +
  '</header>';

  /* llamamos la barra de navegacion mediante id "barra"*/
  var element = document.getElementById("barra");
  element.innerHTML = '<section id="barra">' +
    '<nav class="navbar navbar-light bg-light">' +
    '<div class="container-fluid">' +
    '<ul class="nav nav-pills">' +
    '<li class="nav-item">' +
    '<a class="nav-link" href="quienessomos.html">¿Quienes somos?</a>' +
    '</li>' +
    '<li class="nav-item">' +
    '<a class="nav-link" href="huerta.html">Huerta</a>' +
    '</li>' +
    '<li class="nav-item">' +
    '<a class="nav-link" href="tienda.html">Tienda</a>' +
    '</li>'+
    '<li class="nav-item">'+
    '<a class="nav-link" href="#scrollpycontacto.html">Contacto</a>' +
    '</li>'+
    '</ul>'+
    '</div>'+
    '</nav>'+
    '</section>';
  


