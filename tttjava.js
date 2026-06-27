let boxes =document.querySelectorAll(".box");
let resetbutton=document.querySelector("#reset-btn");
let newButton= document.querySelector("#new-btn");
let msgConatiner=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turnO =true;//playerO
//using 2d array
const winPattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

 const resetGame=()=>{
    turnO = true;
    msgConatiner.classList.add("hide");
    enablebtn();

 }

//writing code for alternate xand 0
boxes.forEach((box)=>{
    box.addEventListener("click",()=>
    {
        if(turnO===true){
            box.innerText="O";
            turnO=false;
        }
        else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled =true;
        //checking winner
        checkWinner();
    });

});

const disablebtn=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}

const enablebtn=()=>{
    for(let box of boxes){
        box.innerText="";
         box.disabled = false;
    }
}

const showWinner=(winner)=>{
      msg.innerText=`Congratulation!!! Winner is ${winner}`;
      msgConatiner.classList.remove("hide");
      disablebtn();
    }


const checkWinner=()=>{
    for(let pattern of winPattern){
        let pos1Val= boxes[pattern[0]].innerText;
        let pos2Val= boxes[pattern[1]].innerText;
        let pos3Val= boxes[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val == pos2Val && pos2Val==pos3Val){
                console.log("Winner",pos1Val);
                showWinner(pos1Val);
            }

        }
    }
};

newButton.addEventListener("click",resetGame);
resetbutton.addEventListener("click",resetGame);
