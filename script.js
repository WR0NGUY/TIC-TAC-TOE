let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");


let turnO = true;
const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,6],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,8,7],
];

const resetGame = () => {
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
    resetBtn.disabled = false;

}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(turnO){
            box.innerText = "O";
            turnO = false;
        } else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;

        checkWinner();
    })
})

const disableBoxes = () => {
    for (box of boxes) {
        box.disabled = true;
        resetBtn.disabled = true;
    }
}

const enableBoxes = () => {
    for (box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}


const showWinner =  (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}

const checkWinner = () => {
    for (let patterns of winPatterns) {

        let pos1Val = boxes[patterns[0]].innerText;
        let pos2Val = boxes[patterns[1]].innerText;
        let pos3Val = boxes[patterns[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if(pos1Val ===  pos2Val && pos2Val === pos3Val){
            
            showWinner(pos1Val);
            }
        }
    }
}

newGameBtn.addEventListener("click", resetGame)
resetBtn.addEventListener("click", resetGame)