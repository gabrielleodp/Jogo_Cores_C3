// Array com as cores nomeadas do HTML
const cores = ['red', 'blue', 'green', 'yellow', 'purple', 'orange', 'pink', 'brown', 'gray', 'cyan'];

// Variáveis do jogo
let corSecreta;
let tentativas;

// Selecionando elementos do DOM
const inputCor = document.getElementById("inputCor");
const btnAdivinhar = document.getElementById("btnAdivinhar");
const btnReiniciar = document.getElementById("btnReiniciar");
const mensagem = document.getElementById("mensagem");
const tentativasTxt = document.getElementById("tentativas");

// Função para sortear cor e reiniciar jogo
function iniciarJogo() {
    corSecreta = cores[Math.floor(Math.random() * cores.length)];
    tentativas = 3;

    tentativasTxt.textContent = "Tentativas restantes: " + tentativas;
    mensagem.textContent = "";
    inputCor.value = "";

    inputCor.disabled = false;
    btnAdivinhar.disabled = false;
    btnReiniciar.classList.add("hidden");

    document.body.style.backgroundColor = "#f5f5f5";
}

// Função principal de verificação
function verificarCor() {
    let chute = inputCor.value.toLowerCase();

    if (chute.trim() === "") {
        mensagem.textContent = "Digite uma cor!";
        return;
    }

    if (chute === corSecreta) {
        mensagem.textContent = "🎉 Parabéns! Você acertou!";
        document.body.style.backgroundColor = corSecreta;

        inputCor.disabled = true;
        btnAdivinhar.disabled = true;
        btnReiniciar.classList.remove("hidden");
        return;
    }

    // Quando erra
    tentativas--;
    tentativasTxt.textContent = "Tentativas restantes: " + tentativas;

    if (tentativas > 0) {
        mensagem.textContent = "❌ Errou! Tente novamente.";
        inputCor.value = "";
    } else {
        mensagem.textContent = "💀 Fim de jogo! A cor era: " + corSecreta;
        inputCor.disabled = true;
        btnAdivinhar.disabled = true;
        btnReiniciar.classList.remove("hidden");
    }
}

// Eventos dos botões
btnAdivinhar.addEventListener("click", verificarCor);
btnReiniciar.addEventListener("click", iniciarJogo);

// Inicializar jogo ao carregar a página
iniciarJogo();
