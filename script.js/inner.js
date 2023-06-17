
/* llamamos al header mediante id "header" */
var headerElement = document.getElementById("header");
headerElement.innerHTML = '<header id="header" class="headerbienvenida">'+
    '<a href="index.html" class="linkheader">'+
    '  <div class="bienvenida">'+
    '    <h1>'+
    '      <span class="resaltado">Bienvenidos a Huerta Zuculenta</span>'+
    '    </h1>'+
    '  </div>'+
    '</a>'+
    '</header>';

/* llamamos al navbar mediante id "navbar1" */
var navbarElement = document.getElementById("navbar1");
navbarElement.innerHTML = '<section id="navbar1" class="barranav">'+
    '<nav class="navbar navbar-expand-lg ">'+
    '  <div class="container-fluid">'+
    '    <a class="navbar-brand" href="/index.html">Inicio</a>'+
    '    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">'+
    '      <span class="navbar-toggler-icon"></span>'+
    '    </button>'+
    '    <div class="collapse navbar-collapse" id="navbarSupportedContent">'+
    '      <ul class="navbar-nav me-auto mb-2 mb-lg-0">'+
    '        <li class="nav-item">'+
    '          <a class="nav-link active" aria-current="page" href="../pages/quienessomos.html">¿Quienes somos?</a>'+
    '        </li>'+
    '        <li class="nav-item">'+
    '          <a class="nav-link active" href="../pages/tienda.html">Tienda</a>'+
    '        </li>'+
    '          <li class="nav-item">'+
    '          <a class="nav-link active" href="../pages/contacto.html">Contacto</a>'+
    '          </li>'+
    '      </ul>'+
    '      <div class="d-flex search-form">'+
    '        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">'+
    '        <button class="btn btn-outline-success" type="submit">'+
    '          <i class="fas fa-search"></i>'+
    '        </button>'+
    '      </div>'+
    '    </div>'+
    '  </div>'+
    '</nav>'+
    '</section>';


/* llamamos al footer mediante id "footer"*/
var element = document.getElementById("footer");
element.innerHTML = '<section id="footer">'+
  '<footer>'+
  '<div class="container__footer">'+
  '    <div class="box__footer">'+
  '        <div class="logo">'+
  '            <a href="https://www.instagram.com/huerta_zuculenta/" target="_blank"><img src="../media/CartelRedes.jpg" alt="cartelredes"></a>'+
  '        </div>'+
  '        <div class="pfooter">'+
  '          <h4>¿Por que tener una huerta?</h4>'+
  '          <p>El acto de sembrar, observar el crecimiento de las plantas y participar en el ciclo de la vida puede ayudar a reducir el estrés, fomentar la atención plena y brindar una sensación de paz y calma. </p>'+
  '        </div>'+
  '    </div>'+
  '    <div class="box__footer">'+
  '        <h2>Secciones</h2>'+
  '        <a href="/index.html">Inicio</a>'+
  '        <a href="../pages/quienessomos.html">¿Quienes somos?</a>'+
  '        <a href="../pages/tienda.html">Tienda</a>'+
  '        <a href="../pages/contacto.html">Contacto</a>'+
  '    </div>'+
  '    <div class="box__footer">'+
  '        <h2>Redes Sociales</h2>'+
  '        <a href="https://web.whatsapp.com/" target="_blank"> <i class="fab fa-whatsapp-square"></i> Whatsapp</a>'+
  '        <a href="https://www.facebook.com/" target="_blank"> <i class="fab fa-facebook-square"></i> Facebook</a>'+
  '        <a href="https://twitter.com/" target="_blank"><i class="fab fa-twitter-square"></i> Twitter</a>'+
  '        <a href="https://www.instagram.com/huerta_zuculenta/" target="_blank"><i class="fab fa-instagram-square"></i> Instagram</a>'+
  '    </div>'+
  '</div>'+
  '<div class="box__copyright">'+
  '    <hr>'+
  '    <p>Trabajo final BA Multiplica 2.0  © 2023 <b>Zulma Marcos</b></p>'+
  '</div>'+
  '</footer>';
  
  


  