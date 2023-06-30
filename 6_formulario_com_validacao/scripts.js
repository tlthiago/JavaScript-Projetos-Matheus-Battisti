const form = document.querySelector("form");
const nome = document.querySelector("#nome");
const email = document.querySelector("#email");
const assunto = document.querySelector("#assunto");
const mensagem = document.querySelector("#mensagem");
const errorMessages = document.querySelectorAll(".error-message");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    resetErrors();
    validadeInputs();
});

function setError(input, errorMessage) {
    // Localiza o elemento de erro mais próximo do input
    const errorMessageElement = input.nextElementSibling;
    // Altera a mensagem de erro conforme input passado por parâmetro
    errorMessageElement.textContent = errorMessage;
    // Adiciona a classe de erro ao elemento pai - Para personalização css
    input.parentElement.classList.add("error");
}

function resetErrors() {
    errorMessages.forEach((msg) => {
        msg.textContent = "";
    });
    nome.parentElement.classList.remove("error");
    email.parentElement.classList.remove("error");
    assunto.parentElement.classList.remove("error");
    mensagem.parentElement.classList.remove("error");
}

function validadeInputs() {
    const nomeValue = nome.value.trim();
    const emailValue = email.value.trim();
    const assuntoValue = assunto.value.trim();
    const mensagemValue = mensagem.value.trim();

    if (nomeValue === "") {
        setError(nome, "Nome não pode ficar em branco");
    }

    if (emailValue === "") {
        setError(email, "E-mail não pode ficar em branco");
    } else if (!isValidEmail(emailValue)) {
        setError(email, "E-mail inválido");
    }

    if (assuntoValue === "") {
        setError(assunto, "Assunto não pode ficar em branco");
    }
    
    if (mensagemValue === "") {
        setError(mensagem, "Mesagem não pode ficar em branco");
    }
}

function isValidEmail(email) {
    // // Retorna o teste de uma regex
    // ^[^\s@] Bloco de string antes do @
    // @[^\s@] Bloco de string após o @
    // \.[^\s@] Ponto e string de finalização (.com ou .com.br)
    // $ Indica a finalização da string
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}