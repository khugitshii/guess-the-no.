// Generate random number between min and max (inclusive)
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Initialize game variables
let minNum = 1;
let maxNum = 100;
let randomNumber = getRandomNumber(minNum, maxNum);
let attempts = 0;

// Function to check user's guess
function checkGuess() {
    let guess = parseInt(document.getElementById("guessInput").value);
    
    if (isNaN(guess) || guess < minNum || guess > maxNum) {
        setMessage(`Please enter a number between ${minNum} and ${maxNum}`, "red");
        return;
    }
    
    attempts++;
    
    if (guess === randomNumber) {
        setMessage(`Congratulations! You guessed the number ${randomNumber} in ${attempts} attempts! 🎉`, "green");
    } else if (guess < randomNumber) {
        setMessage(`Try a higher number. Attempts: ${attempts}. Keep going!`, "blue");
    } else {
        setMessage(`Try a lower number. Attempts: ${attempts}. You can do it!`, "blue");
    }
}

// Set message to user
function setMessage(msg, color) {
    document.getElementById("message").style.color = color;
    document.getElementById("message").textContent = msg;
}

// Reset game to play again
function resetGame() {
    attempts = 0;
    randomNumber = getRandomNumber(minNum, maxNum);
    console.log("Random number (for testing purposes):", randomNumber);
    setMessage(`Guess a number between ${minNum} and ${maxNum}. Fresh start!`, "black");
    document.getElementById("guessInput").value = "";
}
