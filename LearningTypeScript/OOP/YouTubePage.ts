// Create a class for YouTubeTestPage
// This class will help us test YouTube's website functionality
// Add 3 variables to store important testing data:
// Variable 1: Store the expected page title that should appear when YouTube loads (as text)
// Variable 2: Store the default video quality setting as a whole number (like 720 or 1080)
// Variable 3: Store an error message that appears when something goes wrong (as text)
// Add 3 methods that perform different YouTube testing actions:
// Method 1: Navigate to YouTube homepage
    // This method takes no arguments (nothing gets passed into it)
    // This method doesn't give anything back when it finishes
    // When called, it should print a message saying 'it's going to YouTube'
// Method 2: Search for videos by category
    // This method takes one argument: the search category as text (like "music" or "gaming")
    // This method gives back a list of video titles (multiple pieces of text)
    // If the category is "music" give back a list with 3 music video titles
    // If the category is "tutorial" give back a list with 3 tutorial video titles
    // If the category is anything else, give back an empty list
// Method 3: Change video playback speed
// This method takes two arguments: desired speed as a decimal number
// This method gives back either true or false
// If the desired speed is between 0.25 and 2.0, give back true
// If the desired speed is outside that range, give back false

// After creating your class:
// Create a copy of your class using the 'new' keyword
// Print all 3 variables from your class copy
// Call all 3 methods from your class copy
// For methods that give something back, print what they return
// For the method that doesn't give anything back, just call it

class YouTubeTestPage{

    welcomeMessage: string = 'Welcome Kate'
    defaultVideoQuality: number = 720
    errorMessage: string = 'Oops, something went wrong ;('

    navigateToHomePage() : void{
        console.log("it's going to YouTube")
    }

    searchForVideo(searchCategory : string) : string[] {
        let searchResult: string[] = []
        if(searchCategory === 'music' ){
            searchResult = ['Relaxing Music', 'Rock Music', 'Music for study']
        }else if (searchCategory === 'tutorial'){
            searchResult = ['How to become a QA tester?', 'How to treat Knopa?', 'How to make borscht?']
        }
        return searchResult
    }


    changePlaybackSpeed(desiredSpeed : number) : boolean{
        if(desiredSpeed >= 0.25 && desiredSpeed <= 2.0 ){
            return true
        } else {
            return false
        }
        return false
    }
}

let myYouTubePage = new YouTubeTestPage()
console.log(myYouTubePage.welcomeMessage)
console.log(myYouTubePage.defaultVideoQuality)
console.log(myYouTubePage.errorMessage)

myYouTubePage.navigateToHomePage()
myYouTubePage.searchForVideo('tutorial')
console.log(myYouTubePage.changePlaybackSpeed(1.75))




