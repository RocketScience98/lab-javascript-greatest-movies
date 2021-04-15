// Iteration 1: All directors? - Get the array of all directors.
//movies
function getAllDirectors(array){
    const newArray = array.map((movie) => movie.director)
    return newArray
}
console.log(getAllDirectors(movies))


// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

let allDirectors =getAllDirectors(movies)
let allDirectorsFilter = allDirectors.filter(function(item,index){
  return allDirectors.indexOf(item) === index;
})

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
    return movies.filter(movie => movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')).length;
}


// Iteration 3: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(arr) {
    if (arr.length == 0) return 0;
    const avgFilms = arr.reduce((sum, rate) => {
        if(typeof rate.rate =='number'){
            return sum + rate.rate;
        } return sum
    },0)
    let avgRate = avgFilms / arr.length;
    return parseFloat(avgRate.toFixed(2));
}
// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(arr) {
    const dramaMovies = arr.filter(elm => elm.genre.includes('Drama'))
    console.log(dramaMovies)
    if (dramaMovies.length == 0) return 0
    
    const avgDramaRate = dramaMovies.reduce((acc, elm) => 
    {return acc + elm.rate}, 0)

    const avgRate = avgDramaRate / dramaMovies.length;

    return parseFloat(avgRate.toFixed(2))
}


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(array) {
    const moviesArray = array.map(movie => movie)
    const orderMovies = moviesArray.sort(
        (a, b) => {
            if(a.years === b.years){
                if(a.title < b.title){return -1} 
                else if(a.title > b.title){return 1} 
                else {return 0}
            }
            return a.year - b.year
        }
    )
    return orderMovies
  } 
  console.log(orderByYear(movies))
// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(arr) {
    console.log(arr)
    const arrAlph = arr
    const finalArr = arrAlph.sort((a, b) => {
        return b.title.toLowerCase().localeCompare(a.title.toLowerCase())
    })
    return finalArr.map(order => order.title).reverse().slice(0, 20)
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
