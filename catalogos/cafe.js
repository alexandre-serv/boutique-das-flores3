
/* ========================================
   INFORMAÇÕES DOS PRODUTOS
======================================== */

const produtos = {

    "luxo-orquidea": {
        nome: "Café da Manhã Luxo com Orquídea",
        preco: "R$ 528,00",
        imagem: "../imagens/cafe/luxo-orquidea.jpg",
        descricao: "Uma cesta sofisticada para surpreender em ocasiões especiais.",
        itens: [],
        aviso: "Consulte a loja para conhecer a composição completa deste produto."
    },

    "luxo-orquidea-branca": {
        nome: "Café da Manhã Luxo com Orquídea Branca",
        preco: "R$ 528,00",
        imagem: "../imagens/cafe/luxo-orquidea-branca.jpg",
        descricao: "Elegância e delicadeza em uma cesta preparada para encantar.",
        itens: [],
        aviso: "Consulte a loja para conhecer a composição completa deste produto."
    },

    "raio-de-sol": {
        nome: "Café da Manhã Raio de Sol",
        preco: "R$ 298,00",
        imagem: "../imagens/cafe/raio-de-sol.jpg",
        descricao: "Uma cesta especial para tornar o dia de alguém ainda mais bonito.",
        itens: [
            "Arranjo com 3 girassóis e astromélias",
            "Sucrilhos",
            "Iogurte",
            "Cookies 96 g",
            "2 cafezinhos",
            "Cappuccino 20 g",
            "Café com leite solúvel 200 g",
            "2 méis",
            "Geleia importada",
            "Bolinho",
            "Suquinho",
            "2 torradas"
        ],
        aviso: "As flores podem apresentar variações naturais. Os produtos podem sofrer alterações. As imagens exibidas são meramente ilustrativas."
    },

    "rosas-frutas": {
        nome: "Cesta Rosas com Frutas",
        preco: "R$ 198,00",
        imagem: "../imagens/cafe/rosas-com-frutas.jpg",
        descricao: "Um presente delicado que combina flores e frutas.",
        itens: [
            "Arranjo com 4 rosas",
            "1 cacho de uva",
            "1 kiwi",
            "1 pêra",
            "1 maçã",
            "2 laranjas",
            "1 mexerica",
            "1 atemoia",
            "4 bananas"
        ],
        aviso: "As frutas e flores podem apresentar variações naturais."
    },

    "cesta-cafe": {
        nome: "Cesta Café da Manhã",
        preco: "R$ 158,00",
        imagem: "../imagens/cafe/cesta-cores.jpg",
        descricao: "Uma cesta de café da manhã com diversas opções para aproveitar.",
        itens: [
            "Pão",
            "Presunto",
            "Queijo",
            "2 frutas",
            "2 bolinhos",
            "3 biscoitos doces",
            "Biscoito Cream Cracker",
            "Achocolatado",
            "Club Social",
            "Suco",
            "2 geleias",
            "Café",
            "Açúcar",
            "Chá",
            "Torrada",
            "Tub-in"
        ],
        aviso: "Os produtos podem sofrer alterações. Consulte a loja para confirmar a disponibilidade."
    },

    "mini-cafe": {
        nome: "Cesta Mini Café com Flor",
        preco: "R$ 128,00",
        imagem: "../imagens/cafe/mini-cafe.jpg",
        descricao: "Uma opção delicada para presentear com carinho.",
        itens: [
            "Kalandiva plantada",
            "Bolinho",
            "Goiabinha",
            "2 biscoitos doces",
            "Torrada",
            "Suco",
            "Sucrilhos",
            "Club Social",
            "Sonho de Valsa"
        ],
        aviso: "A flor pode apresentar variações naturais."
    }

};


/* ========================================
   ELEMENTOS DA JANELA
======================================== */

const modal = document.getElementById("modalProduto");
const fecharModal = document.getElementById("fecharModal");

const modalImagem = document.getElementById("modalImagem");
const modalNome = document.getElementById("modalNome");
const modalPreco = document.getElementById("modalPreco");
const modalDescricao = document.getElementById("modalDescricao");
const modalLista = document.getElementById("modalLista");
const modalAviso = document.getElementById("modalAviso");
const modalWhatsApp = document.getElementById("modalWhatsApp");


/* ========================================
   ABRIR JANELA DO PRODUTO
======================================== */

document.querySelectorAll("[data-produto]").forEach(botao => {

    botao.addEventListener("click", () => {

        const identificador = botao.dataset.produto;
        const produto = produtos[identificador];

        if (!produto) return;

        modalImagem.src = produto.imagem;
        modalImagem.alt = produto.nome;

        modalNome.textContent = produto.nome;
        modalPreco.textContent = produto.preco;
        modalDescricao.textContent = produto.descricao;
        modalAviso.textContent = produto.aviso;

        // Limpa a lista anterior
        modalLista.innerHTML = "";

        // Adiciona os itens do produto selecionado
        if (produto.itens.length > 0) {

            produto.itens.forEach(item => {

                const elemento = document.createElement("li");

                elemento.textContent = item;

                modalLista.appendChild(elemento);

            });

        } else {

            const elemento = document.createElement("li");

            elemento.textContent = "Composição sob consulta.";

            modalLista.appendChild(elemento);

        }

        // Link do WhatsApp
        const telefone = "55SEUNUMERO";

        const mensagem = `Olá! Tenho interesse no produto ${produto.nome}, no valor de ${produto.preco}. Gostaria de mais informações.`;

        modalWhatsApp.href =
            `https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`;

        // Abre a janela
        modal.classList.add("aberto");
        modal.setAttribute("aria-hidden", "false");

        document.body.style.overflow = "hidden";

        fecharModal.focus();

    });

});


/* ========================================
   FECHAR JANELA
======================================== */

function fecharJanela() {

    modal.classList.remove("aberto");

    modal.setAttribute("aria-hidden", "true");

    document.body.style.overflow = "";

}

fecharModal.addEventListener("click", fecharJanela);


// Fecha ao clicar fora da janela
modal.addEventListener("click", (evento) => {

    if (evento.target === modal) {
        fecharJanela();
    }

});


// Fecha ao pressionar ESC
document.addEventListener("keydown", (evento) => {

    if (evento.key === "Escape" && modal.classList.contains("aberto")) {
        fecharJanela();
    }

});
