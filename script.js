function cambiarContenido(contenido) {
    var elementos = document.querySelectorAll('main div');
    for (var i = 0; i < elementos.length; i++) {
        elementos[i].style.display = 'none';
    }
    document.getElementById(contenido).style.display = 'block';
}
