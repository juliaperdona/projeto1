const formulario = document.getElementById("formulario");
formulario.onsubmit = salvarDica;

var dados = JSON.parse(localStorage.getItem("Dados")) || [];

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
    criarCard()
    alert("Dica cadastrada!")

}

function criarCard() {
    const dados = JSON.parse(localStorage.getItem("Dados"));
    const listaCards = document.getElementById('lista-cards')
    let card = ''
    dados.forEach(element => {
        card +=

            `<li id="card-dica">
                <h3>${element.titulo}</h3>
                <h5>Linguagem/Skill:${element.linguagem}</h5>
                <h5>Categoria:${element.categoria}</h5>
                <p>${element.descricao}</p>
                        <div class="botoes">
                            <a href="${element.video}" target="_blank"><button>Vídeo</button></a>
                            <button onclick="editar">Editar</button>
                            <button onclick="excluir(${element.id})" id="excluir">Excluir</button>
                        </div>
            </li>`
        listaCards.innerHTML = card

    });
}


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
        criarCard()
        alert("Dica excluída")
    }
}

criarCard()

function total() {
    let contadorCards = dados.length;
    let contadorTotal = document.getElementById("total");
    contadorTotal.innerText = contadorCards
}

total()

function totalFrontEnd() {
    function frontEnd(element) {
        return element.categoria == "frontEnd"
    }

    let contadorFrontEnd = dados.filter(frontEnd)
    let contadorTotalFront = contadorFrontEnd.length
    let contadorTotal = document.getElementById("totalFrontEnd");
    contadorTotal.innerText = contadorTotalFront
}
totalFrontEnd()

function totalBackEnd() {
    function backEnd(element) {
        return element.categoria == "BackEnd"
    }

    let contadorBackEnd = dados.filter(backEnd)
    let contadorTotalBack = contadorBackEnd.length
    let contadorTotal = document.getElementById("totalBackEnd");
    contadorTotal.innerText = contadorTotalBack
}
totalBackEnd()

function totalFullStack() {
    function fullStack(element) {
        return element.categoria == "fullStack"
    }
    let contadorFullStack = dados.filter(fullStack)
    let contadorTotalFull = contadorFullStack.length
    let contadorTotal = document.getElementById("totalFullStack");
    contadorTotal.innerText = contadorTotalFull
}
totalFullStack()

function totalSoftSkills() {

    function softSkills(element) {
        return element.categoria == "softSkills"
    }

    let contadorSoftSkills = dados.filter(softSkills)
    let contadorTotalSoft = contadorSoftSkills.length
    let contadorTotal = document.getElementById("totalSoftSkills");
    contadorTotal.innerText = contadorTotalSoft
}
totalSoftSkills()

function buscar() {
    function busca() {
        return document.getElementById("pesquisar")
    }
    let pesquisa = dados.filter(busca)
    

}
buscar()