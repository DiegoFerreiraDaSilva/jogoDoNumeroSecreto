let numeroMaximo = 10;
let listaDeNumerosSorteados = [];
let numeroSecreto = numeroAleatorio();
let tentativas = 1;


function mensagemInicial()
{
    exibirTexto("h1", "Jogo do número secreto");

    exibirTexto("p","Escolha um número de 0 a 10");
}
mensagemInicial();
function exibirTexto(tag, texto)
{
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    //Tentativa de colocar voz no projeto
    responsiveVoice.speak(texto,"Brazilian Portuguese Female", {raet:1.2});
}

 function verificarChute()
{
    let chute = document.querySelector("input").value;
    if (chute == numeroSecreto)
    {
        exibirTexto("h1","Acertou!!!");
        
        palavraTetantiva = tentativas > 1?"tentativas":"tentativa";

        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTetantiva}.`

        exibirTexto("p",mensagemTentativas);

        document.getElementById("reiniciar").removeAttribute("disabled");
    } 
    else if (chute > numeroSecreto)
    {
        exibirTexto("h1","Errou.");
        exibirTexto("p","O número secreto é menor.");
        limparCampo();
        tentativas++
    } 
    else 
    {
        exibirTexto("h1","Errou.");
        exibirTexto("p","O número secreto é maior.");
        limparCampo();
        tentativas++
    }    

}

function reiniciarJogo()
{
    tentativas = 1;
    numeroSecreto = numeroAleatorio();
    limparCampo();
    mensagemInicial();
    document.getElementById("reiniciar").setAttribute("disabled",true);
}

function limparCampo()
{
    chute = document.querySelector("input");
    chute.value = "";
}

function numeroAleatorio()
{
    let numeroEscolhido = parseInt(Math.random() * numeroMaximo + 1);
    let quantidadeDeNumerosDaLista = listaDeNumerosSorteados.length;

    if (quantidadeDeNumerosDaLista == numeroMaximo)
    {
        listaDeNumerosSorteados = [];
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido))
    {
       return numeroAleatorio();
    }
    else 
    {
        listaDeNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
}
