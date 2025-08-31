// Mapeamento das abas e seus respectivos arquivos
const abas = {
  home: "home.html",
  btn_novo: "novo.html",
  btn_pesquisar: "pesquisar.html",
  btn_filtrar:"filtrar.html",
  btn_gestao: "gestao.html",
  sobre: "sobre.html"
};

// Função que marca a aba ativa
const selecionarAba = (btn) => {
  document.querySelectorAll(".btn").forEach(b => b.classList.remove("ativo"));
  btn.classList.add("ativo");
};

// Inicialização após o carregamento do DOM
document.addEventListener("DOMContentLoaded", () => {
  Object.entries(abas).forEach(([id, arquivo]) => {
    const btn = document.getElementById(id);

    if (!btn) {
      console.warn(`Botão com id "${id}" não encontrado`);
      return;
    }

    btn.addEventListener("click", () => {
      selecionarAba(btn);
      // Carrega o conteúdo no iframe
      const iframe = document.getElementById("iframe_principal");
      if (iframe) {
        iframe.src = `./${arquivo}`;
      }

      // Exemplo de ação específica para uma aba
      if (id === "btn_novo") {
        console.log("Botão 'Novo' clicado");
      }
    });
  });

  // Carrega a aba inicial automaticamente
  const abaInicial = document.getElementById("home");
  if (abaInicial) abaInicial.click();
});
