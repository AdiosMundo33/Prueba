// Selecciona el elemento del DOM con el ID 'changeColor' (un botón en este caso).
document.getElementById('changeColor').addEventListener('click', function() {
    // Cuando se hace clic en el botón, esta función se ejecuta.
    
    // Genera un número aleatorio entre 0 y 16777215 (decimal).
    // 16777215 es el valor decimal de 'FFFFFF' en hexadecimal, que representa el color blanco.
    var randomColor = Math.floor(Math.random() * 16777215).toString(16);
    
    // Establece el color de fondo del cuerpo de la página.
    // Convierte el número aleatorio en una cadena base hexadecimal.
    // El '#' es necesario para especificar que se trata de un color en formato hexadecimal.
    document.body.style.backgroundColor = '#' + randomColor;
});

