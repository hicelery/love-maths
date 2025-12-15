// Wait for DOM content to load before running the game
//Get button elemets and add event listeners to them

document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function () {
            if (this.getAttribute("data-type") === "submit") {
                alert("You clicked submit");
            } else {
                let gameType = this.getAttribute("data-type");
                alert(`You clicked ${gameType}`);
            }
        });
    }

    // Start the game for the first time
    runGame("addition");
});
/**
 * The main game loop called when script is first loaded
 * and after the user's answer has been processed.
 */
function runGame(gameType) {
    //create two random numbers between 1 and 25
    let num1 = Math.ceil(Math.random() * 25);
    let num2 = Math.ceil(Math.random() * 25);

    if (gameType === "addition") {
        displayAdditionQuestion(num1, num2);
    } else if (gameType === "subtract") {
        displaySubtractQuestion(num1, num2);
    } else if (gameType === "multiply") {
        displayMultiplyQuestion(num1, num2);
    } else {
        alert(`Unknown game type: ${gameType}`);
        throw `Unknown game type: ${gameType}. Aborting!`;
    }
}

function checkAnswer(answer) {
    console.log("Checking answer: " + answer);
}

function calculateCorrectAnswer() {
    console.log("Calculating correct answer...");
}

function incrementScore() {
    console.log("Incrementing score...");
}

function displayAdditionQuestion(operand1, operand2) {
    document.getElementById("operand1").textContent = operand1;
    document.getElementById("operand2").textContent = operand2;
    document.getElementById("operator").textContent = "+";
}

function displaySubtractQuestion(operand1, operand2) {
    console.log("Displaying subtraction question...");
}
function displayMultiplyQuestion(operand1, operand2) {}
