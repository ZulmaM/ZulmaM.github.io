/* llamamos al header mediante id "header"*/
var element = document.getElementById("header");
element.innerHTML = '<header id="header" class="headerbienvenida">'+
  '<br><br><br>'+
  '<div class="bienvenida">'+
  '<h1>'+
  '<span class="resaltado">Bienvenidos a Huerta Zuculenta</span>'+
  '</h1>'+
  '</div>' +
  '</header>';

  /* llamamos la barra de navegacion mediante id "barra"*/
  var element = document.getElementById("barra");
  element.innerHTML = '<section id="barra" class="barranav">'+      
  '<nav class="navbar navbar-light bg-light">'+
  '<div class="d-flex justify-content-between align-items-center">'+
  '<div class="container-fluid">'+
  '<ul class="nav nav-pills">'+
  '<li class="nav-item">'+
  '<a class="nav-link" href="index.html">'+
  '<h6 class="titulosnav">Inicio</h6>'+
  '</a>'+
  '</li>'+
  '<li class="nav-item">'+
  '<a class="nav-link" href="quienessomos.html">'+
  '<h6 class="titulosnav">¿Quienes somos?</h6>'+
  '</a>'+
  '</li>'+
  '<li class="nav-item">'+
  '<a class="nav-link" href="huerta.html">'+
  '<h6 class="titulosnav">Huerta</h6>'+
  '</a>'+
  '</li>'+
  '<li class="nav-item">'+
  '<a class="nav-link" href="tienda.html">'+
  '<h6 class="titulosnav">Tienda</h6>'+
  '</a>'+
  '</li>'+
  '<li class="nav-item">'+
  '<a class="nav-link" href="#scrollpycontacto">'+
  '<h6 class="titulosnav">Contacto</h6>'+
  '</a>'+
  ' </li>'+
  '</ul>'+
  '</div>'+
  '<div class="icon-container">'+
  '<a class="nav-link" href="">'+
  '<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAAchJREFUWEftl4tNAzEQRCeVAJUAlQCVAJUQKgEqgU5ALzpLy8WfHQPihLB0SqT4vM+z4/Vmp42N3cZ49KeATiVdSzqXdCHpLTz3y3c7AbMKAfDUiQbco6Q7l2gGiCC3yUAoZUG5QGtlUIKge0mkkOdh+YSZ328kPSc3YJuaNAHFIMhlJVCBKvOAOvspoPewMEEIVhtAvSbnfnrfSRkninQwSBGp6I2oJkqm0uYARTNnzOrOP2zOAYqGbvknKoaaqMpATVQdDgco+gLvkIZf9RC7y5wyZ96RYo5CvLw+PbHO1OoQ76QN7Xqo7GZTlbpAYVauD1SpDbtCl0XclMXgrdv+xb2/4qJfARoe4ZkJM0AoQ01qpQuOUg74TFXomZRh5qsBSMtP6d4oo9D6qM9koqjWK6aHdUdArc6wdIQtuJNFydKClHnDTrIHVIPJXKq1kxg7zG5J6AHRzxTjTteVhY51uHbietWmrQUUex+7/DfyuPZitQNoAUV13DT1TB+vnWpr2wKKrerI+M6pW6t0dPHWgsV0ZRoxB2jdmhylbQSU6Z1doG5rWwOa6oUNKhuI+hP/e1l3UQKsu/53GjbBMp7yDzTSaHMKfQALPm4le7lCqAAAAABJRU5ErkJggg=="/>'+                 
  '</a>'+
  '<a class="nav-link" href="tienda.html">'+
  '<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAAd5JREFUWEftWNtRwzAQ3HQClQCVECoBKoFUAqkEOoFZxpdZnU46YytMmLG+Et/De3url3e4sLG7MDz4l4BeANwCuFrJ5ieAA4BXAPwdjoyhtwnMSixFOAE9LAFEVgjoHIOACKwaPYa+xPsZwJP8V5vm8EWojfGPUw627C5qXQuQD74WMNTShyRWGx/TZnqjTfWiNl/kT8oIkL6QPp7ePQAKneN9qlSpV935WC2UMR5wCEgTRi/UpFGVBEvQHJGAlaUqv2fIa6CqYBI6/SL2+CxjkB1g0dbWgkUPKO0xgJagrW09YZuPslyw1AMUseP1NcKHoj9NDA9I9RPpw4tyhE+XIf9C9pcBrMLbjH4Kl8DI3r0IWmdeL09RVDTtVUfRYjryWdGu1jrUYsKAkDFWbJtuBHCOD+OqlkcM+VWagWwHW3N0exCnONtE+1wfsmJT/teAwuV9Zc+6C2vG0AZoKUOk3bQTdbB3OhzesmwWKsBs4Rwiat3LMn1X64xbYIcDah3wehvw8JZluz1Z2wCZdv6kZf7Ex+1Ch90cbC+KhN3zuZG73ixRn/M+5sHzKsSN+DRalOtBPZvaS+3RBaL7sYFM2WF+6UtbcQRTMJOJcjSA2fmyjw2zE41y3ABlTH4Dwm+lJY0r+ikAAAAASUVORK5CYII="/>'+
  '</a>'+
  '</div>'+
  '</div>'+
  '</nav>'+
  '</section>';  
  
  var element = document.getElementById("footer");
  element.innerHTML = '<footer id="footer" class="footerclass">'+
  '<section id="scrollpycontacto">'+
  '<div class="container">'+
  '<div class="row align-items-start">'+
  '<div class="col">'+
  '<div class="contacto">'+
  '<h4 class="titcontacto">'+
  '<nav class="navbar navbar-light bg-light">'+
  '<div class="d-flex justify-content-between align-items-center">'+
  '<div class="container-fluid">'+
  '<ul class="nav nav-pills">'+
  '<li class="nav-item">'+
  '<a class="nav-link" href="index.html">'+
  '<h6 class="titulosnavfooter">Inicio</h6>'+
  '</a>'+
  '</li>'+
  '<li class="nav-item">'+
  '<a class="nav-link" href="quienessomos.html">'+
  '<h6 class="titulosnavfooter">¿Quienes somos?</h6>'+
  '</a>'+
  '</li>'+
  '<li class="nav-item">'+
  '<a class="nav-link" href="huerta.html">'+
  '<h6 class="titulosnavfooter">Huerta</h6>'+
  '</a>'+
  '</li>'+
  '<li class="nav-item">'+
  '<a class="nav-link" href="tienda.html">'+
  '<h6 class="titulosnavfooter">Tienda</h6>'+
  '</a>'+
  '</li>'+
  '</ul>'+
  '</div>'+
  '<div class="icon-containerfooter">'+
  '<li class="nav-item">'+
  '<a class="nav-link" href="#scrollpycontacto">'+
  '<a href="https://www.instagram.com/huerta_zuculenta/" target="_blank">'+
  '<img src="../assets/logotipo-de-instagram.png" alt="Cartel redes">'+
  '</a>'+
  '</a>'+
  '</li>'+
  '</div>'+
  '<div class="icon-containerfooter">'+
  '<li class="nav-item">'+
  '<a class="nav-link" href="#scrollpycontacto">'+
  '<a href="https://api.whatsapp.com/send?phone=1153749972" target="_blank">'+
  '<img src="../assets/whatsapp.png" alt="Cartel redes">'+
  '</a>'+
  '</a>'+
  '</li>'+
  '</div>'+
  '<div class="icon-containerfooter">'+
  '<li class="nav-item">'+
  '<a class="nav-link" href="#scrollpycontacto">'+
  '<a href="" target="_blank">'+
  '<img src="../assets/facebook.png" alt="Cartel redes">'+
  '</a>'+
  '</a>'+
  '</li>'+
  '</div>'+
  '<div class="icon-containerfooter">'+
  '<li class="nav-item">'+
  '<a class="nav-link" href="tienda.html">'+
  '<a href="tienda.html" target="_blank">'+
  '<img src="../assets/carretilla.png" alt="Cartel redes">'+
  '</a>'+
  '</a>'+
  '</li>'+
  '</div>'+
  '</div>'+
  '</nav>'+
  '</h4>'+
  '</div>'+
  '</div>'+
  '</div>'+
  '</div>'+
  '</section>'+
  '<div class="row align-items-center">'+
  '<div class="col">'+
  '<img class="imgfooter" src="../assets/1CartelRedes.jpg" alt="">'+
  '</div>'+
  '<div class="col">'+
  '<p class="parrafofooter">Derechos de autor© 2023. Todos los derechos reservados.</p>'+
  '<p class="parrafofooter">Propiedad de huerta zuculenta</p>'+
  '</div>'+
  '</div>'+
  '</footer>';
  