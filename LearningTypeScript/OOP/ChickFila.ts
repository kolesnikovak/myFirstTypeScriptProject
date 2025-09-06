// Create a class for testing the Chick-fil-A mobile order login page
// Add three properties for validation:
// - The expected title text that should appear on the login screen
// - The message shown when login fails
// - The message shown when login succeeds
// 1. A method to navigate to the Chick-fil-A login screen
//    - It should print a message showing that the app is moving to the login page
// 2. A method to input the username and password
//    - It should print both the username and password being typed
// create a copy of your class
// and print class variables
// and call the 2 methods

class ChickFilA{

    greetingMessage: string = 'An original then, an original now'
    failedLogin: string = 'User name or password incorrect. Please try again'
    successLogin: string = 'Welcome to Chick-Fil-A'

    navigateToLoginPage() : void {
        console.log('Click on Sign In button')
    }

    typeUsernameAndPassword(username: string, password: string): void {
        console.log('Typing username = ' + username)
        console.log('Typing password = ' + password)
    }
}
 
let chickFilaLogin =  new ChickFilA()
console.log(chickFilaLogin.greetingMessage)
console.log(chickFilaLogin.failedLogin)
console.log(chickFilaLogin.successLogin)

chickFilaLogin.navigateToLoginPage()
chickFilaLogin.typeUsernameAndPassword('ILoveToEat', 'DeliciousChicken123)')



