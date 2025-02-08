# Descripción

En esta entrega, no tienes que programar para mostrar un resultado en pantalla, sino que debes superar una serie de tests.

¿Cómo se hace esto? Te lo explicamos en el Anexo I, al final de los ejercicios.

**Importante**

URL del repositorio de la tarea:

-> github.com/IT-Academy-BCN

## Nivel 1

- **Ejercicio 1**  
  Debes mostrar en pantalla al usuario/a solo los directores de las películas.

Para obtener el array de directores/as, debes crear la función `getAllDirectors()`.

No debes hacer el renderizado del resultado en esta función, debe devolver el array de directores. El objetivo es mantener cada función con una única responsabilidad.

**Ayuda**  
Deberás implementar un bucle `.map` que recorra todo el array de películas, extrayendo solo el campo `director` de cada una (no olvides que cada película es un objeto que contiene el campo que nos interesa: “director”).

- **Ejercicio 2**  
  Otra funcionalidad necesaria es mostrar las películas de un determinado director/a.  
  Para esto, deberás crear una función `getMoviesFromDirector()`.

Esta función debe recibir como parámetro el/la director/a para el que se quieren buscar sus películas, y devuelve el array de películas que ha dirigido.

**Ayuda**  
Es recomendable usar el método `.filter()`.

- **Ejercicio 3**  
  ¡Genial!, ya tienes el array de películas para un/a determinado/a director/a.

Para tener más información sobre este/a director/a, se pide calcular la media de las puntuaciones de sus películas.

Para esto, deberás implementar la función `moviesAverageOfDirector()`, la cual recibe un array de películas y devuelve la nota media, con dos decimales.

**Ayuda**  
Como quieres obtener un único valor, el método `.reduce()` puede ser útil.

- **Ejercicio 4**  
  ¡ENHORABUENA!, ya tienes creados todos los filtros que permitirán extraer toda la información necesaria sobre los/las directores/as.

Ahora, en este ejercicio y el siguiente, implementarás la lógica para ordenar las películas, parte fundamental en cualquier herramienta de visualización de datos.

En este apartado, deberás crear una función, que recibiendo un array de películas, lo devuelva ordenado alfabéticamente por título.

Solo se deben devolver las 20 primeras películas ordenadas.

**Ayuda**  
Para saber si debes devolver un array con toda la información de las películas o un array que contenga solo el nombre de las películas, analiza el archivo con los tests llamado "films.spec.js" y revisa los tests del ejercicio 4.

- **Ejercicio 5**  
  Solo te falta una segunda función que ordene las películas.

En esta ocasión, deberás implementar una función que recibiendo un array de películas, devuelva un array de películas ordenadas por año.

Como podrás observar, hay muchas películas que coinciden en el mismo año. Para ordenar estas películas que tienen el mismo año, se debe hacer por orden alfabético del título.

- **Ejercicio 6**  
  ¡Lo estás haciendo muy bien, ya has creado una aplicación web con muchas herramientas que podrán ayudar a los usuarios/as!

En este apartado, es necesario dar la posibilidad a los usuarios/as de pedir la nota media de las películas de un determinado género.

El primer paso será crear el test unitario para probar esta funcionalidad. Recuerda que los tests unitarios se deben añadir al archivo “tests/films.spec.js”.

Luego deberás crear la función que reciba una categoría de película, y calcule la media de nota de esta categoría (sobre el array de todas las películas).

## Nivel 2

¡CUIDADO!, antes de pasar al nivel 2 verifica que has entendido bien todos los ejercicios del nivel 1.

Los niveles 2 y 3 son opcionales, lo importante es aprender los conceptos de cada sprint. Si lo has copiado rápidamente de internet, no tiene valor, ya que si pasas así todos los sprints, habrás trabajado mucho y aprendido poco.

En una entrevista técnica en una empresa o en las pruebas de nivel del itinerario (después del sprint 5 y 9) se detectan muy rápidamente estos casos. No retrases tu aprendizaje, mejor hacer pocos ejercicios bien que muchos rápido.

- **Ejercicio 7**  
  Como habrás podido observar, la duración de las películas del array viene en horas y minutos.

Esto es un problema para compararlas fácilmente, por lo que deberás modificar este formato de duración.

Debes crear una función donde, recibiendo un array de películas, devuelva un array con estas películas pero con la duración en minutos.

Por ejemplo:

````javascript
{
title: 'Pulp Fiction',
year: 1994,
director: 'Quentin Tarantino',
duration: '2h 34min',
genre: ['Crime', 'Drama'],
score: 8.9
},
Se transformaría en:

```javascript
{
  title: 'Pulp Fiction',
  year: 1994,
  director: 'Quentin Tarantino',
  duration: '154',
  genre: ['Crime', 'Drama'],
  score: 8.9
}
````

## Nivel 3

- **Ejercicio 8**  
  Ya estás llegando al final, solo falta implementar una última funcionalidad.

Los usuarios/as necesitan saber qué película es la mejor de cada año. Para llevar a cabo esta funcionalidad, deberás crear una función que acepte el año y devuelva la mejor película de ese año.

## Anexo I: Programar para satisfacer tests

Como hemos dicho al inicio de esta entrega, no tienes que programar para mostrar un resultado en pantalla, sino que debes ir superando una serie de tests.

Al principio, como no tienes ninguna función hecha, te aparecerán todos los tests en rojo (según no se han pasado), y a medida que vayas completando las funciones, verás que los resultados de los tests cambian a verde. Al ejecutar el comando `npm run test:watch` verás que automáticamente se genera el archivo "test-results.html" en tu proyecto. Este archivo, como ves, es HTML, te muestra visualmente los resultados de los tests y los `console.log()` que hayas incluido en tu código. Al abrir este HTML (lo mejor es usar el plugin live server de Visual Studio Code, porque de esta manera, cuando hagas cambios, se actualice inmediatamente la web), verás este resultado:

No te preocupes si lo ves todo rojo, es normal, poco a poco irás pasando todos los tests a verde.

Un ejemplo de cómo debe ir quedando los tests cuando los vas superando:

Atención, presta mucha atención a lo que indica cada test, ¡te da pistas sobre qué está fallando! A veces, si necesitas más información aparte de los resultados de los tests, puedes poner `console.log()` en tu código, y estos aparecerán en la parte inferior del archivo "test-results.html".

Con el enunciado, los resultados de los tests y los `console.log()` tienes más que suficiente para hacer todo el entregable. Al principio es un poco diferente programar para satisfacer el test, pero después verás que es muy cómodo.
