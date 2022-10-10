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
    console.log("addVideoGame  was called");
    if (isAllDataValid()) {
        var game = getVideoGame();
        displayGame(game);
    }
}
function isAllDataValid() {
    return true;
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
}
