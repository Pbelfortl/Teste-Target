/*Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado: */

let dados = [
  {
    estado: "SP",
    faturamento : 67836.43
  },
  {
    estado: "RJ",
    faturamento: 36678.66
  },
  { 
    estado: "MG",
    faturamento: 29229.88
  },
  {
    estado: "ES",
    faturamento: 27165.48
  },
  {
    estado: "Outros",
    faturamento: 19849.53
  }
]

/*Escreva um programa na linguagem que desejar onde calcule o percentual de representação que
cada estado teve dentro do valor total mensal da distribuidora. */

function calculaFaturamento (dados) {

  let total = dados.reduce((soma, valorAtual) => soma + valorAtual.faturamento, 0)
  let ArrayPercentual = []

  for (estado of dados) {
    ArrayPercentual.push({
      estato: estado.estado,
      percentual: `${(((estado.faturamento)/total)*100).toFixed(2)} %`
    })
  }
  

  console.log(ArrayPercentual)
} 

calculaFaturamento(dados)
