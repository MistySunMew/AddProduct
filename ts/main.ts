class VideoGame {
    title:string;
    price:number;
    rating:string;
    isDigitalOnly:boolean;
}

window.onload = function() {
    (<HTMLElement>document.querySelector("input[type=button]")).onclick = addVideoGame;
}

function $(id:string):HTMLElement {
    return document.getElementById(id)
}

function addVideoGame() {
    console.log("addVideoGame was called");

    if(isAllDataValid()) {
        let game = getVideoGame();
        displayGame(game);
    }
}

//TODO: fix adding errors to log
function isAllDataValid():boolean {
    let isAllValid:boolean = true;
    let errorDiv = $("errors");

    //Resets errors
    while (errorDiv.hasChildNodes()) {
        errorDiv.removeChild(errorDiv.firstChild);
    }
    
    //Checks if there is anything entered in title
    if((<HTMLInputElement>$("title")).value == "") {
        let enterTitle = document.createElement("p");
        enterTitle.innerText = "Please enter a game title";
        errorDiv.appendChild(enterTitle);

        isAllValid = false;
    }
    
    //Checks if price is a number and if it isn't adds error message
    if(isNaN(parseFloat((<HTMLInputElement>$("price")).value))) {
        let enterPrice = document.createElement("p");
        enterPrice.innerText = "Please enter a price for the game";
        errorDiv.appendChild(enterPrice);

        isAllValid = false;
    }

    //Checks if price is a number and if it isn't adds error message
    if((<HTMLInputElement>$("rating")).value == "Please choose a rating") {
        let chooseRating = document.createElement("p");
        chooseRating.innerText = "Please choose a rating for the game";
        errorDiv.appendChild(chooseRating);

        isAllValid = false;
    }    

    return isAllValid;
}
 
/**
 * Gets all game data from the form and returns it in a VideoGame object
 * @returns a VideoGame
 */
function getVideoGame():VideoGame {
    let game = new VideoGame;
    
    //Gets the title from the title input text box
    game.title = (<HTMLInputElement>$("title")).value;
    //Gets the number from the price input text box and parses it to a number
    game.price = parseFloat((<HTMLInputElement>$("price")).value);
    //Gets the rating from the rating list
    game.rating = (<HTMLInputElement>$("rating")).value;
    //Gets whether or not the game is only online
    game.isDigitalOnly = (<HTMLInputElement>$("online-only")).checked;
    
    console.log(game);
    return game;
}

/**
 * Displays the info inputted at the bottom of the webpage
 * @param myGame Game to add to webpage
 */
function displayGame(myGame:VideoGame):void {
    let displayDiv = $("display");

    //Create <h2> with game title
    let gameHeading = document.createElement("h2");
    gameHeading.innerText = myGame.title;

    //Create paragraph with game details
    let gameInfo = document.createElement("p");
    let notDigitalDisplay = "You can purchase a physical copy.";
    if(!myGame.isDigitalOnly) {
        notDigitalDisplay = "This is a digital only game."
    }
    gameInfo.innerText = `${myGame.title} has a rating of ${myGame.rating}. It costs $${myGame.price}. ${notDigitalDisplay}`;

    //adds info to bottom of page
    displayDiv.appendChild(gameHeading); 
    displayDiv.appendChild(gameInfo);
}