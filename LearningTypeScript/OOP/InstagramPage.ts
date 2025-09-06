// Create a class for InstagramProfilePage
// This class will help us test Instagram's profile management platform functionality
// Add 3 variables to store important testing data:
// Variable 1: Store the expected homepage title as text (like "Instagram - Share Your Story")
// Variable 2: Store the maximum posts allowed per hour as a whole number (like 10 or 15)
// Variable 3: Store the minimum follower engagement rate as a decimal number (like 2.8 or 4.1)
// Add 1 method that performs Instagram profile testing:
// Method 1: Find hashtags with specific length requirements
    // This method takes two arguments: hashtags array like ["#travel", "#photography", "#food"], and minimum length as a whole number (like 6)
    // This method gives back a list of matching hashtags like ["#photography"]
    // STEP 1: Create an empty array to store matching hashtags
    // STEP 2: Use a for loop to go through each hashtag in the provided array
    // STEP 3: Inside the loop, use the length property to get the total character count of the current hashtag
    // STEP 4: Check if this length is greater than or equal to the minimum length parameter
    // STEP 5: If the length requirement is met, use the toUpperCase() string method on the hashtag
    // STEP 6: Add the uppercase hashtag to your matching array
    // STEP 7: After the loop, give back the array of matching uppercase hashtags

    class InstagramProfilePage{

        expectedHomePageTitle = "Instagram - Share Your Story"
        minimumPostsAllowed = 10
        minimumFollowerEngagement = 3.7


        searchHashtags(hashtags : string [], minimumLength : number): string []{

            let matchedHashtags : string[] = []
        

            for (let i = 0; i < hashtags.length; i++){
                if (hashtags[i].length >= minimumLength){
                    matchedHashtags.push(hashtags[i].toUpperCase())
                }
            }
            return matchedHashtags
        }

    }

    let instagramProfilePageCopy = new InstagramProfilePage()

    console.log(instagramProfilePageCopy.expectedHomePageTitle)
    console.log(instagramProfilePageCopy.minimumPostsAllowed)
    console.log(instagramProfilePageCopy.minimumFollowerEngagement)
    console.log( instagramProfilePageCopy.searchHashtags(["#art", "#photography", "#food", "#lifestyle", "#tech"], 6))




// After creating your class:
// Create a copy of your class using the 'new' keyword
// Print all 3 variables from your class copy
// Call the method from your class copy with this specific test case:
// Call findHashtagsWithMinLength(["#art", "#photography", "#food", "#lifestyle", "#tech"], 6) and print the result