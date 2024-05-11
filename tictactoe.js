var gameArr = [
    [0,0,0],
    [0,0,0],
    [0,0,0]
]

let anouncer = document.getElementById("anouncer") ;
var amIwin = "no";
var turn = 3;
var gameIsNotEnd = 0;
function X(){
    turn = 0;
    gameChecker();
}
function O(){
    turn = 1;
    gameChecker();
}
function Reset(){
    document.getElementById("bt0").innerHTML = " ";
    document.getElementById("bt1").innerHTML = " ";
    document.getElementById("bt2").innerHTML = " ";
    document.getElementById("bt3").innerHTML = " ";
    document.getElementById("bt4").innerHTML = " ";
    document.getElementById("bt5").innerHTML = " ";
    document.getElementById("bt6").innerHTML = " ";
    document.getElementById("bt7").innerHTML = " ";
    document.getElementById("bt8").innerHTML = " ";
    anouncer.innerHTML = "Select X or O";
    for(var i = 0 ; i<3 ; i++){
        for(var j=0 ;j<3 ; j++){
            gameArr[i][j]=0;
        }
        }
        turn = 3;
        amIwin = 0;
        gameIsNotEnd = 0;
    document.getElementById("winner").innerHTML = " ";
    
    document.getElementById("O").disabled = false;
    document.getElementById("X").disabled = false;   

}
function bt0(){
   
    if(turn===0 && gameArr[0][0]===0){
 document.getElementById("bt0").innerHTML = "X";
 turn=1;
 gameArr[0][0] = 1;
    }else if(turn===1 && gameArr[0][0]===0){
        document.getElementById("bt0").innerHTML = "O"; 
        turn=0;
gameArr[0][0] = 2;
    }
    gameChecker();
}
function bt1(){
    if(turn===0 && gameArr[0][1]===0){
        document.getElementById("bt1").innerHTML = "X";
        turn=1;
        gameArr[0][1] = 1;
           }else if(turn===1 && gameArr[0][1]===0){
               document.getElementById("bt1").innerHTML = "O"; 
               turn=0;
       gameArr[0][1] = 2;
           }
       gameChecker();
}
function bt2(){
    if(turn===0 && gameArr[0][2]===0){
        document.getElementById("bt2").innerHTML = "X";
        turn=1;
        gameArr[0][2] = 1;
           }else if(turn===1 && gameArr[0][2]===0){
               document.getElementById("bt2").innerHTML = "O"; 
               turn=0;
       gameArr[0][2] = 2;
           }
       gameChecker();
}
function bt3(){
    if(turn===0 && gameArr[1][0]===0){
        document.getElementById("bt3").innerHTML = "X";
        turn=1;
        gameArr[1][0] = 1;
           }else if(turn===1 && gameArr[1][0]===0){
               document.getElementById("bt3").innerHTML = "O"; 
               turn=0;
       gameArr[1][0] = 2;
           }
       gameChecker();
}
function bt4(){
    if(turn===0 && gameArr[1][1]===0){
        document.getElementById("bt4").innerHTML = "X";
        turn=1;
        gameArr[1][1] = 1;
           }else if(turn===1 && gameArr[1][1]===0){
               document.getElementById("bt4").innerHTML = "O"; 
               turn=0;
       gameArr[1][1] = 2;
           }
       gameChecker();
}
function bt5(){
    if(turn===0 && gameArr[1][2]===0){
        document.getElementById("bt5").innerHTML = "X";
        turn=1;
        gameArr[1][2] = 1;
           }else if(turn===1 && gameArr[1][2]===0){
               document.getElementById("bt5").innerHTML = "O"; 
               turn=0;
       gameArr[1][2] = 2;
           }
       gameChecker();
}
function bt6(){
    if(turn===0 && gameArr[2][0]===0){
        document.getElementById("bt6").innerHTML = "X";
        turn=1;
        gameArr[2][0] = 1;
           }else if(turn===1 && gameArr[2][0]===0){
               document.getElementById("bt6").innerHTML = "O"; 
               turn=0;
       gameArr[2][0] = 2;
           }
       gameChecker();
}
function bt7(){
    if(turn===0 && gameArr[2][1]===0){
        document.getElementById("bt7").innerHTML = "X";
        turn=1;
        gameArr[2][1] = 1;
           }else if(turn===1 && gameArr[2][1]===0){
               document.getElementById("bt7").innerHTML = "O"; 
               turn=0;
       gameArr[2][1] = 2;
           }
       gameChecker();
}
function bt8(){
    if(turn===0 && gameArr[2][2]===0){
        document.getElementById("bt8").innerHTML = "X";
        turn=1;
        gameArr[2][2] = 1;
           }else if(turn===1 && gameArr[2][2]===0){
               document.getElementById("bt8").innerHTML = "O"; 
               turn=0;
       gameArr[2][2] = 2;
           }
       gameChecker();
}
function gameChecker(){
    if(turn==3){
        anouncer.innerHTML = "You haven't selected!";
    }else if(amIwin === "no" && turn!=3){
        anouncer.innerHTML = "Game started" ;
    }

    if(gameArr[0][0]==1 && gameArr[0][1]==1 && gameArr[0][2]==1){
        anouncer.innerHTML = "X Win.";
   amIwin = "yes";
}else if(gameArr[1][0]==1 && gameArr[1][1]==1 && gameArr[1][2]==1){
    anouncer.innerHTML = "X Win.";
    amIwin = "yes";
}else if(gameArr[2][0]==1 && gameArr[2][1]==1 && gameArr[2][2]==1){
    anouncer.innerHTML = "X Win.";
    amIwin = "yes";
}else if(gameArr[0][0]==1 && gameArr[1][0]==1 && gameArr[2][0]==1){
    anouncer.innerHTML = "X Win.";
    amIwin = "yes";
}else if(gameArr[0][1]==1 && gameArr[1][1]==1 && gameArr[2][1]==1){
    anouncer.innerHTML = "X Win.";
    amIwin = "yes";
}else if(gameArr[0][2]==1 && gameArr[1][2]==1 && gameArr[2][2]==1){
    anouncer.innerHTML = "X Win.";
    amIwin = "yes";
}else if(gameArr[0][0]==1 && gameArr[1][1]==1 && gameArr[2][2]==1){
    anouncer.innerHTML = "X Win.";
    amIwin = "yes";
}else if(gameArr[0][2]==1 && gameArr[1][1]==1 && gameArr[2][0]==1){
    anouncer.innerHTML = "X Win.";
    amIwin = "yes";
}else if(gameArr[0][0]==2 && gameArr[0][1]==2 && gameArr[0][2]==2){
    document.getElementById("anouncr").innerHTML = "O Win.";
    amIwin = "yes";
 }else if(gameArr[1][0]==2 && gameArr[1][1]==2 && gameArr[1][2]==2){
     anouncer.innerHTML = "O Win.";
     amIwin = "yes";
 }else if(gameArr[2][0]==2 && gameArr[2][1]==2 && gameArr[2][2]==2){
     anouncer.innerHTML = "O Win.";
     amIwin = "yes";
 }else if(gameArr[0][0]==2 && gameArr[1][0]==2 && gameArr[2][0]==2){
    anouncer.innerHTML = "O Win.";
    amIwin = "yes";
 }else if(gameArr[0][1]==2 && gameArr[1][1]==2 && gameArr[2][1]==2){
     anouncer.innerHTML = "O Win.";
     amIwin = "yes";
 }else if(gameArr[0][2]==2 && gameArr[1][2]==2 && gameArr[2][2]==2){
     anouncer.innerHTML = "O Win.";
     amIwin = "yes";
 }else if(gameArr[0][0]==2 && gameArr[1][1]==2 && gameArr[2][2]==2){
     anouncer.innerHTML = "O Win.";
     amIwin = "yes";
 }else if(gameArr[0][2]==2 && gameArr[1][1]==2 && gameArr[2][0]==2){
     anouncer.innerHTML = "O Win.";
     amIwin = "yes";
}else if(gameArr[0][0]>0 && gameArr[0][1]>0 && gameArr[0][2]>0 && gameArr[1][0]>0 && gameArr[1][1]>0 && gameArr[1][2]>0 && gameArr[2][0]>0 && gameArr[2][1]>0 && gameArr[2][2]>0){
    anouncer.innerHTML = "Is Draw.";
    amIwin = "yes";
}
if(amIwin=="yes"){
    for(var i = 0 ; i<3 ; i++){
        for(var j=0 ;j<3 ; j++){
            gameArr[i][j]=-1;
        }
        }
}

if(turn == 0){
    document.getElementById("O").disabled = true;
    document.getElementById("X").disabled = false;   
}else if(turn == 1){
    document.getElementById("X").disabled = true;
    document.getElementById("O").disabled = false;   
}
if(amIwin == "yes"){
    document.getElementById("X").disabled = true;
    document.getElementById("O").disabled = true;       
}
}
