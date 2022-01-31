let verificarPratos = null;
let verificarBebidas = null;
let verificarSobremesas = null;

let precoPrato = null;
let precoBebida = null;
let precoSobremesa = null;
let precoTotal = null;

// const btn = document.querySelector(".avancar");



function escolherPrato(classPrato, nomePrato, valorPrato) {
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
    verificarPratos = nomePrato;
    precoPrato = parseFloat(valorPrato);
    liberarPedido();
}


//--------------------------//

function escolherBebida(classBebida, nomeBebida, valorBebida) {
    const selecionado = document.querySelector(".bebidas .selecionado");
    const selecionadoIcone = document.querySelector(`${classBebida} ion-icon`);
    if (selecionado !== null) {
        selecionado.classList.remove("selecionado");
        selecionadoIcone.classList.add("escondido");
    }

    const bordaVerde = document.querySelector(classBebida);
    bordaVerde.classList.add("selecionado");

    const iconeVerde = document.querySelector(`${classBebida} .menu__card-checked`);
    iconeVerde.classList.remove("escondido");

    verificarBebidas = nomeBebida;
    precoBebida = parseFloat(valorBebida);
    liberarPedido();
    
}


//-----------------------------//

function escolherSobremesa(classSobremesa, nomeSobremesa, valorSobremesa) {
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

    verificarSobremesas = nomeSobremesa;
    precoSobremesa = parseFloat(valorSobremesa);
    liberarPedido();
}

//-----------------------------//
function liberarPedido() {
    if (verificarPratos !== null && verificarBebidas !== null && verificarSobremesas !== null) {
        const botao = document.querySelector(".avancar");
        botao.classList.add('liberado');
        botao.innerHTML = 'Fechar Pedido';
        
    }
}
function avancarPedido(){
    const liberar = document.querySelector(".backgroundConfirmacao.escondido");
    liberar.classList.remove('escondido')
    
}

function finalizarPedido() {
    if ((verificarPratos !== null && verificarBebidas !== null && verificarSobremesas !== null)) {
        let nomeEntrega = prompt('Qual seu nome?');
        let enderecoEntrega = prompt('Qual seu endereço?')
        
        precoTotal = precoBebida + precoPrato + precoSobremesa;
        let valorTotal = precoTotal.toFixed(2);
        let zapMsg = `Olá, gostaria de fazer o pedido:\n- Prato: ${verificarPratos}\n- Bebida: ${verificarBebidas}\n- Sobremesa: ${verificarSobremesas}\nTotal: R$ ${valorTotal}\n\n- Nome: ${nomeEntrega} \n- Endereço: ${enderecoEntrega}.`;
        zapMsg = window.encodeURIComponent(zapMsg);        
        
        window.open('https://wa.me/5521974636854?text='+zapMsg, '_blank')
    }
}

function cancelarPedido(){
    const liberar = document.querySelector(".backgroundConfirmacao");
    liberar.classList.add('escondido')
}


