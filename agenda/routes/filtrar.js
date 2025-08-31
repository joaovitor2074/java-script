const tabela = document.getElementById("tabela_resultados");
const txtfiltrar = document.getElementById("txtfiltrar");

txtfiltrar.addEventListener("input", async () => {
  let valor = txtfiltrar.value.trim(); // remove espaços antes/depois

  if (valor === "") {
    // Se apagou tudo, carrega de novo a lista completa
    let res = await fetch("http://localhost:3000/gestao");
    let dados = await res.json();
    renderTabela(dados);
    return;
  }

  console.log("Buscando por:", valor);

  // Pesquisa por nome
  let endpoint = `http://localhost:3000/pesquisarcontatos/nome/${valor}`;
  let res = await fetch(endpoint);
  let dados = await res.json();

  renderTabela(dados);
});




// Busca dados do backend
const endpoint = "http://localhost:3000/gestao";
fetch(endpoint)
  .then(res => res.json())
  .then(res => {
    renderTabela(res);
  });

// Renderiza a tabela com os contatos
function renderTabela(dados) {
  tabela.innerHTML = `
    <tr>
      <th>ID</th>
      <th>Nome</th>
      <th>Email</th>
      <th>Nascimento</th>
      <th>Ações</th>
    </tr>
  `;

  if (!dados || dados.length === 0) {
    tabela.innerHTML += `<tr><td colspan="5">Nenhum resultado encontrado</td></tr>`;
    return;
  }

  dados.forEach(contato => {
    const row = `
      <tr>
        <td>${contato.n_contato_contato}</td>
        <td>${contato.s_nome_conato}</td>
        <td>${contato.s_email_contato}</td>
        <td>${contato.f_dtnas}</td>
        <td class="acoes">
          <button class="btn editar"
            data-id="${contato.n_contato_contato}"
            data-nome="${contato.s_nome_conato}"
            data-celular="${contato.s_celular_contato || ''}"
            data-email="${contato.s_email_contato}"
            data-nasc="${contato.f_dtnas}">
            Editar
          </button>
          <button class="btn excluir" data-id="${contato.n_contato_contato}">Excluir</button>
        </td>
      </tr>
    `;
    tabela.innerHTML += row;
  });
}

// Função auxiliar para formatar data no padrão yyyy-mm-dd
function formatarDataISO(data) {
  if (!data) return "";
  let d = new Date(data);
  return d.toISOString().split("T")[0];
}

// Evento para clicar em EDITAR
tabela.addEventListener("click", (evt) => {
  if (evt.target.classList.contains("editar")) {
    let id = evt.target.dataset.id;
    let nome = evt.target.dataset.nome;
    let celular = evt.target.dataset.celular;
    let email = evt.target.dataset.email;
    let nasc = evt.target.dataset.nasc;

    document.getElementById("editId").value = id;
    document.getElementById("editNome").value = nome;
    document.getElementById("editCelular").value = celular;
    document.getElementById("editEmail").value = email;
    document.getElementById("editNasc").value = formatarDataISO(nasc);

    document.getElementById("popupEditar").style.display = "flex";
  }
});

// Fecha o popup
function fecharPopup() {
  document.getElementById("popupEditar").style.display = "none";
}
window.fecharPopup = fecharPopup; // expõe para o botão HTML

// Evento para SALVAR edição
document.getElementById("formEditar").addEventListener("submit", async (e) => {
  e.preventDefault();

  let id = document.getElementById("editId").value;
  let nome = document.getElementById("editNome").value;
  let celular = document.getElementById("editCelular").value;
  let email = document.getElementById("editEmail").value;
  let nasc = document.getElementById("editNasc").value;

  let endpoint = `http://localhost:3000/editarcontato/${id}`;
  let options = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      s_nome_conato: nome,
      s_celular_contato: celular,
      s_email_contato: email,
      f_dtnas: nasc
    })
  };

  await fetch(endpoint, options);
  alert("Contato atualizado com sucesso!");
  fecharPopup();
  location.reload(); // recarrega a tabela
});

// Evento para EXCLUIR
tabela.addEventListener("click", (evt) => {
  if (evt.target.classList.contains("excluir")) {
    let id = evt.target.dataset.id;
    let endpoint = `http://localhost:3000/excluirgestao/${id}`;

    fetch(endpoint, { method: "DELETE" })
      .then(res => {
        if (!res.ok) throw new Error("Erro ao excluir");
        return res.json();
      })
      .then(data => {
        console.log(data.msg);
        evt.target.closest("tr").remove(); // remove a linha direto
      })
      .catch(err => {
        console.error("Erro:", err.message);
      });
  }
});

