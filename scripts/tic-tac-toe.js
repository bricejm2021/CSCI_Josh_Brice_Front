
var gameOver = false;
var totalMoves = 0;
var currentPlayer = 'X'

function placeMarker(spotID){
    if(!gameOver){
    //if the game is not over
    //  get the spot/element by spotID
    //      if the spot is empty
    //          place the marker by changing the innerHTML of the spot
    //          depending on who is the current player 
    //          check if the current player has won the game by calling currentPlayerWon()
    //          if(currentPlayerWon()){
    //                  if yes, display message, set gameOver = true;
    //          }
    //          if yes, display message, set gameOver = true;
    //          if no, switch player, totalMove++;
    //      else 
    //          do nothing
    //else (the game is over)
    //      do nothing
    }
}

function currentPlayerWon(){
    //get each spot using getElementByID()
    //for example, s1 = document.getElementById('1');
    //s2 = document.getElementById('2');
    //s3, s4..., s9
    //if
    //  (s1.innerHTML === s2.innterHTML && s2.innterHTML && === s3.innerHTML) <= first row
    //      ||    (s4.innerHTML === s5.innterHTML && s5.innterHTML && === s6.innerHTML) <= second row
    //...
    //      gameOver = true;
    // else
    //      gameOver = false;
    //
    // if (!gameOver){
    //      if (totalMove == 8) <== maybe 9
    //          gameOver = true;
    //      }
    // return gameOver;
}