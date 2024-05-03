const numberDigitsInID = 9;
let cardNumber = 1;
let generatedCards = [];
let MAXNUMBEROFCARDS = Math.pow(10, numberDigitsInID);


function getRandomInt() {
    return Math.floor(Math.random() * 10);
}
  

function generateCard() {

    console.log(cardNumber + " / " + MAXNUMBEROFCARDS);

    if (cardNumber <= MAXNUMBEROFCARDS) {
        let newIdNumber = generateNumber();
        const newCard = document.createElement("div");
        const cardContainer = document.getElementById("card-container");
    
        newCard.className = "card";
        
        newCard.innerHTML = 
            `<h2>Identification Card #${cardNumber}</h2>
            <p>${newIdNumber}</p>`
        
        cardContainer.appendChild(newCard);
        
        generatedCards.push(newIdNumber);
        cardNumber++;
    
        console.log(generatedCards);
    } else {
        alert("Maximum number of cards issued!");
        
    }
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
    cardNumber = 1;
    generatedCards = [];
   
    const cards = document.getElementById("card-container");
    cards.innerHTML = "";
  
    console.log(cardNumber);
    console.log(generatedCards);
}
  