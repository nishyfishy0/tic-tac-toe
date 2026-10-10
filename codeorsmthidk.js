const b1 = document.getElementById("b1");
const b2 = document.getElementById("b2");
const b3 = document.getElementById("b3");
const b4 = document.getElementById("b4");
const b5 = document.getElementById("b5");
const b6 = document.getElementById("b6");
const b7 = document.getElementById("b7");
const b8 = document.getElementById("b8");
const b9 = document.getElementById("b9");

const winText = document.getElementById("winner");

const wins = [
    // horizontals
    [b1, b2, b3],
    [b4, b5, b6],
    [b7, b8, b9],

    // diagonals
    [b1, b5, b9],
    [b7, b5, b3],

    // verticals
    [b1, b4, b7],
    [b2, b5, b8],
    [b3, b6, b9],
];



var turn = "X";
var winner = null;
var count = 0;



function set(event) {
    if (winner == null) {
        const button = event.target;
        button.textContent = turn;
        button.disabled = true;
    }

    if (turn === "X") {
        turn = "O";
    } else {
        turn = "X";
    }

    if (!(button.disabled)) {
        for (const cond of wins) {
            var countX = cond.filter(btn => btn.textContent === "X").length;
            var countO = cond.filter(btn => btn.textContent === "O").length;
            
            count += (cond.filter(btn => btn.textContent !== "_").length ? 1 : 0);
    
            if (countX === 3) {
                winner = "X";
            } else if (countO === 3) {
                winner = "O";
            }
        }
    
        if (winner !== null) {
            winText.textContent = `${winner} has won.`;
        };
        
        if (count > 50 && winner === null) {
            winText.textContent = `Draw.`;
        };
    }
}



b1.addEventListener("click", set);
b2.addEventListener("click", set);
b3.addEventListener("click", set);
b4.addEventListener("click", set);
b5.addEventListener("click", set);
b6.addEventListener("click", set);
b7.addEventListener("click", set);
b8.addEventListener("click", set);
b9.addEventListener("click", set);
