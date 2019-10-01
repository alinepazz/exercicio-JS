/*Baseado na tabela abaixo, escreva um algoritmo que leia o código do item adquirido pelo consumidor
 e a quantidade, calculando e mostrando o valor a pagar.
 A mensagem de retorno deve conter o produto, a quantidade e o valor total a pagar.*/

function codigo(codigoIntem, quantidade) {
    switch (codigoIntem) {
        case 100:
            return 'Cachorro quente ' + quantidade + ' unidades' + ' total de: ' + ' R$ ' + (quantidade * 1.70);
        case 101:
            return 'Bauro simples ' + quantidade + ' R$ ' + (quantidade * 2.30);
        case 102:
            return 'Bauro com ovo ' + quantidade + ' R$ ' + (quantidade * 2.60);
        case 103:
            return 'Hamburguer ' + quantidade + ' R$ ' + (quantidade * 2.40);
        case 104:
            return 'Cheeseburguer ' + quantidade + ' R$ ' + (quantidade * 2.50);
        case 105:
            return 'Refrigerante ' + quantidade + ' R$ ' + (quantidade * 1.00);
    }
}

console.log(codigo(105, 10));


//Escreva um código que receba dois número e determine qual o maior entre eles.
function receberNumero(num1, num2) {
    if (num1 > num2) {
        return 'num1 ' + 'é maior que o ' + ' num2'
    }
    else {
        return 'num2 ' + 'é maior que o ' + ' num1'
    }
}
console.log(receberNumero(5, 10));

//Escreva um código que receba um número (1-7) e devolva o dia da semana correspondente.

function calcularSemana(codigoSemana) {
    switch (codigoSemana) {
        case 1:
            return 'Domingo';
        case 2:
            return 'Segunda';
        case 3:
            return 'Terça';
        case 4:
            return 'Quarta';
        case 5:
            return 'Quinta';
        case 6:
            return 'Sexta';
        case 7:
            return 'Sabado';
        default:
            return 'Valor invalido';
    }
}
console.log(calcularSemana(8));


//Escreva um código que receba um número (1-12), e diga qual mês e quantos dias ele tem.
function calcularMes(codigoMes) {
    switch (codigoMes) {
        case 1:
            return 'Janeiro tem 31 dias';
        case 2:
            return 'Fevereiro tem 28 dias';
        case 3:
            return 'Março tem 31 dias';
        case 4:
            return 'Abril tem 30 dias';
        case 5:
            return 'Maio tem 31 dias';
        case 6:
            return 'Junho tem 30 dias';
        case 7:
            return 'Julho tem 31 dias';
        case 8:
            return 'Agosto tem 31 dias';
        case 9:
            return 'Setembro tem 30 dias';
        case 10:
            return 'Outubro tem 31 dias';
        case 11:
            return 'Novembro 30 dias';
        case 12:
            return 'Dezembro tem 31 dias';
        default:
            return 'Não corresponde a nenhum mês'

    }
}
console.log(calcularMes(3));


// Utilizando switch-case, receba uma letra e determine se é uma vogal ou consoante.
function receberLetra(letra) {
    switch (letra) {
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
        case 'A':
        case 'E':
        case 'I':
        case 'O':
        case 'U':
            return 'vogal';
            
        default:
            return 'Consoante';
    }
}
console.log(receberLetra('e'));