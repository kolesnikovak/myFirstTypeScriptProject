// Create a class for CostcoTestPage
// This class will help us test Costco's website functionality

// Add 3 variables to store important testing data:
// Variable 1: Store the store location name as text (like "Costco Wholesale Seattle")
// Variable 2: Store the membership fee amount as a whole number (like 60 or 120)
// Variable 3: Store the maximum bulk quantity allowed per item as a whole number (like 50 or 100)

// Add 3 methods that perform different Costco testing actions:

// Method 1: Check store hours
    // This method takes no arguments (nothing gets passed into it)
    // This method doesn't give anything back when it finishes
    // When called, it should print the store location name
    // Then print a message about store hours (like "Store open 10am-8pm")

// Method 2: Calculate membership savings
    // This method takes two arguments: original price as a decimal number, and member discount percentage as a whole number
    // This method gives back the savings amount as a decimal number
    // Calculate how much money is saved: (original price × discount percentage ÷ 100)
    // Give back the calculated savings amount

// Method 3: Find products by category
    // This method takes one argument: category name as text (like "electronics" or "food")
    // This method gives back a list of matching product names (multiple pieces of text)
    // STEP 1: Inside the method, create an array with at least 6 different product names
    //         Examples: "electronics-TV", "food-apples", "electronics-laptop", "clothing-shirt", "food-bread", "electronics-phone"
    // STEP 2: Create an empty array to store the products that match
    // STEP 3: Write a for loop that starts at i = 0, goes while i is less than the array length, and increases i by 1 each time
    // STEP 4: Inside the loop, get the current product name using the i variable
    // STEP 5: Use the startsWith string method to check if the current product name starts with the category name
    //         Example: if category is "electronics", check if product.startsWith("electronics")
    // STEP 6: If the product starts with the category name, add it to your matching products array
    // STEP 7: After the loop finishes, give back the array of matching products

// After creating your class:
// Create a copy of your class using the 'new' keyword
// Print all 3 variables from your class copy
// Call all 3 methods from your class copy
// For methods that give something back, print what they return
// For the method that doesn't give anything back, just call it

class CostcoTestPage{

    locationName = 'Costco Wholesale Miami'
    membershipCost = 129
    maximumBulkQuantity = 70

    storeHours() : void{
        console.log('Store hours: 8am-9pm')
    }

    membershipSavings (originalPrice: number, discountPercentage: number) : number{
        let savedMoney: number = originalPrice * discountPercentage / 100
        return savedMoney
    }

    seerachProducts(productCategory: string) : string []{
        let productTypes : string [] = ["electronics-TV", "food-oranges", "electronics-microwave", "clothing-shirt", "food-chicken", "electronics-watch"]
        let searchResult : string [] = []

        for ( let i = 0; i < productTypes.length; i++){
            if(productTypes[i].startsWith("food")){
                searchResult.push(productTypes[i])
            }
        }
        return searchResult
    }
}

let testCostcoPage = new CostcoTestPage()

console.log(testCostcoPage.locationName)
console.log(testCostcoPage.membershipCost)
console.log(testCostcoPage.maximumBulkQuantity)

testCostcoPage.storeHours()
console.log(testCostcoPage.membershipSavings(129, 30))
console.log(testCostcoPage.seerachProducts("food"))


console.log('----------------------------------------------')

// Create a class for SpotifyTestPage
// This class will help us test Spotify's music streaming functionality

// Add 3 variables to store important testing data:
// Variable 1: Store the current user's subscription type as text (like "Free" or "Premium")
// Variable 2: Store the maximum song skip limit per hour as a whole number (like 6 or unlimited could be 999)
// Variable 3: Store the default audio quality setting as a whole number (like 160 or 320)

// Add 3 methods that perform different Spotify testing actions:

// Method 1: Start music streaming
    // This method takes no arguments (nothing gets passed into it)
    // This method doesn't give anything back when it finishes
    // When called, it should print a message about starting the music app
    // Then print the current subscription type

// Method 2: Calculate monthly listening time
    // This method takes two arguments: daily minutes listened as a whole number, and number of days in month as a whole number
    // This method gives back total monthly minutes as a whole number
    // Calculate total minutes: daily minutes × number of days
    // Give back the calculated total

// Method 3: Filter songs by file format
    // This method takes one argument: desired file extension as text (like ".mp3" or ".flac")
    // This method gives back a list of matching song filenames (multiple pieces of text)
    // STEP 1: Inside the method, create an array with at least 6 different song filenames including file extensions
    //         Examples: "song1.mp3", "track2.flac", "music3.mp3", "beat4.wav", "tune5.mp3", "sound6.flac"
    // STEP 2: Create an empty array to store the songs that match the desired file format
    // STEP 3: Write a for loop that starts at i = 0, goes while i is less than the array length, and increases i by 1 each time
    // STEP 4: Inside the loop, get the current song filename using the i variable
    // STEP 5: Use the endsWith string method to check if the current filename ends with the desired file extension
    //         Example: if desired extension is ".mp3", check if filename.endsWith(".mp3")
    // STEP 6: If the filename ends with the desired extension, add it to your matching songs array
    // STEP 7: After the loop finishes, give back the array of matching song filenames

// After creating your class:
// Create a copy of your class using the 'new' keyword
// Print all 3 variables from your class copy
// Call all 3 methods from your class copy
// For methods that give something back, print what they return
// For the method that doesn't give anything back, just call it
