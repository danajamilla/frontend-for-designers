console.log("welcome");

// buttons aanspreken
var buttonLike  = document.querySelector("button#like");
var buttonHate  = document.querySelector("button#hate");

buttonLike.addEventListener("click", quoteLiken);
buttonHate.addEventListener("click", quoteHaten);

function quoteLiken() {
    newQuote();
    updateFavorites();
}

function quoteHaten() { 
    newQuote();
}


// quotelijst
var quoteList = [
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

function newQuote() {
    var pElement = document.querySelector("p"); 
    var randomQuote = Math.random()*quoteList.length;
    
    randomQuote = Math.floor(randomQuote);
    pElement.textContent = quoteList[randomQuote];
}

// app openen
newQuote();

// optellen bij klikken op de like button
function updateFavorites() {
  let favoriteAmount = document.querySelector("h2");
  let currentAmount = favoriteAmount.innerHTML;
  
  currentAmount = parseInt(currentAmount);

  let newAmount = currentAmount + 1; //bij elke klik komt er +1 bij
  
  favoriteAmount.innerHTML = newAmount; //het nieuwe getal wordt in de html gezet
}

// navigeren dmv swipen
var theQuote = document.querySelector('.quote'); //ophalen uit html

var theQuoteHammer = new Hammer(theQuote); //code sanne
theQuoteHammer.on("swipeleft", quoteLiken); //als je links swiped, voert hij like functie uit
theQuoteHammer.on("swiperight", quoteHaten); //als je rechts swiped, voert hij hate functie uit


// navigeren dmv linker en rechter toetsenbord knop
document.addEventListener("keydown", keyPressed);

function keyPressed(event) {
    if (event.code == "ArrowRight"){    //als je op toetsenbord pijl rechts klikt, voert hij hate functie uit
        quoteHaten();
    }
    else if (event.code == "ArrowLeft"){   //en anders als je op toetsenbord pijl links klikt, voert hij like functie uit
        quoteLiken();
    }
}