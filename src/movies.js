// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const films = moviesArray.map(function (el) {
        return el.director
    })

    // console.log('coucou', films)
    return films // [ "jhj",  ]
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(moviesArray) {
    const moviesSteven = moviesArray.filter(function (el) {
        if (el.director === 'Steven Spielberg' && el.genre.includes('Drama')) {
            return el
        }
    })
    return moviesSteven.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    const scoresAverageReview = moviesArray.reduce(function (acc, review) {
        if (!review.score) review.score = 0
        return acc + review.score / moviesArray.length
    }, 0);

    return Number(scoresAverageReview.toFixed(2))

}

// Iteration 4: Drama movies - Get the average of Drama Movies
// Le drame est le genre qui se répète le plus sur notre réseau. Apparemment, les gens aiment le drame ! 👀
// Créez une fonction dramaMoviesScore() qui reçoit un tableau en paramètre pour obtenir le score moyen
// de tous les films dramatiques ! Voyons si c'est mieux que la moyenne générale.
// Encore une fois, arrondi à 2 décimales !

function dramaMoviesScore(moviesArray) {
    const moviesDrama = moviesArray.filter(function (movie) {
        return movie.genre.includes('Drama')
    })

    return scoresAverage(moviesDrama)

}


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) { }

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) { }

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) { }

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) { }
