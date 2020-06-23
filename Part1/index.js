let progress = [];

function play(onclick) {
let players = document.getElementById("player");
let clicker = document.getElementById(onclick);

    if(players.innerText === "X"){
        players.innerText ="O";
        clicker.innerText ="X";
        progress[onclick] = "X";                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
    } else {
        players.innerText = "X";
        clicker.innerText = "O";
        progress[onclick] = "O";
    }

console.log(progress)

const topLeft = progress[0];
const topCenter = progress[1];
const topRight = progress[2];
const middleLeft = progress[3];
const middleCenter = progress[4];
const middleRight = progress[5];
const bottomLeft = progress[6];
const bottomCenter = progress[7];
const bottomRight = progress[8];

if (topLeft !== undefined && topLeft === topCenter && topLeft === topRight) {
    alert(`${topLeft} is the winner`);

}
    if (middleLeft !== undefined && middleLeft === middleCenter && middleLeft === middleRight) {
    alert(`${middleLeft} is the winner`);
}
    if (bottomLeft !== undefined && bottomLeft === bottomCenter && bottomLeft === bottomRight) {
    alert(`${bottomLeft} is the winner`);
}
    if (topLeft !== undefined && topLeft === middleLeft && topLeft === bottomLeft) {
    alert(`${topLeft} is the winner`);
}
    if (topCenter !== undefined && topCenter === middleCenter && topCenter === bottomCenter) {
    alert(`${topCenter} is the winner`);
}
    if (topRight !== undefined && topRight === middleRight && topRight === bottomRight) {
    alert(`${topRight} is the winner`);
}
    if (topLeft !== undefined && topLeft === middleCenter && topLeft === bottomRight) {
    alert(`${topLeft} is the winner`);
}
    if (bottomLeft !== undefined && bottomLeft === middleCenter && bottomLeft === topRight) {
    alert(`${bottomLeft} is the winner`);
}

let boardFull = true;
    for (let i = 0; i <= 8; i++) {
    if (progress[i] === undefined) {
    boardFull = false;
    }
    }
    if (boardFull === true) {
    alert("Cat's game, there is no winner");
    }
}