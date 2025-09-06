class FaceBookLoginPage{

    typeUserNameAndPassword(userName: string, password: string) : void{
        console.log('typing username = ' + userName)
        console.log('typing password = ' + password)
    }



    validateMessage(expectedMessage: string) : boolean{
        if(expectedMessage.includes('a')){
            return true
        } else {
            return false
        }
    }

    validateTextLength(searchText: string) : boolean{
        if (searchText.length > 8){
            return true
        } else {
            return false
        }
    }

    findExclamationMark (userName : string) : boolean{
        if(!userName.includes('!')){
            return true
        }else {
            return false
        }
    }
}
let myFirstLoginPage = new FaceBookLoginPage()
myFirstLoginPage.typeUserNameAndPassword('Knopa', 'KnopaIsTheBest!')

