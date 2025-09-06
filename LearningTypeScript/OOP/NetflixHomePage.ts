// Create a class for NetflixHomePage
// This class will help us test Netflix's homepage functionality

// Add 3 variables to store important testing data:
// Variable 1: Store the expected homepage title as text (like "Netflix - Watch TV Shows Online, Watch Movies Online")
// Variable 2: Store the default video quality setting as a whole number (like 1080 or 4K could be 2160)
// Variable 3: Store the maximum profiles allowed per account as a whole number (like 5 or 10)

// Add 3 methods that perform different Netflix testing actions:
// Method 1: Navigate to homepage
    // This method takes no arguments (nothing gets passed into it)
    // This method doesn't give anything back when it finishes
    // When called, it should print a message saying it's loading Netflix homepage
    // Then print a message confirming the page loaded successfully

// Method 2: Calculate monthly viewing time
    // This method takes two arguments: daily hours watched as a decimal number, and days in month as a whole number
    // This method gives back total monthly hours as a decimal number
    // Calculate total hours: daily hours × days in month
    // Give back the calculated total

// Method 3: Filter content by genre and rating
    // This method takes two arguments: desired genre as text (like "action" or "comedy"), and minimum rating as a decimal number
    // This method gives back a list of matching movie titles (multiple pieces of text)
    // STEP 1: Inside the method, create an array with at least 8 different movie titles with genre and rating
    //         Examples: "action-Avengers-4.5", "comedy-Friends-4.8", "action-Batman-4.2", "drama-Crown-4.9", "comedy-Office-4.7", "action-Matrix-4.6", "drama-Stranger-4.4", "comedy-Parks-4.3"
    // STEP 2: Create an empty array to store movies that match both criteria
    // STEP 3: Write a for loop that goes through each movie in the array
    // STEP 4: Inside the loop, split the current movie by "-" to get parts: [genre, title, rating]
    // STEP 5: Check if the genre part equals the desired genre
    // STEP 6: Convert the rating part to a number and check if it's >= minimum rating
    // STEP 7: If BOTH the genre matches AND the rating is high enough, add the title part to your matching array
    // STEP 8: After the loop finishes, give back the array of matching movie titles

// After creating your class:
// Create a copy of your class using the 'new' keyword
// Print all 3 variables from your class copy
// Call all 3 methods from your class copy
// For methods that give something back, print what they return
// For the method that doesn't give anything back, just call it

class NetflixHomePage {

    expectedHomePageTitle = "Netflix - Watch TV Shows Online, Watch Movies Online"
    defaultVideoQuality = 1080
    maximumProfilesAllowed = 6

    navigateToHomePage() : void{
        console.log('loading Netflix homepage..')
    }

    monthlyWatchingTime (dailyHoursWatched: number, daysInTheMonth: number) : number{
        return dailyHoursWatched * dailyHoursWatched
    }

    contentFilter (desiredGenre : string, desiredMinimumRating : number) : string []{
        let movieGenreAndRating : string [] = ["action-Avengers-4.5", "comedy-Friends-4.8", "action-Batman-4.2", "drama-Crown-4.9", "comedy-Office-4.7", "action-Matrix-4.6", "drama-Stranger-4.4", "comedy-Parks-4.3"]
        let matchedMovies : string [] = []

        for (let i = 0; i < movieGenreAndRating.length; i++){
            let currentMovie = movieGenreAndRating[i]
            let titleGenreRating = movieGenreAndRating[i].split('-')

            let currentMovieGenre = titleGenreRating[0]
            let currentMovieName = titleGenreRating[1]
            let currentMovieRating = parseFloat(titleGenreRating[2])

            if (desiredGenre === currentMovieGenre && currentMovieRating >= desiredMinimumRating){
                matchedMovies.push(currentMovieName)
            }

        }
        return matchedMovies
    }
    
}

let netflixHomePageCopy = new NetflixHomePage()
console.log(netflixHomePageCopy.expectedHomePageTitle)
console.log(netflixHomePageCopy.defaultVideoQuality)
console.log(netflixHomePageCopy.maximumProfilesAllowed)

