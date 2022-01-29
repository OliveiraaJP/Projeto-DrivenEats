let verificarPratos = null;
let verificarBebidas = null;
let verificarSobremesas = null;

let precoPrato = 0;
let precoBebida = 0;
let precoSobremesa = 0;



function escolherPrato(classPrato, nomePrato) {
    const selecionado = document.querySelector(".pratos .selecionado");
    const selecionadoIcone = document.querySelector(`${classPrato} ion-icon`);
    if (selecionado !== null) {
        selecionado.classList.remove("selecionado");
        selecionadoIcone.classList.add("escondido");
    }

    const bordaVerde = document.querySelector(classPrato);
    bordaVerde.classList.add("selecionado");

    const iconeVerde = document.querySelector(`${classPrato} .menu__card-checked`);
    iconeVerde.classList.remove("escondido");
    verificarPratos = nomePrato
    liberarPedido();

}


//--------------------------//

function escolherBebida(classBebida, nomeBebida) {
    const selecionado = document.querySelector(".bebidas .selecionado");
    const selecionadoIcone = document.querySelector(`${classBebida} ion-icon`);
    if (selecionado !== null) {
        selecionado.classList.remove("selecionado");
        selecionadoIcone.classList.add("escondido");
    }
    // document.querySelector(".pratos .menu__card classPrato").style.boxShadow = "none";

    const bordaVerde = document.querySelector(classBebida);
    bordaVerde.classList.add("selecionado");

    const iconeVerde = document.querySelector(`${classBebida} .menu__card-checked`);
    iconeVerde.classList.remove("escondido");

    verificarBebidas = nomeBebida
    liberarPedido();
}


//-----------------------------//

function escolherSobremesa(classSobremesa, nomeSobremesa) {
    const selecionado = document.querySelector(".sobremesas .selecionado");
    const selecionadoIcone = document.querySelector(`${classSobremesa} ion-icon`);
    if (selecionado !== null) {
        selecionado.classList.remove("selecionado")
        selecionadoIcone.classList.add("escondido");
    }
    // document.querySelector(".pratos .menu__card classPrato").style.boxShadow = "none";


    const bordaVerde = document.querySelector(classSobremesa);
    bordaVerde.classList.add("selecionado");

    const iconeVerde = document.querySelector(`${classSobremesa} .menu__card-checked`);
    iconeVerde.classList.remove("escondido");

    verificarSobremesas = nomeSobremesa
    liberarPedido();
}

//-----------------------------//
function liberarPedido() {
    if (verificarPratos !== null && verificarBebidas !== null && verificarSobremesas !== null) {
        const botao = document.querySelector(".avancar");
        botao.classList.add('liberado');
        botao.innerHTML = "Fechar Pedido"
    }
}

function avancarPedido() {
    if ((verificarPratos !== null && verificarBebidas !== null && verificarSobremesas !== null)) {
        prompt('oi');
    }
}

