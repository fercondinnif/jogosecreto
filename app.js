// let listaDeNumerosSorteados = [];
// let numeroLimite = 10;
// let numeroSecreto = gerarNumeroAleatorio();
// let tentativas = 1;

// function exibirTextoNaTela(tag, texto) {
//     let campo = document.querySelector(tag);
//     campo.innerHTML = texto;
// }

// function exibirMensagemInicial(){
//     exibirTextoNaTela('h1', 'Jogo do número secreto');
//     exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
// }

// exibirMensagemInicial();

// function verificarChute() {
//     let chute = document.querySelector('input').value;
//     let palavraTentativa = tentativas > 1 ? `tentativas` : `tentativa`

//     if (chute == numeroSecreto) {
//         exibirTextoNaTela(`h1`, `Parabéns!`);
//         console.log('PARABÉNS');
//         exibirTextoNaTela(`p`, `Você acertou o número Secreto em ${tentativas} ${palavraTentativa}`);
//         document.getElementById('reiniciar').removeAttribute('disabled');

//     } else if (chute > numeroSecreto) {
//         exibirTextoNaTela(`p`, `o número secreto é menor`);
        
//     } else {
//         exibirTextoNaTela(`p`, `o número secreto é maior`);

//     } tentativas++
//     limparInput();
// }


// function gerarNumeroAleatorio() {
//     let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
//         if (quantidadeDeElementosNaLista == numeroLimite) {
//             listaDeNumerosSorteados = [];
//         }

//         if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
//         return gerarNumeroAleatorio();
//     } else {
//         listaDeNumerosSorteados.push(numeroEscolhido);
//         console.log(listaDeNumerosSorteados)
//         return numeroEscolhido;
//     }
// }


// function limparInput(){
//     chute = document.querySelector(`input`);
//     chute.value = ``;
// }

// function reiniciarJogo() {
//     numeroSecreto = gerarNumeroAleatorio();
//     limparInput();
//     tentativas = 1;
//     document.getElementById('reiniciar').setAttribute('disabled', true);
//     exibirMensagemInicial();
// }


//----------------------------------------------------------------------------------------------------------------------------------

// const peso = 68;  // em kg
// const altura = 1.82;  // em metros
// const imc = calcularIMC(peso, altura);
// console.log("O IMC é: " + imc.toFixed(2));

// function calcularIMC(peso, altura) {
//     if (altura <= 0) {
//         return "Altura deve ser maior que zero.";
//     }
//     const imc = peso / (altura * altura);
//     return imc;
// }

//----------------------------------------------------------------------------------------------------------------------------------

let listaGenerica = [];

let linguagensDeProgramacao = ['JavaScript','C','C++', 'Kotlin', 'Python'];

            linguagensDeProgramacao.push('Java');
            linguagensDeProgramacao.push('Ruby');
            linguagensDeProgramacao.push('Python');

    console.log(linguagensDeProgramacao);


let nomes = ["formula1", "drift", "digital",]
    console.log(nomes [0]);
    console.log(nomes [1]);
    console.log(nomes [2]);