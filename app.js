let peliculas = require('./peliculas');

peliculas.forEach(pelicula => {
    console.log(`Título: ${pelicula.title}`);
    console.log(`Calificación: ${pelicula.rating}`);
    console.log(`Premios: ${pelicula.awards}`);
    console.log(`Duración: ${pelicula.length} minutos`);
    console.log(`Precio: $${pelicula.price}`);
    console.log(`Género: ${pelicula.genre}`);
    console.log('--------------------------');
});
