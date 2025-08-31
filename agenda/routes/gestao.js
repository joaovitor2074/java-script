const tabela = document.getElementById("tabela_resultados");

const endpoint = "http://localhost:3000/gestao";
fetch(endpoint).then(res => res.json()).then(res =>{
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
                    <button class="btn editar" onclick="editar(${contato.n_contato_contato})">Editar</button>
                    <button class="btn excluir" onclick="excluir(${contato.n_contato_contato})">Excluir</button>
                </td>
            </tr>
        `;
        tabela.innerHTML += row;
    });
}

// funções placeholder
function editar(id) {
    alert("Editar contato ID: " + id);
}
function excluir(id) {
    alert("Excluir contato ID: " + id);
}
