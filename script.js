// script.js
// Projeto Agrinho 2026
// Tema: Tecnologia, Sustentabilidade e Inovação no Campo

// Garante que o código só seja executado depois que
// todo o conteúdo HTML da página estiver carregado.
document.addEventListener("DOMContentLoaded", () => {

    // Lista de dicas relacionadas à sustentabilidade,
    // agricultura de precisão e tecnologia no campo.
    const dicas = [
        "💧 Use sensores de umidade do solo para irrigar somente quando necessário.",
        "🌱 Utilize técnicas de agricultura de precisão para aplicar fertilizantes na quantidade adequada.",
        "☀️ Considere o uso de energia solar para reduzir o consumo de energia elétrica na propriedade.",
        "📡 Utilize dispositivos IoT para monitorar temperatura, umidade e condições das plantações.",
        "🚜 Use GPS e sistemas de mapeamento para tornar o trabalho das máquinas agrícolas mais eficiente.",
        "♻️ Aproveite resíduos orgânicos para produzir compostagem e melhorar a qualidade do solo.",
        "🌾 Faça o monitoramento das plantações com drones para identificar problemas antecipadamente."
    ];

    // Procura no HTML o botão que será usado para gerar uma nova dica.
    const botaoDica = document.getElementById("botao-dica");

    // Procura o elemento onde a dica será exibida.
    const textoDica = document.getElementById("texto-dica");

    // Verifica se os elementos realmente existem na página.
    // Isso evita erros caso o botão ou o campo de texto ainda não tenham sido criados.
    if (botaoDica && textoDica) {

        // Adiciona uma ação ao botão.
        // Sempre que o usuário clicar, uma nova dica será escolhida.
        botaoDica.addEventListener("click", () => {

            // Gera um número aleatório entre 0 e o tamanho da lista de dicas.
            const indiceAleatorio = Math.floor(Math.random() * dicas.length);

            // Exibe a dica escolhida na página.
            textoDica.textContent = dicas[indiceAleatorio];
        });
    }
});
