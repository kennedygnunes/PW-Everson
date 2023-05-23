var listaTags = [];
var form = document.querySelector("form");

let head = document.head;
let style = document.createElement("link");
style.rel = "stylesheet";
style.href = "./style/style.css";
head.appendChild(style);

export default function construirTela() {
  incluirNaTela();
  listaTags[0].textContent = "Nome: ";
  listaTags[1].name = "nome";
  listaTags[2].name = "tag";

  listaTags[3].textContent = "Telefone: ";
  listaTags[4].name = "telefone";
  listaTags[5].name = "tag";

  listaTags[6].textContent = " Idade: ";
  listaTags[7].name = "idade";
  listaTags[8].name = "tag";

  listaTags[9].textContent = "E-mail: ";
  listaTags[10].name = "email";
  listaTags[11].name = "tag";

  listaTags[12].textContent = "Endereço: ";
  listaTags[13].name = "endereco";
  listaTags[14].name = "tag";

  listaTags[15].textContent = "Situação: ";
  listaTags[16].name = "situacao";
  listaTags[17].name = "tag";

  listaTags[18].textContent = "Sobre mim: ";
  listaTags[19].name = "sobremim";
  listaTags[20].name = "tag";

  listaTags[21].textContent = "Especialidades: ";
  listaTags[22].name = "especialidades";
  listaTags[23].name = "tag";

  listaTags[24].textContent = "Educação: ";
  listaTags[25].name = "educacao";
  listaTags[26].name = "tag";

  listaTags[27].textContent = "Experiência: ";
  listaTags[28].name = "experiencia";
  listaTags[29].name = "tag";

  listaTags[30].textContent = "Habilidades e Conhecimentos: ";
  listaTags[31].name = "habilidades";
  listaTags[32].name = "tag";

  listaTags[33].textContent = "PegarDados";

  return listaTags;
}

function incluirNaTela() {
  let tag = [
    "label",
    "input",
    "br",
    "label",
    "input",
    "br",
    "label",
    "input",
    "br",
    "label",
    "input",
    "br",
    "label",
    "input",
    "br",
    "label",
    "input",
    "br",
    "label",
    "input",
    "br",
    "label",
    "input",
    "br",
    "label",
    "input",
    "br",
    "label",
    "input",
    "br",
    "label",
    "input",
    "br",

    "button",
  ];
  tag.forEach((t) => {
    listaTags = criarTags(t);
  });
  console.log(listaTags);
}

function criarTags(tag) {
  //criando uma tag
  let novaTag = document.createElement(tag);
  // inclui na lista
  listaTags.push(novaTag);
  form.appendChild(novaTag);
  return listaTags;
}
