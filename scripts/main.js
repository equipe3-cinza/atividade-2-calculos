
// main.js


const openModalMediaAluno = () => {
    const resultadoMediaAluno = document.getElementById('resultadoMediaAluno');
    const nomeAluno = document.getElementById('nomeAluno');
    const nomeDisciplina = document.getElementById('nomeDisciplina');
    const nota1 = document.getElementById('nota1');
    const nota2 = document.getElementById('nota2');
    const modalMediaAluno = new bootstrap.Modal(document.getElementById('mediaAlunoModal'));
    modalMediaAluno.show();
    nomeAluno.value = '';
    nomeDisciplina.value = '';
    nota1.value = '';
    nota2.value = '';
    resultadoMediaAluno.innerHTML = '';
}

const openModalContagemN = () => {
    const numeroN = document.getElementById('numeroN');
    const resultadoContagemN = document.getElementById('resultadoContagemN');
    const modalContagemN = new bootstrap.Modal(document.getElementById('contagemNModal'));
    modalContagemN.show();
    numeroN.value = '';
    resultadoContagemN.innerHTML = '';
}

const openModalAnoNascimento = () => {
    const anoNascimento = document.getElementById('anoNascimento');
    const resultadoIdade = document.getElementById('resultadoIdade');
    const modalAnoNascimento = new bootstrap.Modal(document.getElementById('idadeModal'));
    modalAnoNascimento.show();
    anoNascimento.value = '';
    resultadoIdade.innerHTML = '';
}

const openModalFatorial = () => {
    const numeroFatorial = document.getElementById('numeroFatorial');
    const resultadoFatorial = document.getElementById('resultadoFatorial');
    const modalFatorial = new bootstrap.Modal(document.getElementById('fatorialModal'));
    modalFatorial.show();
    numeroFatorial.value = '';
    resultadoFatorial.innerHTML = '';
}

const openModalParImpar = () => {
    const numeroParImpar = document.getElementById('numeroParImpar');
    const resultadoParImpar = document.getElementById('resultadoParImpar');
    const modalParImpar = new bootstrap.Modal(document.getElementById('parImparModal'));
    modalParImpar.show();
    numeroParImpar.value = '';
    resultadoParImpar.innerHTML = '';
}

const openModalTabuada = () => {
    const numeroTabuada = document.getElementById('numeroTabuada');
    const resultadoTabuada = document.getElementById('resultadoTabuada');
    const modal = new bootstrap.Modal(document.getElementById('tabuadaModal'));
    modal.show();
    numeroTabuada.value = '';
    resultadoTabuada.innerHTML = '';
}

const calcularTabuada = (event) => {
    event.preventDefault()

    const numeroTabuada = document.getElementById('numeroTabuada');
    const resultadoTabuada = document.getElementById('resultadoTabuada');
    const numero = parseInt(numeroTabuada.value);
    let resultado = '';
    for (let i = 1; i <= 10; i++) {
        resultado += `<strong>${numero}</strong> x ${i} = <strong>${numero * i}</strong><br>`;
    }
    resultadoTabuada.innerHTML = resultado;
}
const calcularMediaAluno = (event) => {
    event.preventDefault()
    const resultadoMediaAluno = document.getElementById('resultadoMediaAluno');
    const nomeAluno = document.getElementById('nomeAluno');
    const nomeDisciplina = document.getElementById('nomeDisciplina');
    const nota1 = document.getElementById('nota1');
    const nota2 = document.getElementById('nota2');

    const mediaAluno = (nota1.valueAsNumber + nota2.valueAsNumber) / 2;

    resultadoMediaAluno.innerHTML = `A média do aluno <strong> ${nomeAluno.value} </strong> na disciplina <strong> ${nomeDisciplina.value} </strong> é <strong> ${mediaAluno} </strong>`;
}

const calcularContagemN = (event) => {
    event.preventDefault()
    const numeroN = document.getElementById('numeroN');
    const resultadoContagemN = document.getElementById('resultadoContagemN');
    const numero = parseInt(numeroN.value);
    let resultado = '';
    for (let i = 1; i <= numero; i++) {
        resultado += `${i} `;
    }
    resultadoContagemN.innerHTML = resultado;
}

const calcularIdade = (event) => {
    event.preventDefault()
    const dataNascimento = new Date(document.getElementById('dataNascimento').value);
    const anoNascimento = dataNascimento.getFullYear();
    const idade = new Date().getFullYear() - anoNascimento;
    const resultado = `Quem nasceu em <strong>${anoNascimento}</strong> irá completar <strong>${idade}</strong> anos em <strong>${new Date().getFullYear()}</strong>.`;
    document.getElementById('resultadoIdade').innerHTML = resultado;
    return false;
}

const  calcularFatorial = (event) => {
    event.preventDefault()
    const numeroFatorial = document.getElementById('numeroFatorial');
    const resultadoFatorial = document.getElementById('resultadoFatorial');
    const numero = parseInt(numeroFatorial.value);
    let fatorial = 1;
    for (let i = 1; i <= numero; i++) {
        fatorial *= i;
    }
    resultadoFatorial.innerHTML = `O fatorial de <strong>${numero}</strong> é <strong>${fatorial}</strong>`;
}

const verificarParImpar = (event) => {
    event.preventDefault()
    const numeroParImpar = document.getElementById('numeroParImpar');
    const resultadoParImpar = document.getElementById('resultadoParImpar');
    const numero = parseInt(numeroParImpar.value);
    if (numero % 2 === 0) {
        resultadoParImpar.innerHTML = `O número <strong>${numero}</strong> é <strong>par</strong>`;
    } else {
        resultadoParImpar.innerHTML = `O número <strong>${numero}</strong> é <strong>ímpar</strong>`;
    }
}