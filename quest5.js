let string = 'Target Sistemas'

function inverteString (string) {

  let inverso = []

  for (let i = 0; i <= string.length; i++) {
    inverso.push(string[string.length - i])
  }

  console.log(inverso.toString().replaceAll(",",""))
}

inverteString(string)