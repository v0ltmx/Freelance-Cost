const button = document.getElementById("calcular")

const resultadoHtml = document.getElementById("resultado")

button.addEventListener('click', function() {
    
  const horasDiarias = parseInt(document.getElementById("horasDiarias").value)
  const diasEfetivos = parseInt(document.getElementById("diasEfetivos").value)
  const diasFerias = parseInt(document.getElementById("diasFerias").value)
  const valorProjeto = parseInt(document.getElementById("valorProjeto").value)
    
  const equacao = (valorProjeto / (diasEfetivos * 4 * horasDiarias) ) + 
    ( ( diasFerias * diasEfetivos * horasDiarias ) )

  const valorHora = parseInt(equacao).toFixed(2);

  if (isNaN(valorHora)) {
    resultadoHtml.innerHTML = "Valor inválido"
  } else {
    resultadoHtml.innerHTML = `R$ ${valorHora}`
     
  }

})