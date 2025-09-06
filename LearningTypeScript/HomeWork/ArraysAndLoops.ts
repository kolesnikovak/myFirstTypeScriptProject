// We have fruits stored as a comma-separated string
                let fruits: string = 'apple,kiwi,mango,pear';

                // Your mission:
                // You need to examine each fruit individually
                let eachFuit = fruits.split(',')
                

                // For fruits that contain the letter 'a' → display "EATING: [fruit name]"
                for (let i = 0; i < eachFuit.length; i++){

                    if(eachFuit[i].includes('a')){
                        console.log('EATING: ' + eachFuit[i])
                    
                    } else if (!eachFuit[i].includes('a')){
                        console.log('THROWING: ' + eachFuit[i]) 
                    }

                }
                // For fruits that don't contain 'a' → display "THROWING AWAY: [fruit name]"

                // Think about:
                // - How can you work with each fruit separately?
                // - How can you check every fruit one by one?
                // - How can you determine if a fruit contains a specific letter?


                console.log('-----------------------------------------------')


                // We have drinks stored as a comma-separated string




let drinks: string = 'cola,water,tea,juice,milk'; 


// Your mission: 

// You need to examine each drink and categorize them with these priorities: 

// - First priority: drinks that contain the letter 'a' → display "DRINKING: [drink name]"

// - Second priority: drinks that begin with the letter 't' → display "TASTING: [drink name]" // - Everything else → display "SKIPPING: [drink name]"


let eachDrink = drinks.split(',')


for (let i = 0; i < eachDrink.length; i++){


    if (eachDrink[i].startsWith('a')){

       console.log('DRINKING: ' + eachDrink[i])


       } else if (eachDrink[i].startsWith('t')){

           console.log('TASTING: ' + eachDrink[i]) 


      } else {

           console.log('SKIPPING: ' + eachDrink[i])

}


}
