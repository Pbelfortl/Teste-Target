/*Dado a sequência de Fibonacci, onde se inicia por O e 1 e o próximo valor sempre
será a soma dos 2 valores anteriores (exemplo: O, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um
programa na linguagem que desejar onde, informado um número, ele calcule a
sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.*/

function fibonacciCheck (num) {

  let firstNum = 0, lastNum = 1, sum = 0

  for (let i = 0; i <= num; i++) {

    if(sum == num){
      console.log(`O número ${num} pertence à sequência de Fibonacci!`)
      return
    }
    if(sum > num) {
      console.log(`O número ${num} não pertence à sequência de Fibonacci!`)
      return
    }
    sum = firstNum + lastNum
    firstNum = lastNum
    lastNum = sum
  }

}