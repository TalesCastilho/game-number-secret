let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumAle();
let tentativas = 1;


function exibirTextoTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female' , {rate:1.2});
}
function exibirMsgInicial(){
    exibirTextoTela('h1', 'Jogo do número secreto');
    exibirTextoTela('p','Escolha um número entre 1 e 10');
}

exibirMsgInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;
    console.log(chute == numeroSecreto);

    if( chute == numeroSecreto){
        exibirTextoTela('h1', 'uhull você acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas'  : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}`;
        exibirTextoTela('p',mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if(chute > numeroSecreto){
            exibirTextoTela('p','o Numero secreto é menor');
        } else {
            exibirTextoTela('p', 'o Numero secreto é maior ');
        }
        tentativas++;
        limparCampo();
    }
}

function gerarNumAle(){
    let numeroEscolhido = parseInt(Math.random() * numeroLimite);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if(quantidadeDeElementosNaLista == 3){
        listaDeNumerosSorteados = [];
    }
    if (listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumAle();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    numeroSecreto = gerarNumAle();
    limparCampo();
    tentativas = 1;
    exibirMsgInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);

}