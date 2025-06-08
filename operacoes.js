function inserirValor(valor){
    const operacaoSelecionada = document.getElementById('operacaoSelecionada');
    if (operacaoSelecionada.value === '') {
        const entrada1 = document.getElementById('entrada1');
        entrada1.value += valor;
    }else {
        const entrada2 = document.getElementById('entrada2');
        entrada2.value += valor;
    }
}
function limpar() {
    display.value = '';
    operacaoSelecionada.value = '';
    entrada1.value = '';
    entrada2.value = '';
}
function somar() {
    operacaoSelecionada.value = "+";
}
function subtrair() {
    operacaoSelecionada.value = "-";
}
function multiplicar() {
    operacaoSelecionada.value = "*";
}
function dividir() {
    operacaoSelecionada.value = "/";
}
function resuldado() {
    const operacaoSelecionada = document.getElementById('operacaoSelecionada');
    switch (operacaoSelecionada.value) {
        case '+':
            display.value = parseFloat(entrada1.value) + parseFloat(entrada2.value);
            break;
        case '-':
            display.value = parseFloat(entrada1.value) - parseFloat(entrada2.value);
            break;
        case '*':
            display.value = parseFloat(entrada1.value) * parseFloat(entrada2.value);
            break;
        case '/':
            if (parseFloat(entrada2.value) !== 0) {
                display.value = parseFloat(entrada1.value) / parseFloat(entrada2.value);
            } else {
                display.value = 'Erro: Divisão por zero';
            }
            break;
        default:
            display.value = 'Selecione uma operação';
    }
}
