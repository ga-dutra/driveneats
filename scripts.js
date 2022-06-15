let contador = 0;
let pratoPrincipal = "";
let bebida = "";
let sobremesa = "";
let valorPratoPrincipal = 0;
let valorbebida = 0;
let valorsobremesa = 0;

function virgulaParaPonto(a) {
  // Transforma vírgula em ponto na string
  if (a.length === 5) {
    let novoPreco = a.substring(0, 2) + "." + a.substring(3);
    return novoPreco;
  } else if (a.length === 4) {
    let novoPreco = a.substring(0, 1) + "." + a.substring(2);
    return novoPreco;
  }
}

function pontoParaVirgula(a) {
  // Transforma ponto em vírgula na string
  if (a.length === 5) {
    let novoPreco = a.substring(0, 2) + "," + a.substring(3);
    return novoPreco;
  } else if (a.length === 4) {
    let novoPreco = a.substring(0, 1) + "," + a.substring(2);
    return novoPreco;
  }
}

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
  // Obtém o nome do prato principal
  let pratoPrincipal_aux = document.querySelector(
    ".prato_principal.borda_verde h2"
  ).innerHTML;
  pratoPrincipal = pratoPrincipal_aux;
  // Obtém o valor do prato principal
  pratoPrincipal_aux = String(
    document.querySelector(".prato_principal.borda_verde span").innerHTML
  );
  valorPratoPrincipal = virgulaParaPonto(pratoPrincipal_aux);
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
  // Obtém a bebida selecionada
  let bebida_aux = document.querySelector(".bebida.borda_verde h2").innerHTML;
  bebida = bebida_aux;
  // Obtém o valor da bebida
  bebida_aux = String(
    document.querySelector(".bebida.borda_verde span").innerHTML
  );
  valorbebida = virgulaParaPonto(bebida_aux);
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
  // Obtém a sobremesa selecionada
  let sobremesa_aux = document.querySelector(
    ".sobremesa.borda_verde h2"
  ).innerHTML;
  sobremesa = sobremesa_aux;
  // Obtém o valor da sobremesa
  sobremesa_aux = String(
    document.querySelector(".sobremesa.borda_verde span").innerHTML
  );
  valorsobremesa = virgulaParaPonto(sobremesa_aux);
}

function fecharPedido() {
  let texto_final = document.querySelector(".final span");
  let deixa_verde = document.querySelector(".final button");
  if (contador === 3) {
    texto_final.innerHTML = "Fechar pedido";
    deixa_verde.classList.add("deixa_verde");
    document.querySelector("a").classList.remove("desabilitado");
    document.querySelector(".deixa_verde").classList.remove("deixa_inclicavel");
  }
  if (contador !== 3) {
    deixa_verde.classList.remove("deixa_verde");
    texto_final.innerHTML = "Selecione os 3 itens para fechar o pedido";
    document.querySelector("a").classList.add("desabilitado");
    document.querySelector(".fechar_pedido").classList.add("deixa_inclicavel");
  }
}

function enviaPedido() {
  if (contador === 3) {
    let valorTotal = pontoParaVirgula(
      (
        Number(valorPratoPrincipal) +
        Number(valorbebida) +
        Number(valorsobremesa)
      ).toFixed(2)
    );
    const nome = prompt("Por favor, digite seu nome:");
    const endereço = prompt("Por favor, digite seu endereço:");
    const mensagem = `Olá, gostaria de fazer o pedido:\n- Prato: ${pratoPrincipal}\n- Bebida: ${bebida}\n- Sobremesa: ${sobremesa}\nTotal: R$ ${valorTotal}\n\nNome: ${nome}\nEndereço: ${endereço}`;
    const mensagemURL = encodeURIComponent(mensagem);
    const url = "https://wa.me/5514998424737?text=";
    let b = (document.querySelector(
      ".link_whats"
    ).href = `${url}${mensagemURL}`);
  }
}

function confirmaPedido() {
  document.querySelector(".topo").classList.add("deixa_embacado");
  document.querySelector(".conteudo").classList.add("deixa_embacado");
  document.querySelector(".final").classList.add("deixa_embacado");
  document.querySelector(".fechar_pedido").classList.add("deixa_inclicavel");
  document
    .querySelector(".secao_confirma_pedido")
    .classList.remove("escondido");
  document.querySelector(".esquerda.Prato").innerHTML = pratoPrincipal;
  document.querySelector(".esquerda.Bebida").innerHTML = bebida;
  document.querySelector(".esquerda.Sobremesa").innerHTML = sobremesa;
  document.querySelector(".direita.v1").innerHTML =
    pontoParaVirgula(valorPratoPrincipal);
  document.querySelector(".direita.v2").innerHTML =
    pontoParaVirgula(valorbebida);
  document.querySelector(".direita.v3").innerHTML =
    pontoParaVirgula(valorsobremesa);
  document.querySelector(".direita.last").innerHTML = pontoParaVirgula(
    (
      Number(valorPratoPrincipal) +
      Number(valorbebida) +
      Number(valorsobremesa)
    ).toFixed(2)
  );
}
