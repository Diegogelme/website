let currentSymbol = "X";
let trisMatrix = [      [null, null, null],
                        [null, null, null],
                        [null, null, null]
];
let isGameOver = false;
function setSymbol(i, j) {
    let cellId = 'cell-' + i + '-' + j;
    let clickedCell = document.getElementById(cellId);
    clickedCell.innerHTML = currentSymbol;
    //TODO 1: modifico la trisMatrix, aggiungendo il simbolo corrente nella cella corrispondente al pulsante cliccato    
    trisMatrix[i][j] = currentSymbol;
    clickedCell.disabled = true;
    check();
    //TODO 2 (serve funzione):controllo lo stato del gioco e valuto se vittoria o pareggio
    if (isGameOver) {
        return; 
    }

    if(hasEmptyCells() == false && isGameOver == false) {         isGameOver = true;
                    alert("Pareggio!");
    }
    
    if(currentSymbol === 'X') {        currentSymbol = 'O';
    }
    else {
        currentSymbol = 'X';
    }
}
function hasEmptyCells() {
   for(let i = 0; i < 3; i++) {
       for(let j = 0; j < 3; j++) {
           if(trisMatrix[i][j] == null) {
               return true;
           }
       }
   }
   return false;
}
function check() {
    
    let cond1 = currentSymbol === trisMatrix[0][0] && trisMatrix[0][0] === trisMatrix[0][1] && trisMatrix[0][1] === trisMatrix[0][2];
    
    let cond2 = currentSymbol === trisMatrix[1][0] && trisMatrix[1][0] === trisMatrix[1][1] && trisMatrix[1][1] === trisMatrix[1][2];
   
    let cond3 = currentSymbol === trisMatrix[2][0] && trisMatrix[2][0] === trisMatrix[2][1] && trisMatrix[2][1] === trisMatrix[2][2];
    
   
    let cond4 = currentSymbol === trisMatrix[0][0] && trisMatrix[0][0] === trisMatrix[1][0] && trisMatrix[1][0] === trisMatrix[2][0];
    
    let cond5 = currentSymbol === trisMatrix[0][1] && trisMatrix[0][1] === trisMatrix[1][1] && trisMatrix[1][1] === trisMatrix[2][1];
    
    let cond6 = currentSymbol === trisMatrix[0][2] && trisMatrix[0][2] === trisMatrix[1][2] && trisMatrix[1][2] === trisMatrix[2][2];
    
    let cond7 = currentSymbol === trisMatrix[0][0] && trisMatrix[0][0] === trisMatrix[1][1] && trisMatrix[1][1] === trisMatrix[2][2];
   
    let cond8 = currentSymbol === trisMatrix[0][2] && trisMatrix[0][2] === trisMatrix[1][1] && trisMatrix[1][1] === trisMatrix[2][0];
                  
    
    if(cond1 || cond2 || cond3 || cond4 || cond5 || cond6 || cond7 || cond8) {
        alert(currentSymbol + ' vince!');
        isGameOver = true;
    }
}
