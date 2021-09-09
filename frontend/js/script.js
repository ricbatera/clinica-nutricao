var usuario;
const botaoEnviarDados = document.querySelector("#enviar-dados");

botaoEnviarDados.addEventListener("click", function (event){
 event.preventDefault();
 var form = document.querySelector("#form-adiciona");

 // var erros = validaDados(usuario);

 // if (erros.lenght > 0){
 //  exibeMensagensErro(erros);
 //  return;
 // }

  form.reset();

 // const mensagensErro = document.querySelector("mensagens-erro");
 // mensagensErro.innerHTML="";
});

function obtemDadosForm(form){
 var usuario = {
   nome: form.nome.value,
   sobrenome: form.sobrenome.value,
   email:form.email.value,
   telefone: form.telefone.value,
   documento: form.documento.value,
   senha: form.senha.value,
   senha_confirmacao: form.senha_confirmacao.value
 }
 return usuario;
}

function exibeMensagensErro (erros){
 var ul = document.querySelector("#mensagens-erro");

 ul.innerHTML = "";

 erros.forEach( function(erro) {
  var li = document.createElement("li");
  li.textContent = erro;
  ul.appendChild(li);
 });
}

// function validaDados(usuario){
//  //lista de erros - array
//  var erros =[];

//   if (usuario.nome.length == 0){
//    erros.push("O campo nome não pode estar em branco")
//   }
//   if (usuario.sobrenome.length == 0){
//    erros.push("O campo sobrenome não pode estar em branco")
//   }
//   if (usuario.e-mail.length == 0){
//    erros.push("O campo e-mail não pode estar em branco")
//   }
//  if (usuario.telefone.length == 0){
//   erros.push("O campo telefone não pode estar em branco")
//  }
//  if (usuario.documento.length == 0){
//   erros.push("O campo documento não pode estar em branco")
//  }
//  if (usuario.senha.length == 0){
//   erros.push("O campo senha não pode estar em branco")
//  }
//  if (usuario.senha_confirmacao.length == 0){
//   erros.push("O campo de confirmção de senha não pode estar em branco")
//  }

//  return erros;
// } 