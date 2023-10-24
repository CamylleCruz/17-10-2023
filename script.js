document.addEventListener("DOMContentLoaded", function () {
    const session = {
        Nome: " ",
        CEP: " ",
        Cor: " ",
        Animal: " ",
        FLV: " ",
        FSND: " ",
        PDH: " ",
        Carro: " ",
        Marca: " ",
        Celebridade: " ",
        MeuNamoradoÉ: " ",
        MinhaSograÉ: " ",
        // Acima estão os tópicos do jogo
    };

    const gameContainer = document.getElementById("game-container");

    for (const key in session) {
        if (session.hasOwnProperty(key)) {
            const rule = session[key];
            const column = document.createElement("div");
            column.classList.add("column");
            column.innerHTML = `
                <h2>${key}</h2>
                <input type="text" id="${key}" value="${rule}">
            `;

            const input = column.querySelector("input");

            // Adicione um evento de clique para ativar a edição do campo de texto
            column.addEventListener("click", function () {
                input.removeAttribute("readonly");
                input.focus();
            });

            // Adicione um evento para desativar a edição quando pressionar Enter
            input.addEventListener("keydown", function (event) {
                if (event.key === "Enter") {
                    input.setAttribute("readonly", true);
                    input.blur();
                }
            });

            gameContainer.appendChild(column);
        }
    }

    // Adicione um evento de clique para o botão "STOP"
    stopButton.addEventListener("click", function () {
        // Aqui você pode adicionar a lógica para o botão "STOP"
        // Pode ser a função que finaliza o jogo, calcula os pontos, etc.
        alert("Jogo finalizado!"); // Exemplo de ação ao clicar em "STOP"
    });
});
