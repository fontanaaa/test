const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
      count: numberOfFilms,
      movies: {},
      actors: {},
      genres: [],
      privat: false,
};


/*for (let i = 1; i < 2; i++) {  /// С ЦИКЛОМ FOR

      const a = prompt('Один из последних просмотренных фильмов?', ''),
            b = prompt('На сколько его оцените?','');
      if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b; 
            console.log('done');

      } else {
            console.log('error');
            i--;
      
} 
let i = 0;    /// С ЦИКЛОМ DO
do {
    const a = prompt('Один и последних просмотренных фильмов', ''),
      b = prompt('На сколько оцените его', '');
     i++;
    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
         personalMovieDB.movies[a] = b;
         console.log('done');
    } else {
     console.log('error');
     i--;
    }
} while (i < 2);
}*/

let i = 0;
while (i < 2) {
    const a = prompt('Один и последних просмотренных фильмов', ''),
          b = prompt('На сколько оцените его', '');
    i++;
    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
         personalMovieDB.movies[a] = b;
         console.log('done');
    } else {
     console.log('error');
     i--;
    }
}

if (personalMovieDB.count < 10) {
      console.log('Просмотрено довольно много фильмов');
} else if ( personalMovieDB.count >= 10 && personalMovieDB < 30) {
      console.log('Вы классический зритель');
} else if (personalMovieDB.count >= 30) {
      console.log('Вы киноман');
} else {
      console.log('Произошла ошибка');
}
     console.log(personalMovieDB);