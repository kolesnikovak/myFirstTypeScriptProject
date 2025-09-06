// we wiil have 3 arrays
// 1 array for students
// 1 array for showing the online students
// 1 array for checking who is online today

import { start } from "repl"

let currentStudents = ["Vova", "Dima", "Anna", "Tanya", "Art", "Katya", "Arty"]
let onlineStudentsBatch1 = ["Anna", "Art", "Katya", "Arty", "Alina"]
let currentOnlineStudents: string [] = []



// today at the class we have currentStudents online in person
// we do also have onlineStudentsBatch1 who are in the batch online

//Give students from online who is at currently class today

//who we currently have currentOnlineStudents
// 1. crete a Loop
// 2. check every single currentStudents and if they are in the 
// onlineStudentsBatch1 then
// put them in the currentOnlineStudents

for (let i = 0; i < currentStudents.length; i++) {
    
if (onlineStudentsBatch1.includes(currentStudents[i])){

    currentOnlineStudents.push(currentStudents[i]) 

}

} 






// we are starting a trucking company
// we have truckInventory
// we have reliable trucks
// we have saved trucks
let truckInventory = ['RAM', 'Chevy', 'Ford', 'Suzuki', 'Freightliner', 'International']
let reliableTruck = ['RAM', 'Ford', 'Freightliner']
// if it is a reliable truck then we are saving
let savedTrucks: string[]  = []

for (let i = 0; i < truckInventory.length; i++){

    if (reliableTruck.includes(truckInventory[i])){
        savedTrucks.push(truckInventory[i])
    }

}


while(truckInventory.length > 0){
// !,?,?? -> filtering out underfined and null
    let currentTruck = truckInventory.pop()!
    if (reliableTruck.includes(currentTruck)){
        // reliable truck found
        savedTrucks.push(currentTruck)
    }


}











let gameItems = ['sword', 'shield', 'potion', 'armor', 'bow'];
let weapons = ['sword', 'bow'];
let defenseItems = ['shield', 'armor'];

let itemName: string[] = []

// Your mission:
// Use a fori loop to go through each item
// If item is in weapons → display "WEAPON: [item name]"
// Else if item is in defenseItems → display "DEFENSE: [item name]"
// Else → display "OTHER: [item name]"
// Think about:
// - How do you check multiple conditions?
// - What order should you check the conditions?
// - How do you display the category for each item?

for (let i = 0; i < gameItems.length; i++){

    if (weapons.includes(gameItems[i])){

         console.log('Weapon: ' + gameItems[i])

    }else if(defenseItems.includes(gameItems[i])){

        console.log('Defense: ' + gameItems[i])

    }else{

        console.log('Other: ' + gameItems[i])

    }


}




// while loop only
// We are managing a guest list
// We want to COUNT guests whose name starts with "S"
let guestList = ['Sam', 'John', 'Sophie', 'Mike', 'Steve', 'Emma']
// Task: Loop through guestList
// If name starts with 'S', increase guestCount
let guestCount = 0

while (guestList.length > 0){

    let currentGuest = guestList.pop()!

    if(currentGuest.startsWith('s')){
        guestCount++
    }

}
console.log ('guestCount = ' + guestCount)
 





// while loop only
// We are analyzing a list of words
// We want to COUNT words that start with 'a' or 'A'
let words = ['Apple', 'banana', 'Apricot', 'orange', 'avocado']
let aWordsCount = 0
// Task: Loop through words
// If word starts with 'a' or 'A', increase aWordsCount

while (words.length > 0){

    let currentWord = words.pop()!

    if (currentWord.startsWith('a')){
        aWordsCount++
    }

    if (currentWord.startsWith('A')){
        aWordsCount++
    }
}

console.log ('aWordsCount = ' + aWordsCount)



// while and fori loop
// We are reviewing customer emails
// We want to COUNT emails that end with "gmail.com"
let emails = ['alex@gmail.com', 'sara@yahoo.com', 'mike@gmail.com', 'emma@hotmail.com']
let gmailCount = 0
// Task: Loop through emails
// If email ends with "gmail.com", increase gmailCount

while (emails.length > 0){

    let currentEmail = emails.pop()!

    if(currentEmail.endsWith('gmail.com')){

        gmailCount++

    }

}

console.log ('gmailCount = ' + gmailCount)

//------------------------

let emails1 = ['alex@gmail.com', 'sara@yahoo.com', 'mike@gmail.com', 'emma@hotmail.com']
let gmailCount1 = 0

for (let i = 0; i < emails1.length; i++){

    if(emails1[i].endsWith('gmail.com')){
        gmailCount1++
    }
 
}
console.log ('gmailCount1 = ' + gmailCount1)














