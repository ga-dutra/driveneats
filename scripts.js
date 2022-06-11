let contador = 0;

function selecionaPrato(elemento) {
  // 1. Verifica se o botão já foi clicado. Nesse caso, a borda é removida
  // 2. Caso não tenha sido clicado, a borda é acionada, e caso outro botão
  // da mesma categoria esteja selecionado, este é removido.
  const verificaPrato = document.querySelector(".prato_principal.borda_verde");
  let a = elemento.classList;
  // a representa a string que possui as classes do elemento.
  if (String(a)[39] === "b") {
    elemento.classList.remove("borda_verde");
    contador--;
    fecharPedido();
  } else {
    if (verificaPrato !== null) {
      verificaPrato.classList.remove("borda_verde");
      contador--;
    }
    elemento.classList.add("borda_verde");
    contador++;
    fecharPedido();
  }
}

function selecionaBebida(elemento) {
  const verificaBebida = document.querySelector(".bebida.borda_verde");
  let a = elemento.classList;
  if (String(a)[30] === "b") {
    elemento.classList.remove("borda_verde");
    contador--;
    fecharPedido();
  } else {
    if (verificaBebida !== null) {
      verificaBebida.classList.remove("borda_verde");
      contador--;
    }
    elemento.classList.add("borda_verde");
    contador++;
    fecharPedido();
  }
}
function selecionaSobremesa(elemento) {
  const verificaSobremesa = document.querySelector(".sobremesa.borda_verde");
  let a = elemento.classList;
  if (String(a)[33] === "b") {
    elemento.classList.remove("borda_verde");
    contador--;
    fecharPedido();
  } else {
    if (verificaSobremesa !== null) {
      verificaSobremesa.classList.remove("borda_verde");
      contador--;
    }
    elemento.classList.add("borda_verde");
    contador++;
    fecharPedido();
  }
}

function fecharPedido() {
  let texto_final = document.querySelector(".final span");
  let deixa_verde = document.querySelector(".final button");
  if (contador === 3) {
    texto_final.innerHTML = "Fechar pedido";
    deixa_verde.classList.add("deixa_verde");
  }
  if (contador !== 3) {
    deixa_verde.classList.remove("deixa_verde");
    texto_final.innerHTML = "Selecione os 3 itens para fechar o pedido";
  }
}

function enviaPedido() {
  if (contador !== 3) {
    alert("Por favor, selecione 1 prato, 1 bebida e 1 sobremesa");
  }
  if (contador === 3) {
    alert("Vamos enviar o pedido ao restaurante!");
  }
}
