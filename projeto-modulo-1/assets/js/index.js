import { total, totalFrontEnd, totalBackEnd, totalFullStack, totalSoftSkills } from "./cards-contador.js"

form.onsubmit = salvarDica;

total()
totalFrontEnd()
totalBackEnd()
totalFullStack()
totalSoftSkills()
var dados = JSON.parse(localStorage.getItem("Dados")) || [];
let edicaoId;

function salvarDica(event) {
    event.preventDefault();

    const titulo = document.getElementById('titulo').value
    const linguagem = document.getElementById('linguagem').value
    const categoria = document.getElementById('categoria1').value
    const descricao = document.getElementById('descricao').value
    const video = document.getElementById('video').value


    if (dados == null) {
        localStorage.setItem("Dados", "[]")
        dados = []
    }
    const card = {
        id: new Date().getTime(),
        titulo: titulo,
        linguagem: linguagem,
        categoria: categoria,
        descricao: descricao,
        video: video,

    }
    dados.push(card);
    localStorage.setItem("Dados", JSON.stringify(dados))

    total()
    totalFrontEnd()
    totalBackEnd()
    totalFullStack()
    totalSoftSkills()
    criarCard(dados)
    alert("Dica cadastrada!")

}

function criarCard(elemento) {
    const listaCards = document.getElementById('lista-cards')
    let card = ''
    elemento.forEach(element => {
        card +=
            `<li id="card-dica">
                <h3>${element.titulo}</h3>
                <h5>Linguagem/Skill:${element.linguagem}</h5>
                <h5>Categoria:${element.categoria}</h5>
                <p>${element.descricao}</p>
                        <div class="botoes">
                            <a href="${element.video}" target="_blank"><button>Vídeo</button></a>
                            <button onclick="editar(${element.id})">Editar</button>
                            <button onclick="excluir(${element.id})" id="excluir">Excluir</button>
                        </div>
            </li>`
        listaCards.innerHTML = card

    });
}

criarCard(dados)

function excluir(elementId) {
    if (window.confirm("Você deseja excluir?")) {

        console.log(elementId)
        dados = dados.filter(({ id }) => {
            return id != elementId
        });

        localStorage.setItem("Dados", JSON.stringify(dados))

        totalFrontEnd()
        totalBackEnd()
        totalFullStack()
        totalSoftSkills()
        total()
        criarCard(dados)
        alert("Dica excluída")
    }
}

criarCard(dados)


buscar.addEventListener("input", (e) => {
    const filtroBusca = e.target.value.toLowerCase();
    const cardFiltrado = dados.filter((element) => {
        return element.titulo.toLowerCase().includes(filtroBusca);
    });
    criarCard(cardFiltrado);
});

function editar(elementId) {
    if (confirm("Deseja realizar a edição do card?")) {
        const [editarCard] = dados.filter(({ id }) => {
            return id == elementId;
        });
        document.getElementById("titulo").value = editarCard.titulo;
        document.getElementById("linguagem").value = editarCard.linguagem;
        document.getElementById("categoria1").value = editarCard.categoria;
        document.getElementById("descricao").value = editarCard.descricao;
        document.getElementById("video").value = editarCard.video;
        edicaoId = elementId;
        formulario.onsubmit = salvarEdit;
    }
}

function salvarEdit() {
    const novosDados = dados.map((dado) => {
        if (dado.id == edicaoId) {
            return {
                titulo: document.getElementById("titulo").value,
                linguagem: document.getElementById("linguagem").value,
                categoria: document.getElementById("categoria1").value,
                descricao: document.getElementById("descricao").value,
                video: document.getElementById("video").value,
                id: edicaoId,
            };
        }
        return dado;
    });
    dados = novosDados;
    localStorage.setItem("Dados", JSON.stringify(novosDados));
    formulario.onsubmit = salvarDica;
    edicaoId = "";
    alert("Card editado");
    criarCard(dados);
}