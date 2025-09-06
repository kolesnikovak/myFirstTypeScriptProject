



class GoogleSearchPage{
// void means returns NOTHING
//an argument means force something to give a data

    searchForText(searchText: string): void {
        console.log('Searching ' + searchText)
    }

}

let myFirstGooglePageVisit = new GoogleSearchPage()

myFirstGooglePageVisit.searchForText('Porsche')
myFirstGooglePageVisit.searchForText('Aston Martin')