let prato;
let bebida;
let sobremesa;
//Prato
function escolherHamburguer() {
  document.getElementById("hamburguer").style.borderColor = "green";
  document.getElementById("lasanha").style.borderColor = "white";
  document.getElementById("pizza").style.borderColor = "white";
  prato = "hamburguer";
}
function escolherLasanha() {
  document.getElementById("lasanha").style.borderColor = "green";  
  document.getElementById("hamburguer").style.borderColor = "white";
  document.getElementById("pizza").style.borderColor = "white";
  prato = "lasanha";
}
function escolherPizza() {
  document.getElementById("pizza").style.borderColor = "green";  
  document.getElementById("hamburguer").style.borderColor = "white";
  document.getElementById("lasanha").style.borderColor = "white";
  prato = "pizza";
}
//Bebida
function escolherDuff() {
  document.getElementById("duff").style.borderColor = "green";
  document.getElementById("coca").style.borderColor = "white";
  document.getElementById("cerveja").style.borderColor = "white";
  prato = "hamburguer";
}
function escolherCoca() {
  document.getElementById("coca").style.borderColor = "green";  
  document.getElementById("duff").style.borderColor = "white";
  document.getElementById("cerveja").style.borderColor = "white";
  prato = "lasanha";
}
function escolherCerveja() {
  document.getElementById("cerveja").style.borderColor = "green";  
  document.getElementById("duff").style.borderColor = "white";
  document.getElementById("coca").style.borderColor = "white";
  prato = "pizza";
}
//Sobremesa
function escolherBiscoito() {
  document.getElementById("biscoito").style.borderColor = "green";
  document.getElementById("donut").style.borderColor = "white";
  document.getElementById("chocolate").style.borderColor = "white";
  prato = "hamburguer";
}
function escolherDonut() {
  document.getElementById("donut").style.borderColor = "green";  
  document.getElementById("biscoito").style.borderColor = "white";
  document.getElementById("chocolate").style.borderColor = "white";
  prato = "lasanha";
}
function escolherChocolate() {
  document.getElementById("chocolate").style.borderColor = "green";  
  document.getElementById("biscoito").style.borderColor = "white";
  document.getElementById("donut").style.borderColor = "white";
  prato = "pizza";
}
//Finalizar pedido
function finalizarPedido () {
  const texto = document.querySelector(".botao p")
  texto.innerHTML = "Fechar pedido";
  document.getElementById("botao").style.backgroundColor="green"
}
