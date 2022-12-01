function getCharacterOfAlphabet(index){
    let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    return alphabet.charAt(index - 1);
}

function getHorizontalBorder(){
    let horizontalBorder = ""
    for(i = 0; i < 10; i++){
        if(i == 0 || i == 9){
            horizontalBorder += '<div class="grid-item"></div>';
        } else {
            horizontalBorder += '<div class="grid-item">' + getCharacterOfAlphabet(i) + '</div>';
        }
    }
    return horizontalBorder;
}

function getVerticalBorder(){
    let verticalBorder = "";
    for(i = 0; i < 8; i++){
        verticalBorder += 
            '<div class="grid-item">' + i + '</div>' + 
            '<div class="grid-item">' + i + '</div>';
    }
    return verticalBorder;
}

function buildBorder(){
    let border = "";
    border += getHorizontalBorder();
    border += getVerticalBorder();
    border += getHorizontalBorder();
    return border;
}

function getFields(index){   
    if(index % 2 == 1){
        return '<div class="grid-item white"></div>';
    }
    if(index % 2 == 0){
        return '<div class="grid-item black"></div>';
    }
}

function buildBoard(){
    let board = "";
    for(let i = 1; i < 72; i++){
        if(i % 9 == 0){
            i++;
        }
        board += getFields(i);
    }
    return board;
}

function buildOutput(){
    let output = 
        '<div class="item-board">' +
            '<div class="grid-container size8" id="board">' +
                buildBoard() +  
            '</div>' +
        '</div>';
    output += buildBorder();
    return output;   
}

function displayBoard(){
    let output = document.getElementById("output-area");
    output.innerHTML = buildOutput();
}