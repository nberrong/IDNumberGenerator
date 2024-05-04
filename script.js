'use strict';

const numberDigitsInID = 9;
let cardNumber = 0;
let generatedCards = [];
let MAXNUMBEROFCARDS = Math.pow(10, numberDigitsInID);
const generateButton = document.querySelector('generate-btn');

class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = `${firstName} ${lastName}`;
        this.idNumber = generateNumber();
    }
}

function openForm() {
    let form = document.getElementById("name-form");
    form.style.display = "block";
    form.style.margin = "auto";
}


function closeForm() {
    document.getElementById("name-form").style.display = "none";
}


function generateCard() {

    if (cardNumber < MAXNUMBEROFCARDS) {

    //    let newIdNumber = generateNumber();
        const newCard = document.createElement("div");
        const cardContainer = document.getElementById("card-container");

    //    let name = prompt("Please enter person's name:");
        let person = new Person (name);
        console.log(Person.fullName);
        cardNumber++;

        newCard.className = "card";
        newCard.innerHTML = 
            `<h2>Identification Card #${cardNumber}</h2>
            <p>${person.fullName}
            <p>${person.idNumber}</p>`

        scrollToBottom();
        
        cardContainer.appendChild(newCard);
        
        generatedCards.push(person.idNumber);
    
        console.log(cardNumber + " / " + MAXNUMBEROFCARDS);
        console.log(generatedCards);

    } else {
        alert("Maximum number of cards issued!");
    }
} 
  

function getRandomInt() {
    return Math.floor(Math.random() * 10);
}
  
    
function generateNumber() {
 
    let digits = new Array(); 
    let numberString = "";
    let uniqueNumber = true;
  
    do {
        uniqueNumber = true;
    
    for (let i = 0; i < numberDigitsInID; i++) {
            let x = getRandomInt();
            if (i === 3 || i === 5) {
                digits.push('-');
            }
            digits.push(x);
        }
    
        numberString = digits.join('');
        
        // make sure new number is unique
        for (let i=0; i < generatedCards.length; i++) {
            if (numberString === generatedCards[i]) {
                uniqueNumber = false;
                digits = [];
                console.log("duplicate:" + numberString);
            }
        } 
    } while (uniqueNumber === false);

    return numberString;
}
  
  
function clearCards() {
    cardNumber = 0;
    generatedCards = [];
   
    const cards = document.getElementById("card-container");
    cards.innerHTML = "";
  
    console.log(cardNumber);
    console.log(generatedCards);
}
  

function scrollToBottom() {
    // Use setTimeout to allow DOM updates before scrolling
    setTimeout(() => {
      window.scrollTo(0, document.body.scrollHeight);
    }, 0);
  }