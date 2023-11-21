//declaração de função
function soma1(num1, num2) {
    return num1 + num2
}
console.log(soma1(1,2))

//expressão de função
const soma = function(num1, num2) {
    return num1 + num2
}
console.log(soma(1,3))

//diferença principal
//na expressão de função, não tem como chamar a função antes de iniciá-la

console.log(apresentar())
console.log(darOi())

function apresentar() {
    return 'olá';
}

const darOi = function() { return 'oi'}
