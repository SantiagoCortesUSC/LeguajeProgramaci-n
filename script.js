function cambiarContenido(contenido) {
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
    // document.getElementById(contenido).style.display = 'block';
}


