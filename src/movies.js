// Iteration 1: All directors? - Get the array of all directors.

let getAllDirectors = (moviesArray) => {
    // moviesArray => all the info from movies
    let directorsArr = moviesArray.map(eachMovie => {
        return eachMovie.director

    })
    return directorsArr;
};
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
let howManyMovies = (moviesArray) => {
    
    let dramaSpielberg = moviesArray.filter((elem) => {
        return elem.director === "Steven Spielberg" && elem.genre.includes("Drama") ;
    })
    return dramaSpielberg.length
};

// Iteration 3: All rates average - Get the average of all rates with 2 decimals
let ratesAverage = (moviesArray) => {
 let ratesTotal = moviesArray.reduce((sum, elem) => {
     if("rate" in elem) {
    sum += +(elem.rate/moviesArray.length). toFixed(2)
     }
     return sum;
    }, 0) ;
    
    return ratesTotal
};

// Iteration 4: Drama movies - Get the average of Drama Movies
let dramaMoviesRate = (moviesArray) => {
    let allDrama = moviesArray.filter((elem, index) => {
        return elem.genre.includes("Drama")
    });
    return ratesAverage(allDrama)
};

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
let orderByYear = ( moviesArray) =>{
    let yearSortedMovies = JSON.parse(JSON.stringify(moviesArray));

    yearSortedMovies.sort (( movie1, movie2) => {
        if (movie1.year > movie2.year ){
            return 1;
       }else if(movie1.year < movie2.year) {
           return -1;
       
    }else{
            if(movie1.title> movie2.title){
                return 1;
            }else if (movie1.title < movie2.title) {
                return -1

            }else{
                return 0;
            }
        }
    });
    return yearSortedMovies
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
