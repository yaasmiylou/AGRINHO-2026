// ======================================================
// 🌱 PROJETO AGRINHO 2026
// Tecnologia, Sustentabilidade e Inovação no Campo
// ======================================================

document.addEventListener("DOMContentLoaded", () => {

    // ==================================================
    // 💡 DICAS DE SUSTENTABILIDADE
    // ==================================================

    const dicas = [
        "💧 Use sensores de umidade do solo para irrigar somente quando necessário.",
        "🌱 Utilize a agricultura de precisão para aplicar fertilizantes na quantidade adequada.",
        "☀️ Considere o uso de energia solar para reduzir o consumo de energia elétrica.",
        "📡 Utilize dispositivos IoT para monitorar temperatura, umidade e condições das plantações.",
        "🚜 Use GPS e sistemas de mapeamento para tornar as máquinas agrícolas mais eficientes.",
        "♻️ Aproveite resíduos orgânicos para produzir compostagem e melhorar a qualidade do solo.",
        "🌾 Utilize drones para monitorar plantações e identificar problemas antecipadamente.",
        "💻 Use softwares agrícolas para acompanhar a produção e tomar decisões mais eficientes.",
        "🌳 Preserve áreas de vegetação nativa para proteger a biodiversidade e o solo.",
        "💦 Evite desperdícios de água utilizando sistemas de irrigação inteligentes."
    ];

    const botaoDica = document.getElementById("botao-dica");
    const textoDica = document.getElementById("texto-dica");

    let ultimaDica = -1;

    // Escolhe uma dica diferente da anterior
    function mostrarDica() {

        if (!textoDica) return;

        let indice;

        do {
            indice = Math.floor(Math.random() * dicas.length);
        } while (indice === ultimaDica && dicas.length > 1);

        ultimaDica = indice;

        // Animação de saída
        textoDica.style.opacity = "0";
        textoDica.style.transform = "translateY(10px)";

        setTimeout(() => {
            textoDica.textContent = dicas[indice];

            // Animação de entrada
            textoDica.style.opacity = "1";
            textoDica.style.transform = "translateY(0)";
        }, 250);
    }

    if (botaoDica && textoDica) {

        botaoDica.addEventListener("click", () => {
            mostrarDica();

            // Efeito no botão
            botaoDica.style.transform = "scale(0.95)";

            setTimeout(() => {
                botaoDica.style.transform = "scale(1)";
            }, 150);
        });
    }


    // ==================================================
    // 🌙 MODO ESCURO / CLARO
    // ==================================================

    const botaoTema = document.createElement("button");

    botaoTema.innerHTML = "🌙";
    botaoTema.title = "Alternar tema";

    botaoTema.style.position = "fixed";
    botaoTema.style.bottom = "20px";
    botaoTema.style.right = "20px";
    botaoTema.style.width = "50px";
    botaoTema.style.height = "50px";
    botaoTema.style.borderRadius = "50%";
    botaoTema.style.border = "none";
    botaoTema.style.background = "#3498db";
    botaoTema.style.color = "#fff";
    botaoTema.style.fontSize = "20px";
    botaoTema.style.cursor = "pointer";
    botaoTema.style.zIndex = "999";
    botaoTema.style.boxShadow = "0 4px 12px rgba(0,0,0,0.2)";
    botaoTema.style.transition = "0.3s";

    document.body.appendChild(botaoTema);

    // Verifica se o usuário já escolheu um tema
    const temaSalvo = localStorage.getItem("tema");

    if (temaSalvo === "escuro") {
        document.body.classList.add("tema-escuro");
        botaoTema.innerHTML = "☀️";
    }

    botaoTema.addEventListener("click", () => {

        document.body.classList.toggle("tema-escuro");

        const modoEscuro =
            document.body.classList.contains("tema-escuro");

        if (modoEscuro) {
            botaoTema.innerHTML = "☀️";
            localStorage.setItem("tema", "escuro");
        } else {
            botaoTema.innerHTML = "🌙";
            localStorage.setItem("tema", "claro");
        }
    });


    // ==================================================
    // ✨ ANIMAÇÃO DAS SEÇÕES
    // ==================================================

    const secoes = document.querySelectorAll("section");

    const observador = new IntersectionObserver(
        (entradas) => {

            entradas.forEach((entrada) => {

                if (entrada.isIntersecting) {

                    entrada.target.style.opacity = "1";
                    entrada.target.style.transform = "translateY(0)";

                    observador.unobserve(entrada.target);
                }
            });

        },
        {
            threshold: 0.15
        }
    );

    secoes.forEach((secao) => {

        secao.style.opacity = "0";
        secao.style.transform = "translateY(30px)";
        secao.style.transition = "opacity 0.7s ease, transform 0.7s ease";

        observador.observe(secao);
    });


    // ==================================================
    // ⬆️ BOTÃO VOLTAR AO TOPO
    // ==================================================

    const botaoTopo = document.createElement("button");

    botaoTopo.innerHTML = "↑";
    botaoTopo.title = "Voltar ao topo";

    botaoTopo.style.position = "fixed";
    botaoTopo.style.bottom = "80px";
    botaoTopo.style.right = "20px";
    botaoTopo.style.width = "45px";
    botaoTopo.style.height = "45px";
    botaoTopo.style.borderRadius = "50%";
    botaoTopo.style.border = "none";
    botaoTopo.style.background = "#5dade2";
    botaoTopo.style.color = "white";
    botaoTopo.style.fontSize = "24px";
    botaoTopo.style.fontWeight = "bold";
    botaoTopo.style.cursor = "pointer";
    botaoTopo.style.display = "none";
    botaoTopo.style.zIndex = "999";
    botaoTopo.style.boxShadow = "0 4px 10px rgba(0,0,0,0.2)";

    document.body.appendChild(botaoTopo);

    window.addEventListener("scroll", () => {

        if (window.scrollY > 300) {
            botaoTopo.style.display = "block";
        } else {
            botaoTopo.style.display = "none";
        }
    });

    botaoTopo.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });


    // ==================================================
    // 🧭 ROLAGEM SUAVE DO MENU
    // ==================================================

    const linksMenu = document.querySelectorAll('nav a[href^="#"]');

    linksMenu.forEach((link) => {

        link.addEventListener("click", (evento) => {

            evento.preventDefault();

            const destino = document.querySelector(
                link.getAttribute("href")
            );

            if (destino) {

                destino.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    });


    // ==================================================
    // 👋 MENSAGEM DE BOAS-VINDAS
    // ==================================================

    console.log(
        "🌱 Bem-vindo ao Projeto Agrinho 2026!"
    );

    console.log(
        "💡 Tecnologia + Sustentabilidade + Inovação"
    );

});
