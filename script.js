function initialize() {
    prTokens = document.getElementById('prTokens');
    pbTokens = document.getElementById('pbTokens');
    crTokens = document.getElementById('crTokens');
    cbTokens = document.getElementById('cbTokens');
    rdie = document.getElementById('rdie');
    bdie = document.getElementById('bdie');
    winner = document.getElementById('winner');

    prNum = 12;
    pbNum = 12;
    crNum = 12;
    cbNum = 12;
    num1 = 0;
    num2 = 0;
    run = true;

    moveTable = document.getElementById('movetable');
    rollDice();
}

function rollDice() {
    num1 = Math.floor(Math.random() * 6) + 1;
    num2 = Math.floor(Math.random() * 6) + 1;
    display();
}

function recordMoves(move) {
    msg = '';
    if (move === 1) { msg = "Added " + num1 + " red tokens to own pile. Removed " 
    + num2 + " black tokens from opponent's pile."; }
    else if (move === 2) { msg = "Added " + num2 + " black tokens to own pile. Removed " 
    + num1 + " red tokens from opponent's pile."; }
    else if (move === 3) { msg = "Removed " + num1 + " red tokens from own pile. Added " 
    + num2 + " black tokens to opponent's pile."; }
    else { msg = "Removed " + num2 + " black tokens from own pile. Added " 
    + num1 + " red tokens to opponent's pile."; }
    newRow = moveTable.insertRow();
    newCell = newRow.insertCell();
    newCell.innerHTML = msg;

    setTimeout(() => {
        rollDice();
        cPlay = Math.floor(Math.random() * 4) + 1;
        if (cPlay === 1) { cPlusRed(); }
        else if (cPlay === 2) { cPlusBlack(); }
        else if (cPlay === 3) { cMinusRed(); }
        else { cMinusBlack(); }
        newCell = newRow.insertCell();
        newCell.innerHTML = cMove;
    }, 500);
}

function plusRed() {
    prNum+=num1;
    cbNum-=num2;
    if (run) {display();}
}

function cPlusRed() {
    crNum+=num1;
    pbNum-=num2;
    cMove = "Added " + num1 + " red tokens to own pile. Removed " 
    + num2 + " black tokens from opponent's pile.";
    if (run) {display();}
}

function plusBlack() {
    pbNum+=num2;
    crNum-=num1;
    if (run) {display();}
}

function cPlusBlack() {
    cbNum+=num2;
    prNum-=num1;
    cMove = "Added " + num2 + " black tokens to own pile. Removed " 
    + num1 + " red tokens from opponent's pile.";
    if (run) {display();}
}

function minusRed() {
    prNum-=num1;
    cbNum+=num2;
    if (run) {display();}
}

function cMinusRed() {
    crNum-=num1;
    pbNum+=num2;
    cMove = "Removed " + num1 + " red tokens from own pile. Added " 
    + num2 + " black tokens to opponent's pile.";
    if (run) {display();}
}

function minusBlack() {
    pbNum-=num2;
    crNum+=num1;
    if (run) {display();}
}

function cMinusBlack() {
    cbNum-=num2;
    prNum+=num1;
    cMove = "Removed " + num2 + " black tokens from own pile. Added " 
    + num1 + " red tokens to opponent's pile.";
    if (run) {display();}
}

function display() {
    if (prNum < 0) {prNum = 0;}
    if (pbNum < 0) {pbNum = 0;}
    if (crNum < 0) {crNum = 0;}
    if (cbNum < 0) {cbNum = 0;}
    if (pbNum <= 0 || cbNum <= 0)
    {
        winner.innerHTML = prNum > crNum ? 'Winner is Player!' : 'Winner is Computer!';
        run = false;
    }
    prTokens.innerHTML = prNum;
    pbTokens.innerHTML = pbNum;
    crTokens.innerHTML = crNum;
    cbTokens.innerHTML = cbNum;
    rdie.innerHTML = num1;
    bdie.innerHTML = num2;
}