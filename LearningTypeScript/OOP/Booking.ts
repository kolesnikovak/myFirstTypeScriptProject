// Create a class for BookingComHomePage
// This class will help us test Booking.com's comprehensive hotel booking platform functionality
// Add 3 variables to store important testing data:
// Variable 1: Store the expected homepage title as text (like "Booking.com - Official Site - The Best Hotels & Accommodations")
// Variable 2: Store the maximum reservation modifications allowed per booking as a whole number (like 3 or 5)
// Variable 3: Store the minimum property review score for quality assurance as a decimal number (like 7.5 or 8.0)

class BookingComHomePage{

    expectedHomePageTitle = "Booking.com - Official Site - The Best Hotels & Accommodations"
    maximumReservationModifications : number = 3
    minimumPropertyReviewScore : number = 8.0

    // Add 5 methods that perform different Booking.com testing actions:


    // Method 1: Navigate to hotel search dashboard
    // This method takes no arguments (nothing gets passed into it)
    // This method doesn't give anything back when it finishes
    // When called, it should print a message saying it's loading Booking.com hotel search dashboard
    // Then print a message confirming the accommodation booking platform loaded successfully

    navigateToHotelSearchDashboard (){
        console.log('loading Booking.com hotel search dashboard')
        console.log('The accommodation booking platform loaded successfully')
    }


// Method 2: Calculate total stay cost with taxes
    // This method takes two arguments: room rate per night as a decimal number, and number of nights as a whole number
    // This method gives back estimated total cost as a decimal number
    // Calculate total cost: (room rate × nights) + (room rate × nights × 0.12) + 25 (12% city tax + $25 resort fee)
    // Give back the calculated total stay cost

    totalStayCostWWithTaxes(nightlyRoomRate : number, numberOfNights : number) : number{
        return (nightlyRoomRate * numberOfNights) + (nightlyRoomRate * numberOfNights * 0.12) + 25
    }


// Method 3: Filter hotels by star rating and price range
    // This method takes two arguments: minimum star rating as a whole number (1-5), and maximum price per night as a whole number
    // This method gives back a list of matching hotel names (multiple pieces of text)
    // STEP 1: Inside the method, create an array with at least 8 different hotel listings with star rating, hotel name, and nightly price
    //         Examples: "4-Grand Plaza Hotel-180", "3-City Center Inn-120", "5-Luxury Resort Spa-250", "3-Budget Comfort Lodge-95", "4-Business Executive Suite-160", "5-Premium Ocean View-220", "2-Economy Travel Motel-75", "4-Historic Boutique Hotel-140"
    // STEP 2: Create an empty array to store hotels that match both criteria
    // STEP 3: Write a for loop that goes through each hotel listing in the array
    // STEP 4: Inside the loop, split the current hotel by "-" to get parts: [stars, name, price]
    // STEP 5: Convert the stars part to a number and check if it's >= minimum star rating
    // STEP 6: Convert the price part to a number and check if it's <= maximum price per night
    // STEP 7: If BOTH the star rating meets requirement AND the price is within budget, add the hotel name to your matching array
    // STEP 8: After the loop finishes, give back the array of matching hotel names

    hotelsFilter(minimumStars : number, maximumPrice : number) : string []{
        let hotelListings : string [] = ["4-Grand Plaza Hotel-180", "3-City Center Inn-120", 
            "5-Luxury Resort Spa-250", "3-Budget Comfort Lodge-95", "4-Business Executive Suite-160", "5-Premium Ocean View-220",
             "2-Economy Travel Motel-75", "4-Historic Boutique Hotel-140"]

        let matchedHotels : string [] = []
        
        for (let i = 0; i < hotelListings.length; i++){
            let currentJHotel = hotelListings[i]
            let splitedHotelListings = hotelListings[i].split('-')

            let currentStars = parseFloat(splitedHotelListings[0])
            let currentHotelName = splitedHotelListings[1]
            let currentNightlyPrice = parseFloat(splitedHotelListings[2])

            if (currentStars >= minimumStars && currentNightlyPrice <= maximumPrice){
                matchedHotels.push(currentHotelName)
            }
    }
    return matchedHotels
    }


// Method 4: Find properties by amenities and cancellation policy
    // This method takes two arguments: required amenity as text ("wifi", "pool", "gym"), and cancellation flexibility as text ("free", "partial", "strict")
    // This method gives back a list of matching property names (multiple pieces of text)
    // STEP 1: Inside the method, create an array with at least 8 different properties with amenity, property name, and cancellation policy
    //         Examples: "wifi-Downtown Business Hotel-free", "pool-Resort Paradise-partial", "gym-Fitness Center Lodge-free", "wifi-Tech Hub Hotel-strict", "pool-Tropical Getaway-free", "gym-Active Lifestyle Inn-partial", "wifi-Digital Nomad Suite-free", "pool-Family Fun Resort-strict"
    // STEP 2: Create an empty array to store properties that match both criteria
    // STEP 3: Write a for loop that goes through each property in the array
    // STEP 4: Inside the loop, split the current property by "-" to get parts: [amenity, name, cancellation]
    // STEP 5: Check if the amenity part equals the required amenity
    // STEP 6: Check the cancellation flexibility priority: if cancellation flexibility is "strict" accept all, if "partial" accept only "free" and "partial", if "free" accept only "free"
    // STEP 7: If BOTH the amenity matches AND the cancellation policy is acceptable, add the property name to your matching array
    // STEP 8: After the loop finishes, give back the array of matching property names

    searchPropertiesByAmenities(requiredAmenity : string, cancellationPolicy : string) : string []{
        let propertiesAndAmenities : string [] = ["wifi-Downtown Business Hotel-free", "pool-Resort Paradise-partial", 
            "gym-Fitness Center Lodge-free", "wifi-Tech Hub Hotel-strict", "pool-Tropical Getaway-free", 
            "gym-Active Lifestyle Inn-partial", "wifi-Digital Nomad Suite-free", "pool-Family Fun Resort-strict"]

        let matchedProperties : string [] = []

        for (let i = 0; i < propertiesAndAmenities.length; i++){
            let splitedPropertyListings = propertiesAndAmenities[i].split('-')

            let currentAmenity = splitedPropertyListings[0]
            let currentPropertyName = splitedPropertyListings[1]
            let currentCancellation = splitedPropertyListings[2]

            if(requiredAmenity === currentAmenity){

                if (cancellationPolicy === "strict"){
                    matchedProperties.push(currentPropertyName)
            
                } else if (cancellationPolicy === "partial" && ['partial', 'free'].includes(currentCancellation)){
                     matchedProperties.push(currentPropertyName)

                } else if (cancellationPolicy === 'free' && currentCancellation === 'free'){
                     matchedProperties.push(currentPropertyName)
            }
        }
    
    }
        return matchedProperties
    }
    
// Method 5: Analyze deals by discount percentage and availability
    // This method takes two arguments: minimum discount percentage as a whole number, and maximum days until check-in as a whole number
    // This method gives back a list of matching deal descriptions (multiple pieces of text)
    // STEP 1: Inside the method, create an array with at least 8 different deals with discount percentage, deal description, and days until check-in
    //         Examples: "25-Early Bird Special-14", "15-Last Minute Deal-3", "30-Weekend Getaway Package-7", "20-Extended Stay Discount-21", "35-Flash Sale Limited Time-1", "10-Loyalty Member Bonus-10", "40-Off-Season Special-30", "18-Group Booking Deal-5"
    // STEP 2: Create an empty array to store deals that match both criteria
    // STEP 3: Write a for loop that goes through each deal in the array
    // STEP 4: Inside the loop, split the current deal by "-" to get parts: [discount, description, days]
    // STEP 5: Convert the discount part to a number and check if it's >= minimum discount percentage
    // STEP 6: Convert the days part to a number and check if it's <= maximum days until check-in
    // STEP 7: If BOTH the discount percentage meets requirement AND the availability timeframe is acceptable, add the deal description to your matching array
    // STEP 8: After the loop finishes, give back the array of matching deal description


analyzeDealsByDiscountAndAvailability(minimumDiscountPercentage : number, maximumDaysUntilChcekin : number) : string []{

    let deals : string [] = ["25-Early Bird Special-14","15-Last Minute Deal-3","30-Weekend Getaway Package-7","20-Extended Stay Discount-21", 
        "35-Flash Sale Limited Time-1", "10-Loyalty Member Bonus-10", "40-Off-Season Special-30", "18-Group Booking Deal-5"]

    let matchedDeals : string [] = []

    for (let i = 0; i < deals.length; i++){
        let splitedDeals = deals[i].split('-')

        let currentPercentage = splitedDeals[0]
        let currentDeals = splitedDeals[1]
        let currentDaysUntilChceckIn = splitedDeals[2]

    }
return matchedDeals


}

// After creating your class:
// Create a copy of your class using the 'new' keyword
// Print all 3 variables from your class copy
// Call all 5 methods from your class copy with these specific test cases:
// 1. Call navigateToHotelSearchDashboard()
// 2. Call calculateTotalStayCost(150, 4) and print the result
// 3. Call filterHotelsByStarAndPrice(4, 200) and print the result
// 4. Call findPropertiesByAmenitiesAndCancellation("wifi", "partial") and print the result
// 5. Call analyzeDealsbyDiscountAndAvailability(20, 10) and print the result

}





















