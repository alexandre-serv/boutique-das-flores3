
/* ========================================
   PRODUTOS
======================================== */

const produtos = [

    // OPÇÕES ESPECIAIS

    {
        id: 1,
        nome: "Café da Manhã Luxo com Orquídea",
        categoria: "especial",
        preco: "R$ 528,00",
        descricao: "Uma cesta sofisticada para surpreender em ocasiões especiais.",
        detalhes: "Consulte a loja para conhecer a composição completa deste produto.",
        imagem: "../imagens/cafe/luxo-orquidea.jpg"
    },

    {
        id: 2,
        nome: "Café da Manhã Luxo com Orquídea Branca",
        categoria: "especial",
        preco: "R$ 528,00",
        descricao: "Elegância e delicadeza em uma cesta preparada para encantar.",
        detalhes: "Consulte a loja para conhecer a composição completa deste produto.",
        imagem: "../imagens/cafe/luxo-orquidea-branca.jpg"
    },


    // NOSSAS QUERIDINHAS

    {
        id: 3,
        nome: "Cesta com Rosas e Pelúcia de Coração",
        categoria: "queridinha",
        preco: "R$ 258,00",
        descricao: "Um presente romântico com rosas colombianas, pelúcia e uma delicada caneca de porcelana.",
        detalhes: "Contém:\n- Arranjo com 6 rosas colombianas\n- Pelúcia em formato de coração\n- Caneca de porcelana (consultar modelo disponível)\n- Caixa de bombom em formato de coração\n\nPode haver variações naturais das flores e outras interferências. Os produtos podem sofrer alterações. As imagens exibidas são meramente ilustrativas.",
        imagem: "../imagens/cesta-flores/cesta-rosas-pelucia-coracao.jpg"
    },

    {
        id: 4,
        nome: "Cesta Apaixonado",
        categoria: "queridinha",
        preco: "R$ 248,00",
        descricao: "Uma combinação especial de flores, chocolates e pelúcia para surpreender quem você ama.",
        detalhes: "Contém:\n- 2 rosas\n- 1 caixa de bombom Nestlé\n- 2 chocolates KitKat\n- 4 Sonho de Valsa\n- 1 pelúcia\n\nPode haver variações naturais das flores e outras interferências. Os produtos podem sofrer alterações. As imagens exibidas são meramente ilustrativas.",
        imagem: "../imagens/cesta-flores/cesta-apaixonado.jpg"
    },

    {
        id: 5,
        nome: "Girassóis e Vinho",
        categoria: "queridinha",
        preco: "R$ 298,00",
        descricao: "Um presente marcante que combina girassóis, rosas vermelhas e acompanhamentos especiais.",
        detalhes: "Contém:\n- 2 taças de vidro\n- 3 Ferrero Rocher\n- 1 geleia\n- 1 torrada\n- 1 cacho de uva\n- 3 girassóis\n- 5 rosas vermelhas\n\nPode haver variações naturais das flores e outras interferências. Os produtos podem sofrer alterações. As imagens exibidas são meramente ilustrativas.",
        imagem: "../imagens/cesta-flores/girassois-e-vinho.jpg"
    },

    {
        id: 6,
        nome: "Café da Manhã Raio de Sol",
        categoria: "queridinha",
        preco: "R$ 298,00",
        descricao: "Um café da manhã especial acompanhado de um lindo arranjo com girassóis e astromélias.",
        detalhes: "Contém:\n- 1 arranjo com 3 girassóis e astromélias\n- 1 Sucrilhos\n- 1 iogurte\n- 1 Cookies 96g\n- 2 cafezinhos\n- 1 cappuccino 20g\n- 1 café com leite solúvel 200g\n- 2 méis\n- 1 geleia importada\n- 2 bolinhos\n- 1 suquinho\n- 2 torradas\n\nPode haver variações naturais das flores e outras interferências. Os produtos podem sofrer alterações. As imagens exibidas são meramente ilustrativas.",
        imagem: "../imagens/cesta-flores/cafe-da-manha-raio-de-sol.jpg"
    },


    // NOSSO CATÁLOGO

    {
        id: 7,
        nome: "Cesta de Rosas Colombianas",
        categoria: "catalogo",
        preco: "R$ 228,00",
        descricao: "Uma delicada cesta com 12 rosas vermelhas colombianas e gipsofila.",
        detalhes: "Contém:\n- 12 rosas vermelhas\n- Gipsofila\n- Cesta",
        imagem: "../imagens/cesta-flores/12-rosas.jpg"
    },

    {
        id: 8,
        nome: "Cesta Paixão com Rosas Colombianas",
        categoria: "catalogo",
        preco: "R$ 248,00",
        descricao: "Um presente apaixonante com rosas colombianas e um lindo balão de coração.",
        detalhes: "Contém:\n- 12 rosas vermelhas colombianas\n- Gypsophila\n- Folhagem\n- Espuma floral\n- Balão de coração\n- Laço\n\nPode ter variações naturais das flores e outras interferências. Os produtos podem sofrer alterações. As imagens exibidas são meramente ilustrativas.",
        imagem: "../imagens/cesta-flores/rosas-balão.jpg"
    },

    {
        id: 9,
        nome: "CX Begônia Luxo",
        categoria: "catalogo",
        preco: "R$ 188,00",
        descricao: "Uma combinação encantadora de begônia, chocolates e pelúcia em uma elegante caixa box.",
        detalhes: "Contém:\n- Begônia plantada no vaso\n- Ferrero Rocher com 8 unidades\n- Chaveiro de pelúcia mini\n- Caixa box",
        imagem: "../imagens/cesta-flores/rosas-balão-caixa.jpg"
    },

    {
        id: 10,
        nome: "Box Amor Perfeito",
        categoria: "catalogo",
        preco: "R$ 188,00",
        descricao: "Um presente delicado que reúne rosa, chocolate e pelúcia em uma linda caixa.",
        detalhes: "Contém:\n- 1 rosa enfeitada\n- 1 coração de chocolate 134g\n- 1 pelúcia pequena\n- 1 box com tampa",
        imagem: "../imagens/cesta-flores/rosas-ursinho-caixa.jpg"
    },

    {
        id: 11,
        nome: "Cesta Kalandiva",
        categoria: "catalogo",
        preco: "R$ 98,00",
        descricao: "Uma charmosa cesta com Kalandiva, Ferrero Rocher e acabamento especial.",
        detalhes: "Contém:\n- 1 Kalandiva (rosa pink ou vermelha)\n- 1 Ferrero Rocher com 8 unidades\n- 1 cesta 20x30 embalada com plástico celofane e um laço\n\nPode ter variações naturais das flores e outras interferências. Os produtos podem sofrer alterações. As imagens exibidas são meramente ilustrativas.",
        imagem: "../imagens/cesta-flores/Kalandiva.jpg"
    },

    {
        id: 12,
        nome: "Cesta Violeta",
        categoria: "catalogo",
        preco: "R$ 58,00",
        descricao: "Uma cesta delicada com violeta de cores sortidas e deliciosos bombons.",
        detalhes: "Contém:\n- 1 violeta de cores sortidas\n- 7 bombons\n- 1 cesta de palha enfeitada e embalada em plástico celofane com um laço\n\nAs cores das violetas podem sofrer alterações de acordo com a disponibilidade na loja.\n\nPode ter variações naturais das flores e outras interferências. Os produtos podem sofrer alterações. As imagens exibidas são meramente ilustrativas.",
        imagem: "../imagens/cesta-flores/violeta.jpg"
    },

    {
        id: 13,
        nome: "Cesta Rosas com Frutas",
        categoria: "catalogo",
        preco: "R$ 198,00",
        descricao: "Um lindo arranjo com rosas acompanhado de uma seleção especial de frutas frescas.",
        detalhes: "Contém:\n- Arranjo com 4 rosas\n- 1 cacho de uva\n- 1 kiwi\n- 1 pera\n- 1 maçã\n- 2 laranjas\n- 1 mexerica\n- 1 atemoia\n- 4 bananas",
        imagem: "../imagens/cesta-flores/rosas-frutas.jpg"
    }

];


/* ========================================
   ELEMENTOS DA PÁGINA
======================================== */

const gradeEspeciais = document.getElementById("gradeEspeciais");
const gradeQueridinhas = document.getElementById("gradeQueridinhas");
const gradeProdutos = document.getElementById("gradeProdutos");

const modal = document.getElementById("modalProduto");
const fecharModal = document.getElementById("fecharModal");

const modalAreaImagem = document.getElementById("modalAreaImagem");
const modalNome = document.getElementById("modalNome");
const modalPreco = document.getElementById("modalPreco");
const modalDescricao = document.getElementById("modalDescricao");
const modalDetalhes = document.getElementById("modalDetalhes");
const modalWhatsApp = document.getElementById("modalWhatsApp");


/* ========================================
   CONFIGURAÇÃO DO WHATSAPP
======================================== */

// Use 55 + DDD + número, sem espaços ou símbolos.

const telefone = "55SEUNUMERO";


/* ========================================
   CRIAR ESPAÇO DA IMAGEM
======================================== */

function criarImagem(produto, classe) {

    const areaImagem = document.createElement("div");
    areaImagem.classList.add(classe);

    if (produto.imagem) {

        const imagem = document.createElement("img");

        imagem.src = produto.imagem;
        imagem.alt = produto.nome;

        areaImagem.appendChild(imagem);

    } else {

        const texto = document.createElement("span");

        texto.classList.add("imagem-reservada");
        texto.textContent = "Adicionar foto";

        areaImagem.appendChild(texto);

    }

    return areaImagem;

}


/* ========================================
   CARREGAR OPÇÕES ESPECIAIS
======================================== */

function carregarEspeciais() {

    const especiais = produtos.filter(
        (produto) => produto.categoria === "especial"
    );

    especiais.forEach((produto) => {

        const card = document.createElement("article");
        card.classList.add("produto-especial");

        // IMAGEM

        const imagem = criarImagem(produto, "imagem-especial");

        // ETIQUETA

        const etiqueta = document.createElement("span");
        etiqueta.classList.add("etiqueta-especial");
        etiqueta.textContent = "LINHA LUXO";

        // NOME

        const nome = document.createElement("h3");
        nome.textContent = produto.nome;

        // DESCRIÇÃO

        const descricao = document.createElement("p");
        descricao.textContent = produto.descricao;

        // PREÇO

        const preco = document.createElement("strong");
        preco.classList.add("preco-especial");
        preco.textContent = produto.preco;

        // BOTÃO

        const botao = document.createElement("button");
        botao.classList.add("botao-especial");
        botao.dataset.id = produto.id;
        botao.textContent = "Consultar produto";

        // ORDEM IGUAL À DO CAFÉ DA MANHÃ

        card.appendChild(imagem);
        card.appendChild(etiqueta);
        card.appendChild(nome);
        card.appendChild(descricao);
        card.appendChild(preco);
        card.appendChild(botao);

        gradeEspeciais.appendChild(card);

    });

}


/* ========================================
   CARREGAR QUERIDINHAS
======================================== */

function carregarQueridinhas() {

    const queridinhas = produtos.filter(
        (produto) => produto.categoria === "queridinha"
    );

    queridinhas.forEach((produto) => {

        const card = document.createElement("article");
        card.classList.add("produto-queridinha");

        const imagem = criarImagem(produto, "imagem-queridinha");

        const informacoes = document.createElement("div");
        informacoes.classList.add("informacoes-queridinha");

        informacoes.innerHTML = `
            <h3>${produto.nome}</h3>

            <p>${produto.descricao}</p>

            <strong class="preco-queridinha">${produto.preco}</strong>

            <button class="botao-queridinha" data-id="${produto.id}">
                Conhecer produto →
            </button>
        `;

        card.appendChild(imagem);
        card.appendChild(informacoes);

        gradeQueridinhas.appendChild(card);

    });

}


/* ========================================
   CARREGAR CATÁLOGO
======================================== */

function carregarProdutos() {

    const produtosNormais = produtos.filter(
        (produto) => produto.categoria === "catalogo"
    );

    produtosNormais.forEach((produto) => {

        const card = document.createElement("article");
        card.classList.add("produto");

        const imagem = criarImagem(produto, "imagem-produto");

        const informacoes = document.createElement("div");
        informacoes.classList.add("informacoes-produto");

        informacoes.innerHTML = `
            <h3>${produto.nome}</h3>

            <p>${produto.descricao}</p>

            <strong class="preco">${produto.preco}</strong>

            <button class="botao-consultar" data-id="${produto.id}">
                Consultar produto →
            </button>
        `;

        card.appendChild(imagem);
        card.appendChild(informacoes);

        gradeProdutos.appendChild(card);

    });

}


/* ========================================
   ABRIR DETALHES DO PRODUTO
======================================== */

function abrirProduto(id) {

    const produto = produtos.find(
        (item) => item.id === id
    );

    if (!produto) {
        return;
    }

    modalNome.textContent = produto.nome;
    modalPreco.textContent = produto.preco;
    modalDescricao.textContent = produto.descricao;
    modalDetalhes.textContent = produto.detalhes;

    modalAreaImagem.replaceChildren();

    if (produto.imagem) {

        const imagem = document.createElement("img");

        imagem.src = produto.imagem;
        imagem.alt = produto.nome;

        modalAreaImagem.appendChild(imagem);

    } else {

        const texto = document.createElement("span");

        texto.classList.add("imagem-reservada");
        texto.textContent = "Foto do produto";

        modalAreaImagem.appendChild(texto);

    }

    const mensagem = `Olá! Gostaria de saber mais sobre ${produto.nome}.`;

    modalWhatsApp.href =
        `https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`;

    modal.classList.add("aberto");
    modal.setAttribute("aria-hidden", "false");

    document.body.style.overflow = "hidden";

}


/* ========================================
   FECHAR DETALHES
======================================== */

function fecharJanela() {

    modal.classList.remove("aberto");
    modal.setAttribute("aria-hidden", "true");

    document.body.style.overflow = "";

}


/* ========================================
   EVENTOS DOS PRODUTOS
======================================== */

document.addEventListener("click", (evento) => {

    const botao = evento.target.closest(
        ".botao-especial, .botao-queridinha, .botao-consultar"
    );

    if (!botao) {
        return;
    }

    abrirProduto(Number(botao.dataset.id));

});


/* ========================================
   EVENTOS DO MODAL
======================================== */

fecharModal.addEventListener("click", fecharJanela);


// Fechar clicando fora da janela

modal.addEventListener("click", (evento) => {

    if (evento.target === modal) {
        fecharJanela();
    }

});


// Fechar usando ESC

document.addEventListener("keydown", (evento) => {

    if (evento.key === "Escape" && modal.classList.contains("aberto")) {
        fecharJanela();
    }

});


/* ========================================
   INICIAR PÁGINA
======================================== */

carregarEspeciais();
carregarQueridinhas();
carregarProdutos();
