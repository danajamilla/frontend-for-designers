// JavaScript Document
console.log("welkom");

// buttons aanspreken
var buttonLike  = document.querySelector("button#like");
var buttonHate  = document.querySelector("button#hate");

buttonLike.addEventListener("click", quoteLiken);
buttonHate.addEventListener("click", quoteHaten);

function quoteLiken() {
    nieuweQuote();
    updateWishlist();
}

function quoteHaten() { 
    nieuweQuote();
}


// quotelijst
var quoteLijst = [
    "Keep going, because you did not come this far to come this far", 
    "The struggle is the part of the journey", 
    "Dreams don't work unless you do",
    "Push harder than yesterday if you want a different tomorrow",
    "Work hard in silence, let success make the noise",
    "Be a warrior, not a worrier",
    "Failure is not the opposite of success, it is part of success",
    "Believe you can and you're halfway there",
    "Don't give up, the beginning is always the hardest"
];

function nieuweQuote() {
    var pElement = document.querySelector("p"); 
    var randomQuote = Math.random()*quoteLijst.length;
    
    randomQuote = Math.floor(randomQuote);
    pElement.textContent = quoteLijst[randomQuote];
    
    // console.log(quoteLijst[0]);
}

// app openen
nieuweQuote();



/* de Wishlist in de nav in de header updaten */
/* de action die meegegeven wordt, is "plus" of "min" */
function updateWishlist() {
  /* het getal (de span) in de Wishlist-link in de nav opzoeken */
  /* die span in de variabele 'loveListAmount' opslaan */
  let wishlistAmount = document.querySelector("div button#like span");
  
  /* het huidige aantal gele hartjes bepalen */
  let currentAmount = wishlistAmount.innerHTML;
  /* dat is een string - dus even omzetten naar een getal */
  currentAmount = parseInt(currentAmount);
  
  /* het nieuwe aantal gele hartjes bepalen */
  /* te beginnen met een variabele om het nieuwe aantal in op te slaan */
  let newAmount = currentAmount + 1;
  
  /* tenslotte het nieuwe aantal in de HTML zetten */
  wishlistAmount.innerHTML = newAmount;
}

// swipen

var deQuote = document.querySelector('.quote');

var deQuoteHammer = new Hammer(deQuote);
deQuoteHammer.on("swipeleft", quoteLiken);
deQuoteHammer.on("swiperight", quoteHaten);
