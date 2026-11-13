
/* ========================================
   PRODUTOS - NOVIDADES
======================================== */

const produtos = [
    {
        id: 1,
        nome: "Cesta Colar Eu Te Amo",
        preco: "R$ 138,00",
        imagem: "../imagens/novidades/cesta-eu te amo.jpg",
        descricao: "Uma cesta especial para surpreender quem você ama.",
        detalhes: `Cesta de madeira contendo:

• Pelúcia
• Caixa com colar de projeção Eu Te Amo em 100 idiomas
• Placa de chocolate
• 1 rosa artificial`
    },

    {
        id: 2,
        nome: "Cestinha Coração",
        preco: "R$ 78,00",
        imagem: "../imagens/novidades/cesta-coração.jpg",
        descricao: "Uma lembrança delicada e cheia de carinho.",
        detalhes: `Cesta de madeira contendo:

• Pelúcia
• 7 bombons sortidos
• 1 rosa artificial`
    },

    {
        id: 3,
        nome: "Cesta Mickey",
        preco: "R$ 128,00",
        imagem: "../imagens/novidades/cesta-Mickey.jpg",
        descricao: "Uma cesta divertida e especial para presentear.",
        detalhes: `Cesta de madeira contendo:

• Pelúcia do Mickey
• Placa de chocolate
• 6 bombons sortidos Nestlé
• 1 rosa artificial`
    },

    {
        id: 4,
        nome: "Cestinha Minnie",
        preco: "R$ 128,00",
        imagem: "../imagens/novidades/cesta-Minnie.jpg",
        descricao: "Um presente encantador para alguém especial.",
        detalhes: `Cesta contendo:

• Pelúcia da Minnie
• Placa de chocolate
• 6 chocolates sortidos Nestlé
• 1 rosa artificial`
    },

    {
        id: 5,
        nome: "Cesta Para Minha Pessoa",
        preco: "R$ 198,00",
        imagem: "../imagens/novidades/cesta-para minha pessoa.jpg",
        descricao: "Uma cesta completa para demonstrar todo o seu carinho.",
        detalhes: `Cesta grande contendo:

• Caixa com colar de projeção Eu Te Amo em 100 idiomas
• Nutella
• Caneca de porcelana
• Almofada
• Batata Pringles
• Bis
• Suflair
• Barra de chocolate
• 11 bombons sortidos`
    },

    {
        id: 6,
        nome: "Buquê 3 Rosas Cor de Rosa",
        preco: "R$ 98,00",
        imagem: "../imagens/novidades/buque-3 rosas.jpg",
        descricao: "Um delicado buquê de três rosas cor de rosa.",
        detalhes: `Buquê composto por:

• 3 rosas cor de rosa`
    },

    {
        id: 7,
        nome: "Rosa Black Piano",
        preco: "R$ 48,00",
        imagem: "../imagens/novidades/rosa-black piano.jpg",
        descricao: "Uma rosa especial para eternizar momentos.",
        detalhes: `Rosa Black Piano.

Um presente delicado e elegante para surpreender alguém especial.`
    },

    {
        id: 8,
        nome: "Sacola Visor",
        preco: "R$ 148,00",
        imagem: "../imagens/novidades/sacola-urso.jpg",
        descricao: "Uma sacola presenteável com pelúcia e chocolates.",
        detalhes: `Sacola contendo:

• Urso de pelúcia
• Caixa com bombons sortidos`
    },

    {
        id: 9,
        nome: "Em breve",
        preco: "Aguardando informações",
        imagem: "",
        descricao: "Uma nova novidade está chegando!",
        detalhes: "Em breve, mais informações sobre este produto."
    }
];


/* ========================================
   ELEMENTOS DA PÁGINA
======================================== */

const gradeProdutos = document.getElementById("gradeProdutos");

const modal = document.getElementById("modalProduto");
const fecharModal = document.getElementById("fecharModal");

const modalAreaImagem = document.getElementById("modalAreaImagem");
const modalNome = document.getElementById("modalNome");
const modalPreco = document.getElementById("modalPreco");
const modalDescricao = document.getElementById("modalDescricao");
const modalDetalhes = document.getElementById("modalDetalhes");
const modalWhatsApp = document.getElementById("modalWhatsApp");

const numeroWhatsApp = "55SEUNUMERO";


/* ========================================
   CRIAR IMAGEM DO PRODUTO
======================================== */

function criarImagem(produto) {
    const areaImagem = document.createElement("div");
    areaImagem.classList.add("imagem-produto");

    if (produto.imagem) {
        const imagem = document.createElement("img");

        imagem.src = produto.imagem;
        imagem.alt = produto.nome;

        areaImagem.appendChild(imagem);
    } else {
        const reservado = document.createElement("span");

        reservado.textContent = "Em breve";

        areaImagem.appendChild(reservado);
        areaImagem.classList.add("imagem-reservada");
    }

    return areaImagem;
}


/* ========================================
   ABRIR MODAL DO PRODUTO
======================================== */

function abrirProduto(id) {
    const produto = produtos.find(item => item.id === id);

    if (!produto) return;

    modalNome.textContent = produto.nome;
    modalPreco.textContent = produto.preco;
    modalDescricao.textContent = produto.descricao;
    modalDetalhes.textContent = produto.detalhes;

    // Imagem do produto
    modalAreaImagem.innerHTML = "";

    if (produto.imagem) {
        const imagem = document.createElement("img");

        imagem.src = produto.imagem;
        imagem.alt = produto.nome;

        modalAreaImagem.appendChild(imagem);
    } else {
        const reservado = document.createElement("span");

        reservado.textContent = "Imagem em breve";

        modalAreaImagem.appendChild(reservado);
    }

    // WhatsApp
    const mensagem = `Olá! Gostaria de saber mais sobre o produto ${produto.nome}, anunciado por ${produto.preco}.`;

    modalWhatsApp.href = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;

    // Exibir modal
    modal.style.display = "flex";
    modal.style.visibility = "visible";
    modal.style.opacity = "1";
    modal.style.pointerEvents = "auto";

    modal.setAttribute("aria-hidden", "false");

    document.body.style.overflow = "hidden";
}


/* ========================================
   FECHAR MODAL
======================================== */

function fecharJanela() {
    modal.style.display = "none";
    modal.style.visibility = "hidden";
    modal.style.opacity = "0";
    modal.style.pointerEvents = "none";

    modal.setAttribute("aria-hidden", "true");

    document.body.style.overflow = "";
}


/* ========================================
   CARREGAR PRODUTOS
======================================== */

function carregarProdutos() {
    if (!gradeProdutos) {
        console.error("Não foi encontrado o elemento gradeProdutos.");
        return;
    }

    gradeProdutos.innerHTML = "";

    produtos.forEach(produto => {
        const card = document.createElement("div");
        card.classList.add("produto");

        // Imagem
        const imagem = criarImagem(produto);

        // Informações
        const informacoes = document.createElement("div");
        informacoes.classList.add("informacoes-produto");

        const nome = document.createElement("h3");
        nome.textContent = produto.nome;

        const descricao = document.createElement("p");
        descricao.textContent = produto.descricao;

        const preco = document.createElement("strong");
        preco.classList.add("preco");
        preco.textContent = produto.preco;

        // Botão de detalhes
        const botao = document.createElement("button");

        botao.type = "button";
        botao.classList.add("botao-consultar");
        botao.textContent = "Ver detalhes";

        // Abrir o modal diretamente pelo botão
        botao.addEventListener("click", function() {
            abrirProduto(produto.id);
        });

        // Montar informações
        informacoes.appendChild(nome);
        informacoes.appendChild(descricao);
        informacoes.appendChild(preco);
        informacoes.appendChild(botao);

        // Montar card
        card.appendChild(imagem);
        card.appendChild(informacoes);

        gradeProdutos.appendChild(card);
    });
}


/* ========================================
   EVENTOS DO MODAL
======================================== */

// Fechar pelo botão
if (fecharModal) {
    fecharModal.addEventListener("click", fecharJanela);
}

// Fechar clicando fora
if (modal) {
    modal.addEventListener("click", function(event) {
        if (event.target === modal) {
            fecharJanela();
        }
    });
}

// Fechar com ESC
document.addEventListener("keydown", function(event) {
    if (event.key === "Escape" && modal.style.display === "flex") {
        fecharJanela();
    }
});


/* ========================================
   INICIALIZAÇÃO
======================================== */

carregarProdutos();
