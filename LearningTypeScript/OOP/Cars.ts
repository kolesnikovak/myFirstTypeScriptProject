class CarsLoginTestPage{
    signInMessage: string = 'Sign In to Cars.com'
    errorMessage: string = 'Invalid username or Password'
    welcomeMessage: string = 'Welcome back!'

    navigateToLoginPage() : void{
        console.log('Navigating to Cars.com login page...')
    }

    enterCredentials(username: string, password: string): void {
        console.log('Entering username: ' + username)
        console.log('Entering password: ' + password)
    }
}
let testLoginFeature = new CarsLoginTestPage()


testLoginFeature.navigateToLoginPage()
testLoginFeature.enterCredentials('BugBeat', 'BugBeatIsNumber1!')

console.log(testLoginFeature.signInMessage)
console.log(testLoginFeature.errorMessage)
console.log(testLoginFeature.welcomeMessage)

