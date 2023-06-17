function validar_formulario(event) {
    event.preventDefault(); // Evita que el formulario se envíe
  
    var todo_correcto = true;
    var nombre = document.getElementById('nombre').value;
    var mail = document.getElementById('mail').value;
    var texto = document.getElementById('mensaje').value;
    var checkbox = document.getElementById('check');
  
    if (nombre.length < 2) {
      todo_correcto = false;
    }
  
    var expresion = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    if (!expresion.test(mail)) {
      todo_correcto = false;
    }
  
    if (texto === '') {
      alert("El textarea no puede estar vacío");
      todo_correcto = false;
    }
  
    if (!checkbox.checked) {
      todo_correcto = false;
    }
  
    if (todo_correcto) {
      // seccion notificación de agradecimiento
      alert('¡Gracias por contactarnos!');
      form.reset(); // Reinicia el formulario
    } else {
      alert('Algunos campos no están correctos, revisa los que te quedan');
    }
  }
  
  var form = document.querySelector('form');
  form.addEventListener('submit', validar_formulario);
  