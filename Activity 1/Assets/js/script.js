function calculateIMC() {
  const form = document.querySelector("#form");
  const resultado = document.querySelector("#result");

  form.addEventListener("submit", function (evento) {
    evento.preventDefault();

    let peso = form.querySelector("#peso").value;
    let altura = form.querySelector("#altura").value;

    resultado.innerHTML = ``;

    if (peso === "" || altura === "") {
      resultado.innerHTML += `<p class="error">Preencha todos os campos!</p>`;
      return;
    }

    if (isNaN(peso) || isNaN(altura)) {
      resultado.innerHTML += `<p class="error">Valores inválidos nos campos! Preencha os campos com os valores de seu peso e altura!</p>`;
      return;
    }

    const IMC = peso/(altura * altura);
    resultado.innerHTML += `<p class="success">O valor do seu IMC é ${IMC}.</p>`;
    
    if(IMC < 18.5){
      resultado.innerHTML += `<p class="success">Você está Abaixo do Peso</p>`;
    } else if(IMC >= 18.5 && IMC <= 24.9) {
      resultado.innerHTML += `<p class="success">Você está no Peso Normal</p>`;
    } else if(IMC >= 25 && IMC <= 29.9) {
      resultado.innerHTML += `<p class="success">Você está Sobrepeso</p>`;
    } else if(IMC >= 30 && IMC <= 34.9) {
      resultado.innerHTML += `<p class="success">Você está com Obesidade Grau I</p>`;
    } else if(IMC >= 35 && IMC <= 39.9) {
      resultado.innerHTML += `<p class="success">Você está com Obesidade Grau II</p>`;
    } else {
      resultado.innerHTML += `<p class="success">Você está com Obesidade Grau III</p>`;
    }
    
  });
}

calculateIMC();
