// Gerar um número aleatório entre 1 e 100
let randomNumber = Math.floor(Math.random() * 100) + 1;

// Contador de tentativas
let attempts = 0;

// Capturando elementos do DOM
const guessInput = document.getElementById('guessInput');
const guessButton = document.getElementById('guessButton');
const message = document.getElementById('message');

// Adicionando evento de clique ao botão de verificar
guessButton.addEventListener('click', checkGuess);

function checkGuess() {
    let guess = parseInt(guessInput.value);

    if (isNaN(guess) || guess < 1 || guess > 100) {
        message.textContent = "Por favor, insira um número válido entre 1 e 100.";
        return;
    }

    attempts++;

    if (guess === randomNumber) {
        message.textContent = `Parabéns! Você acertou o número ${randomNumber} em ${attempts} tentativas.`;
        disableInputAndButton();
    } else if (guess < randomNumber) {
        message.textContent = "O número é maior. Tente novamente.";
    } else {
        message.textContent = "O número é menor. Tente novamente.";
    }
}

function disableInputAndButton() {
    guessInput.disabled = true;
    guessButton.disabled = true;
}
