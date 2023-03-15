const gameContainer = document.getElementById("game");

const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple"
];

// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledColors = shuffle(COLORS);

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    // create a new div
    const newDiv = document.createElement("div");

    // give it a class attribute for the value we are looping over
    newDiv.classList.add(color);

    // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener("click", handleCardClick);

    // append the div to the element with an id of game
    gameContainer.append(newDiv);
  }
}

// TODO: Implement this function!
let revealedCards = 0;
let firstCard = null;
let secondCard = null;
function handleCardClick(event) {
  
  let clickedCard = event.target;

  clickedCard.style.backgroundColor = clickedCard.className;

  if(!firstCard || !secondCard) {
    firstCard = firstCard || clickedCard;
    secondCard = clickedCard === firstCard ? null : clickedCard;
    console.log(`Your firstCard is: ${firstCard}`)
    console.log(`Your secondCard is: ${secondCard}`)
  }

  if(firstCard && secondCard) {
    if(firstCard.className === secondCard.className) {
      revealedCards += 2;
      firstCard.removeEventListener('click', handleCardClick);
      secondCard.removeEventListener('click', handleCardClick);
      firstCard = null;
      secondCard = null;
    } else {
      setTimeout(function() {
        firstCard.style.backgroundColor = '';
        secondCard.style.backgroundColor = '';
        firstCard = null;
        secondCard = null;
      }, 1000);
    }
  }
  if(revealedCards === COLORS.length) {
    alert('You Did It!')
  }
};
 
// // when the DOM loads
createDivsForColors(shuffledColors);

/////////////////////////////////////////////////////////////////////////

// let clicks = 0;
// let firstCard = null;
// let secondCard = null;
// function handleCardClick(event) {
//   // you can use event.target to see which element was clicked
//   console.log("you just clicked", event.target);
//   // console.log(event);

//   event.target.style.backgroundColor = event.target.className;

//   clicks++;
//   console.log(clicks);
  
//   if(clicks === 1) {
//     firstCard = event.target;
//   } 
//   if (clicks === 2) {
//     secondCard = event.target;
//   }
 
//   console.log(`Your first card is: ${firstCard}`);
//   console.log(`Your second card is: ${secondCard}`);

//   let divFirstCard = document.querySelector(`div[class=${firstCard}]`);
//   let divSecondCard = document.querySelector(`div[class=${secondCard}]`);

   
//   if(firstCard === secondCard) {
//     // remove eventListener
//     divFirstCard.removeEventListener('click', handleCardClick);
//     divSecondCard.removeEventListener('click', handleCardClick);
//     firstCard = null;
//     secondCard = null;
//   } else {
//     setTimeout(function() {
//       divFirstCard.style.backgroundColor = '';
//       divSecondCard.style.backgroundColor = '';
//       firstCard = null;
//       secondCard = null;
//     }, 1000);
//   }
// };



/////////////////////////////////////////////////////////////////////////////

  // const assignedDiv = document.querySelector(`div[class=${event.target.className}]`);
  // console.log(assignedDiv);
  // assignedDiv.classList.add(`${event.target.className}Clicked`);
  
  // if(assignedDiv)


 
  // if(event.target) {
  //   document.querySelector(`.${color}`);
  //   document.className.add(color);
  // } else {
  //   document.className.remove(color);
  // }
