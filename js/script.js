document.getElementById("botaoEnviar").addEventListener("click",validaForm)

function validaForm() {
  if (document.getElementById("nome-da-usuaria").value != "" && document.getElementById("email").value != ""){
   alert("Prontinho! Você receberá as novidades por email")
 }else{
   alert("Por favor, preencha os campos nome e email!")
 }
}
