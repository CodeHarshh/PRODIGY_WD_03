let optionBtn=document.querySelectorAll(".button-option");
let Popup=document.querySelector(".popup");
let newgameBtn=document.querySelector("#newgame");
let restartBtn=document.querySelector(".restart");
let msg=document.querySelector("#message");
let PlayerTurn=document.querySelector(".turn-indicator #player-turn");


const winningPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

let xTurn=true;
let cnt=0;


const winnerCheck =()=>{
let board=[];


// stored the current input/data in board array
optionBtn.forEach((element,index)=>{
    board[index]= element.innerHTML;
});
for(let i of winningPatterns){
    const[a,b,c]=i;
    if(board[a]&& board[a]===board[b]&& board[a]===board[c]){
        return board[a];
    }
}
return null;
}




optionBtn.forEach((element) =>{
    element.addEventListener("click",()=>{

    
        
if(xTurn){
 
    xTurn=false;
    PlayerTurn.innerHTML="x";
    element.innerHTML="x";
    element.disabled=true;
    PlayerTurn.innerHTML="O";
    if (board.length === 0) {
        PlayerTurn.innerHTML = "X";
    }
}

else{
    PlayerTurn.innerHTML="X";
    
    xTurn=true;
    element.innerHTML="o";
    element.disabled=true;
}
cnt+=1;
let winner=winnerCheck();
if (winner) {
    msg.innerHTML = `Player ${winner} 🏆 wins!`;
    Popup.classList.add("show");
    optionBtn.forEach((button) => button.disabled = true);
}
else if(cnt===9){
    // its a draw
    msg.innerHTML = "It's a draw! 🤼";
    Popup.classList.add("show");
}
    })
});


newgameBtn.addEventListener("click",()=>{
    cnt=0;
    xTurn=true;
    msg.innerHTML="";
    Popup.classList.remove("show");
    optionBtn.forEach((button) => {
        button.innerHTML = "";
        button.disabled = false;
    });
})



restartBtn.addEventListener("click", () => {
    cnt = 0;
    xTurn = true;
      PlayerTurn.innerHTML="x";
    msg.innerHTML = "";
    Popup.classList.remove("show");
    optionBtn.forEach((button) => {
        button.innerHTML = "";
        button.disabled = false;
    });
});


