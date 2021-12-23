/**********************************************************************************************************
 * Author: Mustafa Al-Obeid
 * Date modified: 22/11/2021
 * Purpose: Generate random messages
************************************************************************************************************/



let noun = ['a person', 'a dog', 'a cat', 'a firefighter', 'a chicken', 'a delivery'];
let verb = ['walking', 'ruining', 'jumping', 'sliding', 'flying', 'lifiting'];
let adjective = ['Quickly', 'smoothly', 'sadly', 'happly', 'beautifly', 'amazingly'];




const generateRandomNumber = () =>{

    return Math.floor(Math.random() * noun.length);
}



const displayMessage = () =>{


    console.log(`${noun[generateRandomNumber()]} will be ${verb[generateRandomNumber()]} ${adjective[generateRandomNumber()]}`);
}

displayMessage();