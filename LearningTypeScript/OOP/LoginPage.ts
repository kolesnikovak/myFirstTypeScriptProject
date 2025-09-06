class LoginPage {
// access modifier -> 
// most restrictive = const
// med restrictive = let
// less restrictive = var

//variable
   expetctedLoginMessage: string = "FacebookConnect with friends and the world"

//methods = acrions (typing, clicking, scrolling)
//methodNAme() : void, boolean, string[], any{
//}
typingUsername(username : string) : void{

    console.log('Typing ' + username)

}

typingPassword() : void {

 }

 clickingTheLoginButton() : void{

console.log('Clicking the login button')

 }




}



 // object of your class
 // take a copy of your class
 // new -> create a NEW copy

 let myLoginPage = new LoginPage()

 myLoginPage.typingUsername('Vova')
// myLoginPage.typingPassword
// myLoginPage.clickingTheLoginButton























class FacebookLoginPage {

    typingThePassword(myPassword: string) : void{

        console.log('Typing password: ' + myPassword)
    }
}

let password = new FacebookLoginPage()

password.typingThePassword('Password')
