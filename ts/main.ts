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

//TODO ADD VALIDATION CODE************************************************************************************
function isAllDataValid() {
    return true;
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

function displayGame(myGame:VideoGame):void {
    //TODO: display video game below the form
    let displayDiv = $("display");

    //Creat <h2> with game title
    let gameHeading = document.createElement("h2");
    gameHeading.innerText = myGame.title;

    //Create paragraph with game details
    let gameInfo = document.createElement("p");
    let notDigitalDisplay = "You can purchase a physical copy.";
    if(!myGame.isDigitalOnly) {
        notDigitalDisplay = "This is a digital only game."
    }
    gameInfo.innerText = `${myGame.title} has a rating of ${myGame.rating}. It costs $${myGame.price}. ${notDigitalDisplay}.`

    //adds info to bottom of page
    displayDiv.appendChild(gameHeading); 
    displayDiv.appendChild(gameInfo);
}