/*Escreva um programa que inverta os caracteres de um string.

IMPORTANTE:
a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
b) Evite usar funções prontas, como, por exemplo, reverse; */

let string = 'Target Sistemas' 

function inverteString (string) {

  let inverso = []

  for (let i = 0; i <= string.length; i++) {
    inverso.push(string[string.length - i])
  }

  console.log(inverso.toString().replaceAll(",",""))
}

inverteString(string)
