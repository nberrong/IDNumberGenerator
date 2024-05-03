const numberDigitsInID = 2;
let clickNumber = 0;
let generatedCards = [];


function getRandomInt() {
    return Math.floor(Math.random() * 9);
}
  

function generateCard() {
    let newIdNumber = generateNumber();
    const newCard = document.createElement("div");
    const cardContainer = document.getElementById("card-container");
  
    do {
      newIdNumber = generateNumber();
    } while (newIdNumber === "duplicate");
    
    newCard.className = "card";
    
    clickNumber++;
    
    newCard.innerHTML = `<h2>Identification Card #${clickNumber}</h2>
    <p>${newIdNumber}</p>`
    
    cardContainer.appendChild(newCard);
    
    generatedCards.push(newIdNumber);
    console.log(generatedCards);
} 
  
    
function generateNumber() {
    const digits = new Array(); // Array to hold our values.
  
    for (let i = 0; i < numberDigitsInID; i++) {
        let x = getRandomInt();
        if (i === 3 || i === 5) {
            digits.push('-');
        }
        digits.push(x);
    }
  
    let numberString = digits.join('');
    
    // make sure new number is unique
    for (let i=0; i < generatedCards.length; i++) {
        if (numberString === generatedCards[i]) {
            numberString = "duplicate";
            console.log("duplicate");
            return numberString;
        }
    } 
    return numberString;
}
  
  
function clearCards() {
    clickNumber = 0;
    generatedCards = [];
   
    const cards = document.getElementById("card-container");
    cards.innerHTML = "";
  
    console.log(clickNumber);
    console.log(generatedCards);
}
  