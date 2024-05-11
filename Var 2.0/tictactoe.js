let gameArr = [0, 0, 0, 0, 0, 0, 0, 0, 0]
const bt0 = document.getElementById('bt0');
const bt1 = document.getElementById('bt1');
const bt2 = document.getElementById('bt2');
const bt3 = document.getElementById('bt3');
const bt4 = document.getElementById('bt4');
const bt5 = document.getElementById('bt5');
const bt6 = document.getElementById('bt6');
const bt7 = document.getElementById('bt7');
const bt8 = document.getElementById('bt8');
const button = document.getElementsByClassName("button");
const anouncer = document.getElementById("anouncer");
const winner = document.getElementById("winner");
const O = document.getElementById("O");
const X = document.getElementById("X");
let turn = 0;

bt0.addEventListener("click", function () { gg() });
bt1.addEventListener("click", function () { gg() });
bt2.addEventListener("click", function () { gg() });
bt3.addEventListener("click", function () { gg() });
bt4.addEventListener("click", function () { gg() });
bt5.addEventListener("click", function () { gg() });
bt6.addEventListener("click", function () { gg() });
bt7.addEventListener("click", function () { gg() });
bt8.addEventListener("click", function () { gg() });
O.addEventListener("click",function(){turn=2; anouncer.innerHTML=" ";gameChecker();});
X.addEventListener("click",function(){turn=1; anouncer.innerHTML=" ";gameChecker();});

function gg() {
    let currentBtn = event.target;
    console.log(currentBtn.value);
    if (turn == 1 && gameArr[currentBtn.value] == 0) {
        currentBtn.innerHTML = "X";
        turn = 2;
        gameArr[currentBtn.value] = 1;
    } else if (turn == 2 && gameArr[currentBtn.value] == 0) {
        currentBtn.innerHTML = "O";
        turn = 1;
        gameArr[currentBtn.value] = 2;
    }else if(turn==0){
        anouncer.innerHTML="You haven't selected!";
    }
    gameChecker();
}
function gameChecker() {
    let i;
    for (i=0; i < 7; i++) {
        if (i == 0 || i == 1 || i == 2) {
            if (gameArr[i] == 1 && gameArr[i+3] ==1 && gameArr[i+6] == 1) {
                anouncer.innerHTML = "X Win!";
                turn = 0;
            } else if (gameArr[i] === 2 && gameArr[i+3] === 2 && gameArr[i+6] === 2) {
                anouncer.innerHTML = "O Win!";
                turn = 0;
            }
        }
        if (i == 0 || i == 3 || i == 6) {
            if (gameArr[i] === 1 && gameArr[i+1] === 1 && gameArr[i+2] === 1) {
                anouncer.innerHTML = "X Win!";
                turn = 0;
            }else if (gameArr[i] === 2 && gameArr[i+1] === 2 && gameArr[i+2] === 2) {
                anouncer.innerHTML = "O Win!";
                turn = 0;
            }
        }
    }
    if (gameArr[0] === 1 && gameArr[4] === 1 && gameArr[8] === 1) {
        anouncer.innerHTML = "X Win!";
    } else if (gameArr[0] === 1 && gameArr[4] === 2 && gameArr[8] === 2) {
        anouncer.innerHTML = "O Win!";
        turn = 0;
    }else if (gameArr[2] === 1 && gameArr[4] === 1 && gameArr[6] === 1) {
        anouncer.innerHTML = "X Win!";
        turn = 0;
    } else if (gameArr[2] === 1 && gameArr[4] === 1 && gameArr[6] === 1) {
        anouncer.innerHTML = "O Win!";
        turn = 0;
    }

    if(turn==1){
        X.disabled = false;
        O.disabled = true;
    }
    if(turn==2){
        X.disabled = true;
        O.disabled = false;
    }
}
function Reset(){
    for(let i=0;i<9;i++){
    document.getElementsByClassName("button")[i].innerHTML=" ";
    gameArr[i] = 0;
    }
    turn=0;
    anouncer.innerHTML = "Select X or O";
        X.disabled = false;
        O.disabled = false;
}