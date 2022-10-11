var VideoGame = (function () {
    function VideoGame() {
    }
    return VideoGame;
}());
window.onload = function () {
    document.querySelector("input[type=button]").onclick = addVideoGame;
};
function $(id) {
    return document.getElementById(id);
}
function addVideoGame() {
    console.log("addVideoGame was called");
    if (isAllDataValid()) {
        var game = getVideoGame();
        displayGame(game);
    }
}
function isAllDataValid() {
    var isAllValid = true;
    var errorDiv = $("errors");
    while (errorDiv.hasChildNodes()) {
        errorDiv.removeChild(errorDiv.firstChild);
    }
    if ($("title").value = "") {
        var enterTitle = document.createElement("p");
        enterTitle.innerText = "Please enter a game title";
        errorDiv.appendChild = enterTitle;
        isAllValid = false;
    }
    if (isNaN(parseFloat($("price").value))) {
        var enterPrice = document.createElement("p");
        enterPrice.innerText = "Please enter a price for the game";
        errorDiv.appendChild = enterPrice;
        isAllValid = false;
    }
    if ($("rating").value == "Please choose a rating") {
        var chooseRating = document.createElement("p");
        chooseRating.innerText = "Please choose a rating for the game";
        errorDiv.appendChild = chooseRating;
        isAllValid = false;
    }
    return isAllValid;
}
function getVideoGame() {
    var game = new VideoGame;
    game.title = $("title").value;
    game.price = parseFloat($("price").value);
    game.rating = $("rating").value;
    game.isDigitalOnly = $("online-only").checked;
    console.log(game);
    return game;
}
function displayGame(myGame) {
    var displayDiv = $("display");
    var gameHeading = document.createElement("h2");
    gameHeading.innerText = myGame.title;
    var gameInfo = document.createElement("p");
    var notDigitalDisplay = "You can purchase a physical copy.";
    if (!myGame.isDigitalOnly) {
        notDigitalDisplay = "This is a digital only game.";
    }
    gameInfo.innerText = "".concat(myGame.title, " has a rating of ").concat(myGame.rating, ". It costs $").concat(myGame.price, ". ").concat(notDigitalDisplay, ".");
    displayDiv.appendChild(gameHeading);
    displayDiv.appendChild(gameInfo);
}
