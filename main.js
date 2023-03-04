const form = document.getElementById('form-atividade');
let mediasLinhas = " ";
const aprovado = `<img src="./img/aprovado.png" alt="Emoji comemorando">`;
const reprovado = `<img src="./img/reprovado.png" alt="Emoji decepcionado">`;
const atividade = [];
const nota = [];
const spanAprovado = `<span class="aprovado">Aprovado</span>`;
const spanReprovado = `<span class="reprovado">Reprovado</span>`;
const parametroNotaMinima = prompt('Informe a nota mínima:');



form.addEventListener('submit', function (e) {
    e.preventDefault();

    addLinha();
    atualizarLinhas();
    atualizarMedia();
});

function addLinha() {
    let inputNomeAtividade = document.getElementById('nome-atividade');
    let inputNotaAtividade = document.getElementById('nota-atividade');

    if (atividade.includes(inputNomeAtividade.value)) {
        alert(`A matéria ${inputNomeAtividade.value} já foi inserida!`);
        
    }
    else {
        atividade.push(inputNomeAtividade.value);
        nota.push(parseFloat(inputNotaAtividade.value));

        let linha = `<tr>`;
        linha += `<td>${inputNomeAtividade.value}</td>`;
        linha += `<td>${inputNotaAtividade.value}</td>`;
        linha += `<td>${inputNotaAtividade.value >= parametroNotaMinima ? aprovado : reprovado}</td>`;
        linha += `</tr>`;
        mediasLinhas += linha;
    }

    inputNomeAtividade.value = '';
    inputNotaAtividade.value = '';

}

function atualizarLinhas() {
    const tbody = document.querySelector('tbody');
    tbody.innerHTML = mediasLinhas;
}

function calcularMedia() {
    let SomaDasMedias = 0;
    for (let i = 0; i < nota.length; i++) {
        SomaDasMedias += nota[i];
    }

    return SomaDasMedias / nota.length;
}

function atualizarMedia() {
    mediaFinal = calcularMedia();
    const notaMedia = document.getElementById('notaMedia').innerHTML = mediaFinal.toFixed(2);
    const resultadoMedia = document.getElementById('resultado').innerHTML = mediaFinal >= parametroNotaMinima ? spanAprovado : spanReprovado;

}