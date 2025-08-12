'use strict'

//Função para criar card funcionario
function criarCardFuncionario (funcionario) {
    //identificação pelo id
    const funcionariosContainer = document.getElementById('funcionarios');

    //Cria um container para o cartão o funcionario
    const card = document.createElement('div');
    card.classList.add('card-funcionario');

    //Cria a tag da imagem
    const img = document.createElement('img');
    img.src = `./img/${funcionario.imagem}`;
    img.alt = funcionario.nome;
    img.classList.add('imagem-funcionario');

    //Nome funcionarios
    const nome = document.createElement('h3');
    nome.textContent = funcionario.nome;

    //Cargo
    const cargo = document.createElement('p');
    cargo.textContent = funcionario.cargo;

    //adicionando dados ao card
    card.appendChild(img);
    card.appendChild(nome);
    card.appendChild(cargo);

    //adicionando card
    funcionariosContainer.appendChild(card);
}
//buscar dados do json e exibir
async function exibirFuncionarios () {
    try{
        //armazenar o objeto de resposta da requisição
        const response = await fetch('./funcionarios.json');

        const funcionarios = await response.json();

        funcionarios.forEach(criarCardFuncionario);
    } catch (error) {
    console.error('Erro ao carregar dados dos funcionários:', error);
}
}
 //Chama a função
 exibirFuncionarios();