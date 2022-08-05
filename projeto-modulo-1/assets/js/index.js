const formulario = document.getElementById("formulario");
formulario.onsubmit = salvarDica;

function salvarDica(event){
    event.preventDefault();

    const titulo = document.getElementById('titulo').value
    const linguagem = document.getElementById('linguagem').value
    const categoria = document.getElementById('categoria1').value
    const descricao = document.getElementById('descricao').value
    const video = document.getElementById('video').value

 var dados = JSON.parse(localStorage.getItem("Dados"));

 if(dados == null){
    localStorage.setItem("Dados", "[]")
    dados = []
 }
const card = {
    id : new Date().getTime(),
    titulo: titulo,
    linguagem : linguagem,
    categoria : categoria,
    descricao : descricao,
    video : video,

}
 dados.push(card);
 localStorage.setItem("Dados", JSON.stringify(dados))

 criarCard()

}

function criarCard(){
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
                            <button onclick="excluir()" id="excluir">Excluir</button>
                        </div>
            </li>`
            listaCards.innerHTML = card
        
    });
}


function excluir(){
    var dados = JSON.parse(localStorage.getItem("Dados"))
    var id = localStorage.getItem('id')
   console.log(id)
}
