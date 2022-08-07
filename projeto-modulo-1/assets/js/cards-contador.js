var dados = JSON.parse(localStorage.getItem("Dados")) || [];

export function total() {
    let contadorCards = dados.length;
    let contadorTotal = document.getElementById("total");
    contadorTotal.innerText = contadorCards
}

export function totalFrontEnd() {
    function frontEnd(element) {
        return element.categoria == "frontEnd"
    }

    let contadorFrontEnd = dados.filter(frontEnd)
    let contadorTotalFront = contadorFrontEnd.length
    let contadorTotal = document.getElementById("totalFrontEnd");
    contadorTotal.innerText = contadorTotalFront
}

export function totalBackEnd() {
    function backEnd(element) {
        return element.categoria == "BackEnd"
    }

    let contadorBackEnd = dados.filter(backEnd)
    let contadorTotalBack = contadorBackEnd.length
    let contadorTotal = document.getElementById("totalBackEnd");
    contadorTotal.innerText = contadorTotalBack
}


export function totalFullStack() {
    function fullStack(element) {
        return element.categoria == "fullStack"
    }
    let contadorFullStack = dados.filter(fullStack)
    let contadorTotalFull = contadorFullStack.length
    let contadorTotal = document.getElementById("totalFullStack");
    contadorTotal.innerText = contadorTotalFull
}


export function totalSoftSkills() {

    function softSkills(element) {
        return element.categoria == "softSkills"
    }

    let contadorSoftSkills = dados.filter(softSkills)
    let contadorTotalSoft = contadorSoftSkills.length
    let contadorTotal = document.getElementById("totalSoftSkills");
    contadorTotal.innerText = contadorTotalSoft
}

