//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

function adicionarAmigo(){
    let input = document.getElementById('amigo');
    let nome = input.value.trim();

    if (nome === '') {
        alert('Por favor, insira um nome.');
        return;
}

    amigos.push(nome);
        input.value = '';
        exibirLista(); // Atualiza a exibição da lista
}

function exibirLista() {
    let lista = document.getElementById('listaAmigos'); // Seleciona a <ul> da lista
    lista.innerHTML = ''; // Limpa o conteúdo da lista

    for (let i = 0; i < amigos.length; i++) {
        let item = document.createElement('li'); // Cria um <li>
        item.textContent = amigos[i]; // Define o texto como o nome do amigo
        lista.appendChild(item); // Adiciona o <li> na <ul>
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert('A lista de amigos está vazia.');
        return;
    }

    let indiceSorteado = Math.floor(Math.random() * amigos.length);
    let nomeSorteado = amigos[indiceSorteado];

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>${nomeSorteado} foi sorteado!</li>`;
}