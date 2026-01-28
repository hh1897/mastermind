// colour selection
var colourSelection = "none";
var round = 0;
var completed = false;

function optionSelected() {
    if (colourSelection == "none") {
        return;
    }
    if (this.parentNode.id[8] != round) {
        return;
    }
    this.style.backgroundColor = colourSelection;
}


function createBoard() {
    for(var i = 0; i < 10; i++) {
        var row = document.createElement("div");
        row.id = "boardRow" + i;
        row.classList.add("boardRow");


        for (var m = 0; m < 4; m++) {
            var column = document.createElement("div");
            column.id = "boardColumn" + m
            column.classList.add("boardColumn")
            column.addEventListener("click", optionSelected);
            row.appendChild(column);
        }

        var board = document.getElementById("colourBoard")
        // create marking for row
        var markContainer = document.createElement("div");
        for (var n = 0; n < 4; n++) {
            if (n == 0) {
                markContainer.id = "markContainer" + n;
                markContainer.classList.add("markContainer");
                row.appendChild(markContainer)
            }
            var mark = document.createElement("div");
            mark.classList.add("mark");
            mark.id = "mark" + n;
            markContainer.appendChild(mark)
        }
        board.appendChild(row);
    }

    

}




function changeBorderColour() {
    var colourOptions = document.getElementsByClassName("colours");
    for (var i = 0; i < colourOptions.length; i++) {
        colourOptions[i].style.borderColor = "black";
    }
    
}
// red selected
function redSelected() {
    colourSelection = "red";
    changeBorderColour();
    this.style.borderColor = "green";
}
// blue selected
function blueSelected() {
    colourSelection = "blue";
    changeBorderColour();
    this.style.borderColor = "green";
}
// yellow selected
function yellowSelected() {
    colourSelection = "yellow";
    changeBorderColour();
    this.style.borderColor = "green";
}
// green selected
function greenSelected() {
    colourSelection = "green";
    changeBorderColour();
    this.style.borderColor = "green";
}
// purple selected
function purpleSelected() {
    colourSelection = "purple";
    changeBorderColour();
    this.style.borderColor = "green";
}
// pink selected
function pinkSelected() {
    colourSelection = "pink";
    changeBorderColour();
    this.style.borderColor = "green";
}


function getUserGuess(round) {

}

// guess the computers colours
function playComputer() {

    // let computer select four random colours
    var colourArray = ["red", "blue", "yellow", "green", "purple", "pink"];
    var computerColourChoices = [];

    for (var i = 0; i < 4; i++) {
        var randomColour = Math.floor(Math.random() * colourArray.length);
        computerColourChoices.push(colourArray[randomColour])
    }

    while (completed == false || round > 9) {
        // green peg means right colour and position
        // white peg means right colour but wrong position

        // get user's colour input
        getUserGuess(round);
    }

}

createBoard();

document.getElementById("playComputerButton").addEventListener("click", playComputer);
document.getElementById("redOption").addEventListener("click", redSelected);
document.getElementById("blueOption").addEventListener("click", blueSelected);
document.getElementById("yellowOption").addEventListener("click", yellowSelected);
document.getElementById("greenOption").addEventListener("click", greenSelected);
document.getElementById("purpleOption").addEventListener("click", purpleSelected);
document.getElementById("pinkOption").addEventListener("click", pinkSelected);