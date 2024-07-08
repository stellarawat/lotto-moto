let randomNumber = Math.floor(Math.random() * 40) + 1;
let attempts = 0;

function checkGuess() {
    const guessInput = document.getElementById('guessInput');
    const message = document.getElementById('message');
    const guess = parseInt(guessInput.value);
    attempts++;

    if (guess === randomNumber) {
        message.textContent = `Congratulations! You guessed the number in ${attempts} attempts.`;
        message.style.color = 'green';
        guessInput.disabled = true;
    } else if (guess < randomNumber) {
        message.textContent = 'Too low! Try again.';
        message.style.color = 'blue';
    } else if (guess < randomNumber) {
        message.textContent = 'Too high! Try again.';
        message.style.color = 'red';
    } else {
        message.textContent = 'Please enter a valid number between 1 and 40.';
        message.style.color = 'purple';
    }
    }
        