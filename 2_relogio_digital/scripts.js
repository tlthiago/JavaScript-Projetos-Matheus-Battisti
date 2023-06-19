const hoursElement = document.querySelector(".hours");
const minutesElement = document.querySelector(".minutes");
const secondsElement = document.querySelector(".seconds");

function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const seconds = now.getSeconds().toString().padStart(2, "0");
    // Os métodos estão formatando o valor de horas para string e o padStart define que os valores sempre serão de 2 dígitos e colocamos o 0 para nunca ficar com somente 1 dígito
        
    hoursElement.textContent = hours;
    minutesElement.textContent = minutes;
    secondsElement.textContent = seconds;

}

// Método para chamar a função a cada um segundo, atualizando assim automáticamente a contagem do relógio
setInterval(updateClock, 1000);