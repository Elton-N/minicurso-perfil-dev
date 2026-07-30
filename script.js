// --- Passo 1: Localizar os elementos do DOM ---
// Encontra o botão e o parágrafo no HTML usando seus IDs.
const botao = document.getElementById("btn-mudar-texto");
const paragrafo = document.getElementById("paragrafo-dinamico");
 
// --- Passo 2: Definir o comportamento (a função) ---
// Cria uma função que será executada quando o botão for clicado.
function mudarConteudo() {
  // Altera o conteúdo de texto do parágrafo.
  paragrafo.textContent = "Este é o novo texto, alterado pelo JavaScript!";
}
 
// --- Passo 3: Criar o Ouvinte de Evento ---
// Diz ao botão para "ouvir" o evento de 'click' e, quando acontecer,
// chamar a função 'mudarConteudo'.
botao.addEventListener("click", mudarConteudo);