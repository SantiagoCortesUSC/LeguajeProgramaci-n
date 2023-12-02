// function cambiarContenido(contenido) {



// }

function cambiarContenido(contenido, boton) {


    var elementos = document.querySelectorAll('main div');
    for (var i = 0; i < elementos.length; i++) {
        elementos[i].style.display = 'none';
    }

    

    var contenidoElement = document.getElementById(contenido);
    if (contenidoElement) {
        contenidoElement.style.display = 'block';

        // Mostrar todos los elementos hijos de contenido
        var hijos = contenidoElement.getElementsByTagName('div');
        for (var j = 0; j < hijos.length; j++) {
            hijos[j].style.display = 'block';
        }
    }








    // Desactivar la clase 'activo' en todos los botones
    var botones = document.querySelectorAll('.navegacion button');
    botones.forEach(function(b) {
        b.classList.remove('active');
    });

    // Activar la clase 'activo' solo en el botón seleccionado
    boton.classList.add('active');

    // Aquí puedes agregar el código para cambiar el contenido según la variable 'contenido'
    // Por ejemplo, console.log("Contenido cambiado a " + contenido);
}
