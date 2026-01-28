function createBoard() {
    for(var i = 0; i < 10; i++) {
        var row = document.createElement("div");
        row.id = "boardRow" + i;
        row.classList.add("boardRow");


        for (var m = 0; m < 4; m++) {
            var column = document.createElement("div");
            column.id = "boardColumn" + m
            column.classList.add("boardColumn")
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

// guess the computers colours
function playComputer() {

    // let computer select four random colours
    var colourArray = ["red", "blue", "yellow", "green", "purple", "pink"];
    var computerColourChoices = [];

    for (var i = 0; i < 4; i++) {
        var randomColour = Math.floor(Math.random() * coloursArray.length);
    }

}

createBoard();

document.getElementById("playComputerButton").addEventListener("click", playComputer);
