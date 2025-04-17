let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#resbtn");
let win = document.getElementById("win");
let winmsg = document.getElementById("msg");
let newbtn = document.getElementById("newgame");
let startBtn = document.getElementById('startBtn');
let player1 = document.getElementById('player1');
let player2 = document.getElementById('player2');
let container = document.getElementById('container');
let player1Select = document.getElementById('player1Symbol');
let player2Select = document.getElementById('player2Symbol');

let player1Name = "";
let player2Name = "";
let player1Symbol = "";
let player2Symbol = "";
let winner = "";
let turn = true;

const winpattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

startBtn.addEventListener('click', () => {
    player1Name = player1.value.trim();
    player2Name = player2.value.trim();
    player1Symbol = player1Select.value;
    player2Symbol = player2Select.value;

    if (!player1Name || !player2Name || !player1Symbol || !player2Symbol) {
        alert("Please enter both player names and their symbols.");
        return;
    }

    if (player1Symbol === player2Symbol) {
        alert("Players must choose different symbols.");
        return;
    }

    boxes.forEach(box => {
        box.disabled = false;
        box.innerText = "";
    });

    container.style.display = 'grid';
    turn = true;
    win.style.display = "none";
});

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (box.innerText !== "") return;

        box.innerText = turn ? player1Symbol : player2Symbol;
        box.disabled = true;
        turn = !turn;
        checkwinner();
    });
});

reset.addEventListener("click", () => {
    boxes.forEach(box => {
        box.innerText = "";
        box.disabled = false;
    });
    player1.value = "";
    player2.value = "";
    player1Select.value = "";
    player2Select.value = "";
    win.style.display = "none";
    container.style.display = "none";
});

newbtn.addEventListener("click", () => {
    boxes.forEach(box => {
        box.innerText = "";
        box.disabled = false;
    });
    win.style.display = "none";
    player1.value=''
    player2.value=''
    player1Select.value = "";
    player2Select.value = "";
    container.style.display = "none";
});

function checkwinner() {
    for (let pattern of winpattern) {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if (pos1 && pos1 === pos2 && pos2 === pos3) {
            winner = pos1;
            showwinner();
            return;
        }
    }
}

function showwinner() {
    win.style.display = "block";
    const winnerName = winner === player1Symbol ? player1Name : player2Name;
    winmsg.innerText = `🎉 Congratulations Winner is ${winnerName} (${winner})`;
}
