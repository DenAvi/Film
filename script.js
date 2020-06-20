"use strict"

const nomberOfFilms = +prompt("Сколько фильмов просмотрел", "open ass");
console.log(nomberOfFilms);
const PersonalMoveDB = {
    count: nomberOfFilms,
    movies: {
        HowMany: prompt("Один из просмотр", ""),
        Mark: +prompt("На сколько оцените", "open ass")
    },
    genres: [],
    private: false
};
console.log(PersonalMoveDB.count);
//alert(PersonalMoveDB.movies.HowMany);
//alert(PersonalMoveDB.movies.Mark);

const a = prompt("Один из просмотр", ""),
    b = +prompt("На сколько оцените", "open ass");
//alert(PersonalMoveDB.movies.HowMany);
//alert(PersonalMoveDB.movies.Mark);
PersonalMoveDB.movies[a] = b;


console.log(PersonalMoveDB);