
var gameOver = false;
var totalMoves = 1;
var currentPlayer = 'X'
var gameStart = false;

function placeMarker(spotID){
    if(gameStart == true){
        if(gameOver == false){
            var spot = document.getElementById(spotID);
            if(spot.innerHTML == ""){
                if(currentPlayer == 'X'){
                    spot.innerHTML = "X";
                }
                else if(currentPlayer == 'O'){
                    spot.innerHTML = "O";
                }
                if(currentPlayerWon() === true){
                    document.getElementById("turn").innerHTML = "Player " + currentPlayer + " Won the Game!";
                    gameOver = true;
                    startGame();
                }
                if(currentPlayerWon() === false){
                    if(currentPlayer == 'X'){
                        document.getElementById("turn").innerHTML = "Its player O's turn";
                        currentPlayer = 'O';
                    }
                    else if(currentPlayer == 'O'){
                        document.getElementById("turn").innerHTML = "Its player X's turn";
                        currentPlayer = 'X';
                    }
                    totalMoves++;
                }
            }
        
        }
    }
}

function currentPlayerWon(){
    var s1 = document.getElementById('1');
    var s2 = document.getElementById('2');
    var s3 = document.getElementById('3');
    var s4 = document.getElementById('4');
    var s5 = document.getElementById('5');
    var s6 = document.getElementById('6');
    var s7 = document.getElementById('7');
    var s8 = document.getElementById('8');
    var s9 = document.getElementById('9');

    if(s1.innerHTML === 'X' && s2.innerHTML === 'X' && s3.innerHTML === 'X'){  
        gameOver = true;
    }
    else if(s4.innerHTML === 'X' && s5.innerHTML === 'X' && s6.innerHTML === 'X'){  
        gameOver = true;
    }
    else if(s7.innerHTML === 'X' && s8.innerHTML === 'X' && s9.innerHTML === 'X'){  
        gameOver = true;
    }
    else if(s1.innerHTML === 'X' && s4.innerHTML === 'X' && s7.innerHTML === 'X'){  
        gameOver = true;
    }
    else if(s2.innerHTML === 'X' && s5.innerHTML === 'X' && s8.innerHTML === 'X'){  
        gameOver = true;
    }
    else if(s3.innerHTML === 'X' && s6.innerHTML === 'X' && s9.innerHTML === 'X'){  
        gameOver = true;
    }
    else if(s1.innerHTML === 'X' && s5.innerHTML === 'X' && s9.innerHTML === 'X'){  
        gameOver = true;
    }
    else if(s3.innerHTML === 'X' && s5.innerHTML === 'X' && s7.innerHTML === 'X'){  
        gameOver = true;
    }
    else if(s1.innerHTML === 'O' && s2.innerHTML === 'O' && s3.innerHTML === 'O'){  
        gameOver = true;
    }
    else if(s4.innerHTML === 'O' && s5.innerHTML === 'O' && s6.innerHTML === 'O'){  
        gameOver = true;
    }
    else if(s7.innerHTML === 'O' && s8.innerHTML === 'O' && s9.innerHTML === 'O'){  
        gameOver = true;
    }
    else if(s1.innerHTML === 'O' && s4.innerHTML === 'O' && s7.innerHTML === 'O'){  
        gameOver = true;
    }
    else if(s2.innerHTML === 'O' && s5.innerHTML === 'O' && s8.innerHTML === 'O'){  
        gameOver = true;
    }
    else if(s3.innerHTML === 'O' && s6.innerHTML === 'O' && s9.innerHTML === 'O'){  
        gameOver = true;
    }
    else if(s1.innerHTML === 'O' && s5.innerHTML === 'O' && s9.innerHTML === 'O'){  
        gameOver = true;
    }
    else if(s3.innerHTML === 'O' && s5.innerHTML === 'O' && s7.innerHTML === 'O'){  
        gameOver = true;
    }
    else{
        gameOver = false;
    }
    
    if (!gameOver){
        if (totalMoves == 9)
            gameOver = true;
            document.getElementById("turn").innerHTML = "The game is a tie";
        }
        
    return gameOver;
}

function startGame(){
    gameStart = true;
    var x = document.getElementById("button");
    var y = document.getElementById("turn");
    if(gameStart == true){
        x.style.visibility = "hidden";
        y.style.visibility = "visible";
    }
    if(gameOver == true){
    x.innerHTML = "Restart"
    x.style.visibility = "visible";
    x.onclick = function() {resetGame()};
    }
    
}

function resetGame(){
    document.getElementById('1').innerHTML = "";
    document.getElementById('2').innerHTML = "";
    document.getElementById('3').innerHTML = "";
    document.getElementById('4').innerHTML = "";
    document.getElementById('5').innerHTML = "";
    document.getElementById('6').innerHTML = "";
    document.getElementById('7').innerHTML = "";
    document.getElementById('8').innerHTML = "";
    document.getElementById('9').innerHTML = "";
    totalMoves = 1;
    gameOver = false;
}
