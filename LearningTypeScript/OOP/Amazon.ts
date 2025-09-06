// create class for amazon login page
// this is a void (returns NOTHING) method
// crete a type username and password method
// print both of them in your method

class AmazonLoginPage{
    typeUserNameAndPassword(userName: string, password: string) : void{
        console.log('typing username = ' + userName)
        console.log('typing password = ' + password)
    }
}
let myLoginPage1 = new AmazonLoginPage()
myLoginPage1.typeUserNameAndPassword('Knopa', 'KnopaIsTheBest!')