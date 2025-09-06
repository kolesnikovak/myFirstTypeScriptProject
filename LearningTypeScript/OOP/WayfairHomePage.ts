// create a class for wayfairHomePage
// add a variable = anything worth to store for later, can be a message, title, etc.
// add a method for searching
    // it will take one argument searchText
    // it will return the search results as string[]
    // if the searchText is 'chair' then return something making sense
    // else if the searchText is 'couch' then return something making sense

// add another method for login
    // it will take 2 arguments username and password
    // it will return nothing
    // if the username length is less then 3 print 'Bad username!'
    // else 'Good username!'
    // if the password length is less then 8 'Bad password!'
    // else 'Good password!'



class WayfairHomePage{
    todaysDealMessage: string = 'Frigidaire Retro Fridge'

    searchMethod(searchText : string): string []{
        let searchResult: string [] = []
        if(searchText === 'chair'){
            searchResult = ['dining chair', 'bar chair', 'computer cgair']
        } else if(searchText === 'couch'){
            searchResult = ['leather couch', 'outdoor couch']
        }
        return searchResult
    }

    enterCredentials(username: string, password: string): void {
        if(username.length < 3){
            console.log('Bad Username!')
        }else {
            console.log('Good Username!')
        }

        if(password.length < 8){
            console.log('Bad Password!')
        }else{
            console.log('Good Pasword!')
        }
    }

}

