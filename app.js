// Importa os dados das fotos de um arquivo externo
import fotos from './dados.js';

// Função responsável por mostrar os resultados da pesquisa quando o botão é clicado
function mostrar() {
    console.log("clicou"); // Mensagem de log para fins de depuração

    let campoPesquisa = document.getElementById("campop").value

    console.log(campoPesquisa);

    // Seleciona o elemento HTML onde os resultados serão exibidos
    let resultados = document.getElementById("resultados-pesquisa");


    // Inicializa uma string vazia para armazenar o HTML dos resultados
    let procura = "";
    let titulo = "";
    let coisa = "";

    // Itera sobre cada dado de foto no array 'fotos'
    for (let dado of fotos) {
        
        titulo = dado.titulo.toLowerCase()
        coisa = dado.coisa.toLowerCase()

        if (titulo.includes(campoPesquisa) || coisa.includes(campoPesquisa)) {

            // Constrói o HTML para cada item da pesquisa, formatando os dados da foto
            procura += `
                <div class="item-pesquisa">
                    <h2>${dado.titulo}</h2>
                    <img src=${dado.imagem} alt="foto 1">
                    <img src=${dado.imagem2} alt="foto 2">
                </div>
            `;
            }

        if (!campoPesquisa) {
            resultados.innerHTML = 
                `<p> Pesquise alguma coisa</p>`
                return
            } 

        if (!procura) {
            procura = `<p> vou tirar foto disso ai ainda!</p>`
        }    
    }

    // Atualiza o conteúdo HTML do elemento 'resultados' com os resultados da pesquisa
    resultados.innerHTML = procura;
    
}

// Seleciona o botão e adiciona um evento de 'click' para chamar a função 'mostrar'
const botao = document.getElementById("butao");
botao.addEventListener('click', mostrar);