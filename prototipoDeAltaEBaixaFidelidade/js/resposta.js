const urlParams = new URLSearchParams(window.location.search);

let head = document.head;
let style = document.createElement("link");
style.rel = "stylesheet";
style.href = "./style/style.css";
head.appendChild(style);

const nome = urlParams.get("nome");
const idade = urlParams.get("idade");
const telefone = urlParams.get("telefone");
const email = urlParams.get("email");
const endereco = urlParams.get("endereco");
const situacao = urlParams.get("situacao");
const sobremim = urlParams.get("sobremim");
const especialidades = urlParams.get("especialidades");
const educacao = urlParams.get("educacao");
const experiencia = urlParams.get("experiencia");
const habilidades = urlParams.get("habilidades");

//document.write("Nome: ");
document.write(
  '<div class="fundoPessoal"><div id="divNome">' + nome + "</div></div>"
);
//document.write("<br>");

//document.write("Idade: ");
document.write(
  '<div class="fundoPessoal"><div id="divIdade">' + idade + "</div>"
);
//document.write("<br>");

//document.write("Endereço: ");
document.write(
  '<div class="fundoPessoal"><div id="divEndereco">' + endereco + "</div></div>"
);
//document.write("<br>");

// document.write("E-mail: ");
document.write(
  '<div class="fundoPessoal"><div id="divEmail">' + email + "</div></div>"
);
//document.write("<br>");

//document.write("Telefone: ");
document.write(
  '<div class="fundoPessoal"><div id="divTelefone">' + telefone + "</div></div>"
);
//document.write("<br>");

//document.write("Situação: ");
document.write(
  '<div class="fundoPessoal"><div id="divSituacao">' + situacao + "</div></div>"
);
//document.write("<br>");

// document.write("Sobre mim: ");
document.write(
  '<div class="fundoPessoal"><div id="divSobremim"><p>Sobre mim: </p>' +
    sobremim +
    "</div></div>"
);
// document.write("<br>");

// document.write("Especialidades: ");
document.write(
  '<div class="fundoPessoal"><div id="divEspecialidades"><p>Especialidades: </p>' +
    especialidades +
    "</div></div>"
);
// document.write("<br>");

// document.write("Educação: ");
document.write(
  '<div class="fundoPessoal"><div id="divEducacao"><p>Educação: </p>' +
    educacao +
    "</div></div>"
);
// document.write("<br>");

// document.write("Experiência: ");
document.write(
  '<div class="fundoPessoal"><div id="divExperiencia"><p>Experiência: </p>' +
    experiencia +
    "</div></div>"
);
// document.write("<br>");

// document.write("Habilidades e Conhecimentos: ");
document.write(
  '<div class="fundoPessoal"><div id="divHabilidades"><p>Habilidades: </p>' +
    habilidades +
    "</div></div>"
);
// document.write("<br>");

document.write(
  '<div class="fundoPessoal"><button class="print-button"onclick="imprimirPagina()">Imprimir</button>'
);

function imprimirPagina() {
  window.print();
}
