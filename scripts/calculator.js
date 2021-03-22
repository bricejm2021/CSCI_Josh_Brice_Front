
//Variable
currentNumber = "";
secondNum = "";
operator = null;

function showNumber(button){
    var enteredNumber = document.getElementById("display").innerHTML += button.value;
  if(operator == null){
    currentNumber = enteredNumber;
    console.log("The current number is: " + currentNumber)
  }
  else{
      secondNum = enteredNumber.slice(1);
    }
  console.log("second number is: " + secondNum);

}

//Clear all
function clearAll(){
    document.getElementById("display").innerHTML = null;
    currentNumber = "";
    secondNum = "";
    operator = null;
}

function getOperator(button){
    operator = button.value;
    document.getElementById("display").innerHTML = operator;
    console.log("The current operator is: " + operator);
}

function calculateNum() {

    // Convert string input to numbers
    currentNumber = parseInt(currentNumber);
    secondNum = parseInt(secondNum);
    // Perform operation
    switch (operator) {
      case "+":
        result = currentNumber + secondNum;
        break;

      case "-":
        result = currentNumber - secondNum;
        break;

      case "*":
        result = secondNum * currentNumber;
        break;

      case "/":
        result = currentNumber / secondNum;
        break;

        // If equal is pressed without an operator, keep number and continue
      default:
        result = currentNumber;
    }

    document.getElementById("display").innerHTML = result;
}



