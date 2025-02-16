// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  let result = array.map((movie) => movie.director);
  console.log('EXERCICE 1 ->', result);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  let result = array.filter((movie) => movie.director === director);
  console.log('EXERCICE 2 ->', result);
  return result;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  let filteredMovies = getMoviesFromDirector(array, director);
  if (filteredMovies.length === 0) return 0;
  let totalScore = filteredMovies.reduce((acc, movie) => acc + movie.score, 0);

  let result = totalScore / filteredMovies.length;

  console.log('EXERCICE 3 ->', result);
  return result;
}

// Exercise 4:  Alphabetic order by title
function orderAlphabetically(array) {
  let getTitles = array.map((movie) => movie.title);
  let result = getTitles.sort().slice(0, 20);
  console.log('EXERCICE 4 ->', result);
  return result;
}

// Exercise 5: Order by year, ascending
function orderByYear(array) {
  let result = array
    .map((movie) => movie)
    .sort((a, b) => {
      if (a.year !== b.year) {
        return a.year - b.year;
      }
      return a.title.localeCompare(b.title);
    });

  console.log('EXERCICE 5 ->', result);
  return result;
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, genre) {
  let filteredMovies = array.filter((movie) => movie.genre.includes(genre));
  if (filteredMovies.length === 0) return 0;
  let totalScore = filteredMovies.reduce((acc, movie) => acc + movie.score, 0);

  let result = totalScore / filteredMovies.length;

  console.log('EXERCICE 6 ->', result);
  return result;
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(array) {
  let result = array.map((movie) => {
    let hours = 0;
    let minutes = 0;

    if (movie.duration.includes('h')) {
      hours = Number(movie.duration.split('h')[0]) * 60;
    }

    if (movie.duration.includes('min')) {
      minutes = Number(
        movie.duration.split('h')[1]?.split('min')[0] ||
          movie.duration.split('min')[0]
      );
    }

    return {
      ...movie,
      duration: hours + minutes
    };
  });

  console.log('EXERCICE 7 ->', result);
  return result;
}

// Exercise 8: Get the best film of a year

function bestFilmOfYear(array, year) {
  let filterYear = array.filter((movie) => movie.year === year);
  let result =
    filterYear.length > 0
      ? [
          filterYear.reduce((bestMovie, movie) =>
            movie.score > bestMovie.score ? movie : bestMovie
          )
        ]
      : [];
  console.log('EXERCICE 8 ->', result);
  return result;
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear
  };
}
