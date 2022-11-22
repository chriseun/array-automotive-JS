// let meats = ["beef", "pork", "lamb", "salmon", "tuna", "goat"];
// let veggies = ["cucumber", "olives", "carrots", "brocolli", "tomatoes", "musrooms"];
// let desserts = ["ice cream", "mochi", "crem brulee", "cookie", "waffles", "chocolate"]
// console.log(meats);
// console.log(veggies);
// console.log(desserts);
// meats.pop();
// veggies.pop();
// console.log(meats);
// console.log(veggies);

// let dessert = desserts[1];
// console.log(dessert);
// let mondayMenu = meats.concat(veggies).concat(desserts);
// console.log("Monday's Menu: " + mondayMenu);
// let x = 1;

// while (x<=10) {
//   	console.log(x)
// 	x++
// }

// for (let x = 0; x < 100; x++){
// 	console.log("I will not let other people fly")
// }
// function isTeenager(age){
//     // ?
// }

// function recommendSnack(age){
//     if(12 < age && age < 20){
//         return 'Cheetos'
//     } else {
//         return 'Wine & Gruyere'
//     }
// }

// function recommendApp(age){
//     if(12 < age && age < 20){
//         return 'Snapchat'
//     } else {
//         return 'Instagram'
//     }


//  let revenues = 0;

//  let expenses = 0;


// Question 4////////////////////////////////

// let totalRevenues = 0
// let totalExpenses = 0;


// function profit(revenues, expenses) {

//     for (let i = 0; i < revenues.length; i++) {

//         totalRevenues += revenues[i]
//     }

//     for (let j = 0; j < expenses.length; j++) {

//         totalExpenses += expenses[j]

//     }


//     let total = totalRevenues - totalExpenses
//     return total

// }

// console.log(profit([516000, 30000, 24000], [100000, 2800]))

// console.log(profit([5, 5, 5], [3, 3, 3]))
// console.log(profit([10, 10, 10], [2, 2, 2]))


// // Select the following elements from our HTML page:
// let myHandUl = document.querySelector('.my-hand')
// let playedCardsUl = document.querySelector('.played-cards')
// let drawCardButton = document.querySelector('.draw-card')

// function addCardToHand(){
//     // Make an li and give it the text of its suit and number.
//     let cardLi = document.createElement('li')
//     let cardName = drawCard()
//     cardLi.textContent = cardName

//     // Create a button to play the card.
//     let playButton = document.createElement('button')
//     playButton.textContent = 'Play'

//     // Add the play button to the Li card.
//     cardLi.append(playButton)

//     // Add the Li card to the list of all cards.
//     myHandUl.append(cardLi)

//     // When the play button is clicked, remove the Li card.
//     playButton.addEventListener('click', function(){
//         cardLi.remove()

//         playCard()
//     })
// }

// function playCard(){
//     let cardLi = document.createElement('li')

//     cardLi.textContent = '?' // <-- TO DO: Change this to the name of the card played.
// }


let groceryList = [
    'broccoli',
    'hot pockets',
    'ice cream',
    'chicken',
    'brown rice'
]

let list = []

for (let i =0; i < groceryList.length; i++){
    let listItem = Document.createElement('li')
}


let ul = document.createElement('ul')
document.body.append(ul)

let li = document.createElement('li')
document.body.appendChild('li')
