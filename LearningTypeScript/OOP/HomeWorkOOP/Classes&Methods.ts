// Create a class called NetflixHomePage
// Add one property (variable) for the expected homepage message: 'Netflix'
// Add one method called clickWatchNowButton() that prints 'Clicking Watch Now button...'
// Create an object from your class and test the method

/*class NetflixHomePage {

    homePageMEssage : string = 'Netflix'

    clickWatchNowButton() : void {
        console.log('Clicking Watch Now button...')
    }

}

let myNetflixHomePage = new NetflixHomePage()

myNetflixHomePage.clickWatchNowButton()
*/


// Your mission:
// - Follow the same pattern as our LoginPage examples
// - Use proper TypeScript syntax
// - Include the property and method
// - Test your class at the end



console.log('--------------------------------------------------')




// Create a class called AmazonSearchPage
// Add one property for expected search page title: 'Amazon'
// Add one method called searchForProduct(productName: string): void
// The method should print 'Searching for ' + productName
// Create an object and test the method with 'laptop' and 'books'

class AmazonSearchPage{

    expectedSearchPageTitle: string = 'Amazon'

    searchForProduct(productName: string) : void {
        console.log('Searching for ' + productName)
    }

}

let searchFunction = new AmazonSearchPage()
searchFunction.searchForProduct('Laptop')
searchFunction.searchForProduct('Books')


// Your mission:
// - Create the class with the property
// - Create a method that takes an argument (like our GoogleSearchPage example)
// - Test your method with two different products
// - Follow the exact same pattern as our examples

console.log('--------------------------------------------------')


// Create a class called YouTubePage
// Add one property for expected page message: 'YouTube'
// Add three methods:
// 1. playVideo(): void - prints 'Playing video...'
// 2. pauseVideo(): void - prints 'Pausing video...'  
// 3. likeVideo(): void - prints 'Clicking like button...'
// Create an object and test ALL three methods


class YouTubePage{

    playVideo() : void {
        console.log('Playing video...')
    }

    pauseVideo() : void {
        console.log('Pausing video...')
    }

    likeVideo() : void {
        console.log('Clicking like button...')
    }

}

let validateButton = new YouTubePage()

validateButton.playVideo()
validateButton.pauseVideo()
validateButton.likeVideo()



// Your mission:
// - Create one class with multiple methods (like our LoginPage example)
// - All methods should be void (return nothing)
// - Test each method one by one
// - Use the same structure as our examples

console.log('--------------------------------------------------')


// Create a class called InstagramPage
// Add two properties:
// - expectedTitle: string = 'Instagram'
// - expectedWelcomeMessage: string = 'Welcome to Instagram'
//
// Add four methods:
// 1. clickHomeButton(): void - prints 'Clicking home button...'
// 2. typeUsernameAndPassword(username: string, password: string): void 
//    - prints 'typing username = ' + username
//    - prints 'typing password = ' + password
// 3. validatePostText(postText: string): boolean
//    - check if postText contains 'a'
//    - if yes return true, else return false
// 4. validateUsernameLength(username: string): boolean
//    - check if username length is more than 5
//    - if yes return true, else return false
//
// Create an object and test all methods:
// - Test clickHomeButton()
// - Test typeUsernameAndPassword() with 'john_doe' and 'password123'
// - Test validatePostText() with 'amazing photo' and print the result
// - Test validateUsernameLength() with 'bob' and print the result

class InstagramPage{

    expectedTitle: string = 'Instagram'
    expectedWelcomeMessage: string = 'Welcome to Instagram'

    clickHomeButton() : void{
        console.log('Clicking home button...')
    }

    typeUsernameAndPassword(username: string, password: string): void {
        console.log('typing username = ' + username)
        console.log('typing password = ' + password)
    }    

    validatePostText(postText: string): boolean {
        if(postText.includes('a')){
            return true
        }else {
            return false
        }
    }

    validateUsernameLength(username: string): boolean{
        if(username.length > 5){
            return true
        }else{
            return false
        }
    }
}

let testInstagramPage = new InstagramPage()
testInstagramPage.clickHomeButton()
testInstagramPage.typeUsernameAndPassword('john_doe', 'password123')
console.log(testInstagramPage.validatePostText('amazing photo'))
console.log(testInstagramPage.validateUsernameLength('bob'))



// Your mission:
// - Create methods with 2 arguments (like our FacebookLoginPage example)
// - Create methods that return boolean values (like validateMessage example)
// - Test each method and print the boolean results


console.log('--------------------------------------------------')


// Create a class called UserLoginTestPage
// Add three properties for validation:
// - expectedLoginTitle: string = 'Sign In'
// - expectedErrorMessage: string = 'Invalid credentials'
// - expectedSuccessMessage: string = 'Welcome back!'
//
// Add six methods for testing:
// 1. navigateToLoginPage(): void - prints 'Navigating to login page...'
// 2. enterCredentials(username: string, password: string): void 
//    - prints 'Entering username: ' + username
//    - prints 'Entering password: ' + password
// 3. clickLoginButton(): void - prints 'Clicking login button...'
// 4. validateCredentials(username: string, password: string, minLength: number): boolean
//    - check if BOTH username length >= minLength AND password length >= minLength
//    - if yes return true, else return false
// 5. validateEmailFormat(email: string): boolean
//    - check if email contains '@'
//    - if yes return true, else return false
// 6. validatePasswordStrength(password: string): boolean
//    - check if password length is more than 8
//    - if yes return true, else return false
//
// Create an object and perform complete testing:
// 1. Navigate to page
// 2. Enter credentials with 'testuser@email.com' and 'password123'
// 3. Click login button
// 4. Test validateCredentials() with 'bob', 'pass', 5 and print result
// 5. Test validateEmailFormat() with 'test@email.com' and print result
// 6. Test validatePasswordStrength() with 'short' and print result


class UserLoginTestPage{

    expectedLoginTitle: string = 'Sign In'
    expectedErrorMessage: string = 'Invalid credentials'
    expectedSuccessMessage: string = 'Welcome back!'

    navigateToLoginPage(): void {
        console.log('Navigating to login page...')
    }

    enterCredentials(username: string, password: string): void {
        console.log('Entering username: ' + username)
        console.log('Entering password: ' + password)
    }

    clickLoginButton(): void {
        console.log('Clicking login button...')
}

    validateCredentials(username: string, password: string, minLength: number): boolean{
        if(username.length >= minLength && password.length >= minLength){
            return true
        }else{
            return false
        }
    }

    validateEmailFormat(email: string): boolean{
        if(email.includes('@')){
            return true
        }else{
            return false
        }
    }

    validatePasswordStrength(password: string): boolean{
        if(password.length > 8){
            return true
        }else{
            return false
        }
    }
}

let testLoginFeatures = new UserLoginTestPage()

testLoginFeatures.navigateToLoginPage()
testLoginFeatures.enterCredentials('testuser@email.com', 'password123')
testLoginFeatures.clickLoginButton()
testLoginFeatures.validateCredentials('bob', 'pass', 5)
console.log(testLoginFeatures.validateEmailFormat('test@email.com'))
console.log(testLoginFeatures.validatePasswordStrength('short'))



// Your mission:
// - Create methods with 3 arguments (username, password, minLength)
// - Create validation methods that return boolean (like our class examples)
// - Test all validation methods and print the boolean results
// - This shows real QA validation patterns!