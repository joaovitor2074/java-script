const tabela = document.getElementById("tabela_resultados");

const endpoint = "http://localhost:3000/gestao";
fetch(endpoint)
  .then(res => res.json())
  .then(res => {
    renderTabela(res);
  });

function renderTabela(dados) {
  // cabeçalho
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
                <td>${contato.dtnas || contato.f_dtnas}</td>
                <td class="acoes">
                    <button class="btn editar" data-id="${contato.n_contato_contato}">Editar</button>
                    <button class="btn excluir" data-id="${contato.n_contato_contato}">Excluir</button>
                </td>
            </tr>
        `;
    tabela.innerHTML += row;
  });

  // ✅ adiciona os eventos agora que os botões existem
tabela.addEventListener("click", (evt) => {
  if (evt.target.classList.contains("editar")) {
    const linha = evt.target.closest("tr");
    const celulas = linha.querySelectorAll("td"); // NodeList com cada coluna
    console.log(linha)
    linha.remove()

    // const id = celulas[0].innerText;
    // const nome = celulas[1].innerText;
    // const email = celulas[2].innerText;
    // const nascimento = celulas[3].innerText;
    // console.log("Editar contato:");
    // console.log("ID:", id);
    // console.log("Nome:", nome);
    // console.log("Email:", email);
    // console.log("Nascimento:", nascimento);
  }
});
}

// funções placeholder
tabela.addEventListener("click", (evt) => {
  if (evt.target.classList.contains("excluir")) {
    const linha = evt.target.closest("tr");
    const celulas = linha.querySelectorAll("td"); // NodeList com cada coluna
    console.log(linha)
    linha.remove()
}})