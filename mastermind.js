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
        board.appendChild(row);
    }

}

createBoard();