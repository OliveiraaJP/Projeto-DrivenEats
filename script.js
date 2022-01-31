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
    const selecionadoIcone = document.querySelector(`.pratos .iconeSelecionado`);
    if (selecionado !== null) {
        selecionado.classList.remove("selecionado");
        selecionadoIcone.classList.remove("iconeSelecionado");
    }

    const bordaVerde = document.querySelector(classPrato);
    bordaVerde.classList.add("selecionado");

    const iconeVerde = document.querySelector(`${classPrato} .menu__card-checked`);
    iconeVerde.classList.add("iconeSelecionado");
    verificarPratos = nomePrato;
    precoPrato = parseFloat(valorPrato);
    liberarPedido();
}


//--------------------------//

function escolherBebida(classBebida, nomeBebida, valorBebida) {
    const selecionado = document.querySelector(".bebidas .selecionado");
    const selecionadoIcone = document.querySelector(`.bebidas .iconeSelecionado`);
    if (selecionado !== null) {
        selecionado.classList.remove("selecionado");
        selecionadoIcone.classList.remove("iconeSelecionado");
    }

    const bordaVerde = document.querySelector(classBebida);
    bordaVerde.classList.add("selecionado");

    const iconeVerde = document.querySelector(`${classBebida} .menu__card-checked`);
    iconeVerde.classList.add("iconeSelecionado");

    verificarBebidas = nomeBebida;
    precoBebida = parseFloat(valorBebida);
    liberarPedido();

}


//-----------------------------//

function escolherSobremesa(classSobremesa, nomeSobremesa, valorSobremesa) {
    const selecionado = document.querySelector(".sobremesas .selecionado");
    const selecionadoIcone = document.querySelector(`.sobremesas .iconeSelecionado`);
    if (selecionado !== null) {
        selecionado.classList.remove("selecionado")
        selecionadoIcone.classList.remove("iconeSelecionado");
    }
    // document.querySelector(".pratos .menu__card classPrato").style.boxShadow = "none";


    const bordaVerde = document.querySelector(classSobremesa);
    bordaVerde.classList.add("selecionado");

    const iconeVerde = document.querySelector(`${classSobremesa} .menu__card-checked`);
    iconeVerde.classList.add("iconeSelecionado");

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
function avancarPedido() {
    if ((verificarPratos !== null && verificarBebidas !== null && verificarSobremesas !== null)) {
        const liberar = document.querySelector(".backgroundConfirmacao.escondido");
        liberar.classList.remove('escondido');
        let precoTotal = precoBebida + precoPrato + precoSobremesa;
        
        let precoPratoNovo = precoPrato.toFixed(2);
        let precoPratoNovoV2 = precoPratoNovo.replace('.', ',');

        let precoBebidaNovo = precoBebida.toFixed(2);
        let precoBebidaNovoV2 = precoBebidaNovo.replace('.', ',');

        let precoSobremesaNovo = precoSobremesa.toFixed(2);
        let precoSobremesaNovoV2 = precoSobremesaNovo.replace('.', ',');

        let precoTotalNovo = precoTotal.toFixed(2);
        let precoTotalNovoV2 = precoTotalNovo.replace('.', ',');

        const nomeCaixaPrato = document.querySelector('.caixaConfirmacao-main-prato-esquerda');
        nomeCaixaPrato.innerHTML = verificarPratos;
        const valorCaixaPrato = document.querySelector('.caixaConfirmacao-main-prato-direita');
        valorCaixaPrato.innerHTML = precoPratoNovoV2;

        const nomeCaixaBebida = document.querySelector('.caixaConfirmacao-main-bebida-esquerda');
        nomeCaixaBebida.innerHTML = verificarBebidas;
        const valorCaixaBebida = document.querySelector('.caixaConfirmacao-main-bebida-direita');
        valorCaixaBebida.innerHTML = precoBebidaNovoV2;

        const nomeCaixaSobremesa = document.querySelector('.caixaConfirmacao-main-sobremesa-esquerda')
        nomeCaixaSobremesa.innerHTML = verificarSobremesas;
        const valorCaixaSobremesa = document.querySelector('.caixaConfirmacao-main-sobremesa-direita')
        valorCaixaSobremesa.innerHTML = precoSobremesaNovoV2;

        const nomeCaixaTotal = document.querySelector('.caixaConfirmacao-main-total-direita')
        nomeCaixaTotal.innerHTML = "R$"+'\n'+ precoTotalNovoV2;
    }
}

function finalizarPedido() {
    if ((verificarPratos !== null && verificarBebidas !== null && verificarSobremesas !== null)) {
        let nomeEntrega = prompt('Qual seu nome?');
        let enderecoEntrega = prompt('Qual seu endereço?')

        precoTotal = precoBebida + precoPrato + precoSobremesa;
        let valorTotal = precoTotal.toFixed(2);
        let zapMsg = `Olá, gostaria de fazer o pedido:\n- Prato: ${verificarPratos}\n- Bebida: ${verificarBebidas}\n- Sobremesa: ${verificarSobremesas}\nTotal: R$ ${valorTotal}\n\n- Nome: ${nomeEntrega} \n- Endereço: ${enderecoEntrega}.`;
        zapMsg = window.encodeURIComponent(zapMsg);

        window.open('https://wa.me/5521974636854?text=' + zapMsg, '_blank')
    }
}

function cancelarPedido() {
    const liberar = document.querySelector(".backgroundConfirmacao");
    liberar.classList.add('escondido')
}


