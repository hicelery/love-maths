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
});
/**
 * The main game loop called when script is first loaded
 * and after the user's answer has been processed.
 */
function runGame() {
    //create two random numbers between 1 and 25
    let num1 = Math.ceil(Math.random() * 25);
    let num2 = Math.ceil(Math.random() * 25);
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

function displayAdditionQuestion() {
    console.log("Displaying addition question...");
}

function displaySubtractQuestion() {
    console.log("Displaying subtraction question...");
}
function displayMultiplyQuestion() {}
