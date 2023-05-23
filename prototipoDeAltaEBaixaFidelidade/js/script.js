import construirTela from "./criarObjetos.js";

let listaTags = construirTela();

//console.log(listaTags[4])

listaTags[4].addEventListener("click", function (event) {
  event.preventDefault();
  let inputs = document.querySelectorAll("input");

  let inputName = inputs[0].value;
  let inputTelefone = inputs[3].value;
  let inputIdade = inputs[6].value;
  let inputEmail = inputs[9].value;
  let inputEndereco = inputs[12].value;
  let inputSituacao = inputs[15].value;
  let inputSobremim = inputs[18].value;
  let inputEspecialidades = inputs[21].value;
  let inputEducacao = inputs[24].value;
  let inputExperiencia = inputs[27].value;
  let inputHabilidades = inputs[30].value;

  let ps = document.querySelectorAll("p");

  window.location.href = `http://127.0.0.1:5500/resposta.html?nome=${inputName}&telefone=${inputTelefone}&idade=${inputIdade}
    &email=${inputEmail}&endereco=${inputEndereco}&situacao=${inputSituacao}&sobremim=${inputSobremim}&especialidades=${inputEspecialidades}
    &educacao=${inputEducacao}&experiencia=${inputExperiencia}&habilidades=${inputHabilidades}`;

  //event.target.parentElement.reset()
});
