function apresentarInstrucoes() {
    alert("O computador gerou um número aleatório entre 0 e 10. \n\n Sua missão é adivinhar o número, recebendo feedback se seu palpite for maior ou menor que o número secreto. \n\n O jogo encerra quando você adivinhar o número. Para desistir, basta digitar um valor não numérico.");
}

function gerarNumeroAleatorio() {
    return Math.floor(Math.random() * 11);
}

function pedirPalpite() {
    let palpite = prompt("Digite seu palpite (número inteiro entre 0 e 10): ");
    palpite = parseInt(palpite);  
    return palpite;
}

function verificarPalpite(palpite, numeroSecreto) {
    if (palpite === numeroSecreto) {
        alert("Parabéns! Você adivinhou o número secreto: " + numeroSecreto);
        return true;
    } else if (palpite > numeroSecreto) {
        alert("O palpite é maior do que o número secreto... Tente novamente.");
    } else {
        alert("O palpite é menor do que o número secreto... Tente novamente.");
    }
    return false;
}

apresentarInstrucoes();
const numeroSecreto = gerarNumeroAleatorio();
while (true) {
    palpite = pedirPalpite();
    if (isNaN(palpite)) {
        alert("Você desistiu do jogo. A resposta era " + numeroSecreto);
        break;
    } 
    
    if (verificarPalpite(palpite, numeroSecreto)) {
        break;
    }
}

