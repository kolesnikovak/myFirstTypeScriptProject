// Create a class for TwitterFeedPage
// This class will help us test Twitter's social media feed platform functionality
// Add 3 variables to store important testing data:
// Variable 1: Store the expected homepage title as text (like "Twitter - What's Happening")
// Variable 2: Store the maximum tweets allowed per day as a whole number (like 300 or 500)
// Variable 3: Store the minimum retweet rate for trending as a decimal number (like 1.5 or 2.3)
// Add 1 method that performs Twitter feed testing:
// Method 1: Find usernames that start and end with specific characters
    // This method takes three arguments: usernames array like ["@john_doe", "@sarah123", "@mike_pro"], starting character as text (like "@"), and ending character as text (like "e")
    // This method gives back a list of matching usernames like ["@john_doe"]
    // STEP 1: Create an empty array to store matching usernames
    // STEP 2: Use a for loop to go through each username in the provided array
    // STEP 3: Inside the loop, use the charAt(0) string method to get the first character of the current username
    // STEP 4: Use the charAt(username.length - 1) string method to get the last character of the current username
    // STEP 5: Check if the first character equals the starting character parameter AND the last character equals the ending character parameter
    // STEP 6: If both conditions match, use the replace("@", "") string method to remove the @ symbol
    // STEP 7: Add the username without @ symbol to your matching array
    // STEP 8: After the loop, give back the array of matching usernames without @ symbols

    class expectedHomePageTitle {

        expectedHomePageTitle = "Twitter - What's Happening"
        maximumTweetsPerDay = 300
        minimumReTweet = 1.7

        searchUserNames(usernames : string [], startingCharacter : string, endingCharacter : string) : string []{

            let matchingUsernames : string [] = []

            for (let i = 0; i < usernames.length; i++){
                let firstCharacter = usernames[i].charAt(0)
                let lastCharacter = usernames[i].charAt(usernames[i].length - 1)

                if(startingCharacter === firstCharacter && endingCharacter === lastCharacter){
                    let clearUserName = usernames[i].replace("@", "")
                    matchingUsernames.push(clearUserName)
                }
            }
            return matchingUsernames
        }

    }

    let expectedHomePageCopy = new expectedHomePageTitle()

    console.log(expectedHomePageCopy.searchUserNames(["@jane", "@bob_code", "@alice", "@tom_dev", "@mike"], "@", "e"))


// After creating your class:
// Create a copy of your class using the 'new' keyword
// Print all 3 variables from your class copy
// Call the method from your class copy with this specific test case:
// Call findUsernamesStartingAndEnding(["@jane", "@bob_code", "@alice", "@tom_dev", "@mike"], "@", "e") and print the result






