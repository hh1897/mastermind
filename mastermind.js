// colour selection
var colourSelection = "none";
var round = 0;
var completed = false;
var computerColourChoices = [];
var matches = [];

function getUserGuess(round) {
   

    var userGuess = [];
    var userColoursGroup = document.getElementById("boardRow" + round).childNodes

    for (var i = 0; i < 4; i++) {
        //var colour = userColoursGroup[i].getPropertyValue("background-color");
        var colour = document.getElementById("boardRow" + round).childNodes[i].style.backgroundColor
        if (colour == "none") {
            // missing colour
            // need user to pick colour
            var messageDiv = document.createElement("div").innerText("Need all colours");
            document.getElementById("boardRow" + round).appendChild(messageDiv);
        }
        else {
            userGuess.push(colour);
        }
    }

    // compare user colour choices to computer choices. right colour, right place
    matches = [];
    for (var m = 0; m < computerColourChoices.length; m++) {
        if (userGuess[m] == computerColourChoices[m]){
            matches.push(true);
            
        }
        else {
            matches.push(false);
        }
    }
   

    // get marker container and mark green pegs
    var markers = document.getElementById("markContainer" + round).childNodes; 

    for (var a = 0; a < 4; a++) {
        var marker = document.getElementById("markContainer" + round).childNodes[a]
        if (matches[a] == true) {
            marker.style.backgroundColor = "green";
        }
    }


    // check for matching colours in wrong places
    for (var i = 0; i < matches.length; i++) {
        if (matches[i] == false) {
            for (var c = 0; c < 4; c++) {
                // look for colour in other position in computerchoice
                if((userGuess[i] == computerColourChoices[c]) && (matches[c] == false)) {
                    var marker = document.getElementById("markContainer" + round).childNodes[i];
                    marker.style.backgroundColor = "white";
                }
            }
        }
    }
    
}

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
        var goButton = document.createElement("button");
        goButton.id = "goButton" + i;
        goButton.classList.add("goButtons");
        goButton.innerText = "GO";
        goButton.disabled = true;
        goButton.onclick = function() {getUserGuess(round)};
        row.appendChild(goButton);
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




// guess the computers colours
function playComputer() {

    computerColourChoices = [];
    // let computer select four random colours
    var colourArray = ["red", "blue", "yellow", "green", "purple", "pink"];
    

    for (var i = 0; i < 4; i++) {
        var randomColour = Math.floor(Math.random() * colourArray.length);
        computerColourChoices.push(colourArray[randomColour])
    }

    /*
    while (completed == false || round > 9) {
        // green peg means right colour and position
        // white peg means right colour but wrong position

        // get user's colour input
        getUserGuess(round);
    }
    */

     // activate round zero GO button
    var goButton = document.getElementById("goButton" + round);
    goButton.disabled = false;
}

createBoard();



document.getElementById("playComputerButton").addEventListener("click", playComputer);
document.getElementById("redOption").addEventListener("click", redSelected);
document.getElementById("blueOption").addEventListener("click", blueSelected);
document.getElementById("yellowOption").addEventListener("click", yellowSelected);
document.getElementById("greenOption").addEventListener("click", greenSelected);
document.getElementById("purpleOption").addEventListener("click", purpleSelected);
document.getElementById("pinkOption").addEventListener("click", pinkSelected);

// activate round 0 button 
//var goButton0 = document.getElementById("goButton" + 0);
//goButton0.disabled = false;
