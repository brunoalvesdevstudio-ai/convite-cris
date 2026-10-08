// ===============================
// CONFIGURAÇÃO
// ===============================

const numeroWhatsApp = "5519998729249";


// ===============================
// DADOS
// ===============================

let encontro = {

    dia: "",
    hora: "",
    local: ""

};


// Controle da pegadinha

let intervaloPegadinha = null;
let timeoutPegadinha = null;


// ===============================
// ELEMENTOS
// ===============================

const telas =
    document.querySelectorAll(".card");

const btnSim =
    document.getElementById("btnSim");

const btnNao =
    document.getElementById("btnNao");

const mensagemNao =
    document.getElementById("mensagemNao");

const botoesDia =
    document.querySelectorAll(".dia");

const btnAdiar =
    document.getElementById("btnAdiar");

const btnHora =
    document.getElementById("btnHora");

const inputHora =
    document.getElementById("hora");

const erroHora =
    document.getElementById("erroHora");

const botoesLocal =
    document.querySelectorAll(".local");

const btnWhatsapp =
    document.getElementById("btnWhatsapp");

const btnWhatsappAdiar =
    document.getElementById("btnWhatsappAdiar");

const btnOutraIdeia =
    document.getElementById("btnOutraIdeia");

const campoOutraIdeia =
    document.getElementById("campoOutraIdeia");

const inputOutraIdeia =
    document.getElementById("outraIdeia");

const btnConfirmarIdeia =
    document.getElementById("btnConfirmarIdeia");

const erroIdeia =
    document.getElementById("erroIdeia");


// ===============================
// TROCAR DE TELA
// ===============================

function mostrarTela(id) {

    telas.forEach(function(tela) {

        tela.classList.add("escondido");

    });

    document
        .getElementById(id)
        .classList.remove("escondido");

}


// ===============================
// VOLTAR
// ===============================

document
    .querySelectorAll("[data-voltar]")
    .forEach(function(botao) {

        botao.addEventListener(
            "click",
            function() {

                const destino =
                    botao.dataset.voltar;

                mostrarTela(destino);

            }
        );

    });


// Voltar durante a pegadinha

document
    .getElementById("voltarPegadinha")
    .addEventListener(
        "click",
        function() {

            pararPegadinha();

            mostrarTela("telaHora");

        }
    );


// ===============================
// SIM
// ===============================

btnSim.addEventListener(
    "click",
    function() {

        mostrarTela("telaDia");

    }
);


// ===============================
// NÃO
// ===============================

let quantidadeNao = 0;

btnNao.addEventListener(
    "click",
    function() {

        quantidadeNao++;

        const mensagens = [

            "Essa opção não existe kkkkk 😂",

            "Cris... acho que você clicou no botão errado 🤨",

            "Esse botão aparentemente está com defeito 😂",

            "Tentativa interessante... porém inválida 😌",

            "Tá bom, já percebi que você gosta de testar o sistema kkkkk"

        ];

        let indice =
            quantidadeNao - 1;

        if (
            indice >=
            mensagens.length
        ) {

            indice =
                mensagens.length - 1;

        }

        mensagemNao.textContent =
            mensagens[indice];

        btnNao.classList.remove(
            "tremendo"
        );

        void btnNao.offsetWidth;

        btnNao.classList.add(
            "tremendo"
        );

    }
);


// ===============================
// DIA
// ===============================

botoesDia.forEach(
    function(botao) {

        botao.addEventListener(
            "click",
            function() {

                encontro.dia =
                    botao.dataset.dia;

                mostrarTela(
                    "telaHora"
                );

            }
        );

    }
);


// ===============================
// ADIAR
// ===============================

btnAdiar.addEventListener(
    "click",
    function() {

        encontro.dia =
            "Prefere combinar outro dia";

        mostrarTela(
            "telaAdiar"
        );

    }
);


// ===============================
// HORÁRIO
// ===============================

btnHora.addEventListener(
    "click",
    function() {

        const hora =
            inputHora.value;

        if (hora === "") {

            erroHora.textContent =
                "Só faltou escolher o horário 👀";

            return;

        }

        erroHora.textContent = "";

        encontro.hora =
            hora;

        iniciarPegadinha();

    }
);


// ===============================
// PEGADINHA
// ===============================

function iniciarPegadinha() {

    pararPegadinha();

    mostrarTela(
        "telaPegadinha"
    );

    const texto =
        document.getElementById(
            "opcaoFalsa"
        );

    const emoji =
        document.getElementById(
            "emojiPegadinha"
        );

    const opcoesFalsas = [

        "🏃 Correr",

        "🏋️ Academia",

        "🥾 Trilha",

        "🏃‍♂️ Maratona"

    ];

    let indice = 0;

    emoji.textContent = "🤔";

    texto.textContent =
        opcoesFalsas[indice];

    intervaloPegadinha =
        setInterval(
            function() {

                indice++;

                if (
                    indice <
                    opcoesFalsas.length
                ) {

                    texto.textContent =
                        opcoesFalsas[indice];

                }

                else {

                    clearInterval(
                        intervaloPegadinha
                    );

                    intervaloPegadinha =
                        null;

                    emoji.textContent =
                        "😂";

                    texto.textContent =
                        "Brincadeira kkkkk";

                    timeoutPegadinha =
                        setTimeout(
                            function() {

                                mostrarTela(
                                    "telaOpcoes"
                                );

                            },
                            1500
                        );

                }

            },
            900
        );

}


function pararPegadinha() {

    if (
        intervaloPegadinha
    ) {

        clearInterval(
            intervaloPegadinha
        );

        intervaloPegadinha = null;

    }

    if (
        timeoutPegadinha
    ) {

        clearTimeout(
            timeoutPegadinha
        );

        timeoutPegadinha = null;

    }

}


// ===============================
// LOCAIS
// ===============================

botoesLocal.forEach(
    function(botao) {

        botao.addEventListener(
            "click",
            function() {

                encontro.local =
                    botao.dataset.local;

                finalizar();

            }
        );

    }
);


// ===============================
// OUTRA IDEIA
// ===============================

btnOutraIdeia.addEventListener(
    "click",
    function() {

        campoOutraIdeia
            .classList
            .remove("escondido");

        inputOutraIdeia.focus();

    }
);


btnConfirmarIdeia.addEventListener(
    "click",
    function() {

        const ideia =
            inputOutraIdeia
                .value
                .trim();

        if (ideia === "") {

            erroIdeia.textContent =
                "Agora fiquei curioso... qual seria sua ideia? 😂";

            return;

        }

        erroIdeia.textContent = "";

        encontro.local =
            ideia;

        finalizar();

    }
);


// ===============================
// FINAL
// ===============================

function finalizar() {

    mostrarTela(
        "telaFinal"
    );

    document
        .getElementById(
            "resumoDia"
        )
        .textContent =
        encontro.dia;

    document
        .getElementById(
            "resumoHora"
        )
        .textContent =
        encontro.hora;

    document
        .getElementById(
            "resumoLocal"
        )
        .textContent =
        encontro.local;


    const mensagemFinal =
        document.getElementById(
            "mensagemFinal"
        );


    if (
        encontro.local.includes(
            "íntimo"
        )
    ) {

        mensagemFinal.textContent =
            "Opa... essa opção foi clicada mesmo 👀😂";

    }

    else if (
        encontro.local ===
        "Apenas nos vermos"
    ) {

        mensagemFinal.textContent =
            "Gostei 😌 às vezes só se ver e conversar já é o melhor plano.";

    }

    else {

        mensagemFinal.textContent =
            "Perfeito 😌 agora só falta me mandar essa resposta.";

    }

}


// ===============================
// WHATSAPP
// ===============================

btnWhatsapp.addEventListener(
    "click",
    function() {

        const mensagem =

`Aceitei o convite 😌❤️

📅 Dia: ${encontro.dia}
⏰ Horário: ${encontro.hora}
📍 Ideia: ${encontro.local}

Agora a gente combina o restante 😂`;

        abrirWhatsApp(
            mensagem
        );

    }
);


// ===============================
// ADIAR PELO WHATSAPP
// ===============================

btnWhatsappAdiar.addEventListener(
    "click",
    function() {

        const mensagem =

`Gostei do convite 😂❤️

Mas acho melhor a gente deixar para outro dia.

Depois a gente combina 😌`;

        abrirWhatsApp(
            mensagem
        );

    }
);


// ===============================
// ABRIR WHATSAPP
// ===============================

function abrirWhatsApp(
    mensagem
) {

    const texto =
        encodeURIComponent(
            mensagem
        );

    const link =
        `https://wa.me/${numeroWhatsApp}?text=${texto}`;

    window.open(
        link,
        "_blank"
    );

}