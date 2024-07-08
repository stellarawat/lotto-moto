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
    } else {
        message.textContent = 'Too high! Try again.';
        message.style.color = 'red';
    }

    if (guess < randomnumber below 40 ){
        message.textContent = 'input number below 40.';
        message.style.color = 'purple';
    }
    }
            const randomNumber = Math.floor(Math.random() * 40);
    
            function checkGuess() {
                const userGuess = parseInt(document.getElementById('guessInput').value);
                const result = document.getElementById('result');
    
                if (isNaN(userGuess) || userGuess < 1 || userGuess > 39) {
                    result.textContent = 'Please enter a valid number between 1 and 39.';
                } else if (userGuess < randomNumber) {
                    result.textContent = 'Too low! Try again.';
                } else if (userGuess > randomNumber) {
                    result.textContent = 'Too high! Try again.';
                } else {
                    result.textContent = 'Congratulations! You guessed it right.';
                }
            }
