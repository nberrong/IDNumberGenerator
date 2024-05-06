'use strict';

const numberDigitsInID = 9;
let cardNumber = 0;
let generatedCards = [];
let MAXNUMBEROFCARDS = Math.pow(10, numberDigitsInID);
 
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
    let menu = document.getElementById("fixed-menu");
    let cardContainer = document.getElementById("card-container");

    form.style.display = "block";
    form.style.margin = "auto";
    menu.style.opacity = "0.3";
    cardContainer.style.opacity = "0.3";
}


function getName() {
    console.log('in getName');

    let firstName = document.getElementById("first-name").value;
    let lastName = document.getElementById("last-name").value;
    let newPerson = new Person(firstName, lastName);
    
    generateCard(newPerson);
}


function closeForm() {
    document.getElementById("name-form").style.display = "none";
    let cardContainer = document.getElementById("card-container");
    let menu = document.getElementById("fixed-menu");
    menu.style.opacity = "1.0";
    cardContainer.style.opacity = "1.0";
}


function clearInputFields() {
    document.getElementById("first-name").value = "";
    document.getElementById("last-name").value = "";
}

function generateCard(newPerson) {
    document.getElementById("name-form").style.display = "none";
    let menu = document.getElementById("fixed-menu");
    let cardContainer = document.getElementById("card-container");

    clearInputFields();

    menu.style.opacity = "1.0";
    cardContainer.style.opacity = "1.0";
    

    if (cardNumber < MAXNUMBEROFCARDS) {

    //    let newIdNumber = generateNumber();
        const newCard = document.createElement("div");
        const cardContainer = document.getElementById("card-container");

    //    let name = prompt("Please enter person's name:");
        
        cardNumber++;

        newCard.className = "card";
        newCard.innerHTML = 
            `<h2>Identification Card #${cardNumber}</h2>
            <p>${newPerson.fullName}
            <p>${newPerson.idNumber}</p>`

        scrollToBottom();
        
        cardContainer.appendChild(newCard);
        
        generatedCards.push(newPerson);
    
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
            if (numberString === generatedCards[i].idNumber) {
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