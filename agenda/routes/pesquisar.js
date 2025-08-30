const btnPesquisar = document.getElementById("btn_pesq");
const txtPesquisar = document.getElementById("txt_pesq");
const tabela = document.getElementById("tabela_resultados"); // tabela no HTML

btnPesquisar.addEventListener("click", () => {
    const valorPesq = txtPesquisar.value.trim();

    if (!valorPesq) {
        alert("Digite a pesquisa");
        txtPesquisar.focus();
        return;
    }

    const filtro = document.querySelector("input[name=f_pesq]:checked")?.value;
    if (!filtro) {
        alert("Selecione um filtro de pesquisa");
        return;
    }

    const endpoint = `http://localhost:3000/pesquisarcontatos/${filtro}/${valorPesq}`;

    fetch(endpoint)
        .then(res => res.json())
        .then(dados => {
            renderTabela(dados);
        })
        .catch(err => console.error("Erro ao buscar contatos:", err));
});

function renderTabela(dados) {
    // limpa a tabela antes de preencher
    tabela.innerHTML = `
        <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Email</th>
            <th>Nascimento</th>
        </tr>
    `;

    if (!dados || dados.length === 0) {
        tabela.innerHTML += `<tr><td colspan="4">Nenhum resultado encontrado</td></tr>`;
        return;
    }

    dados.forEach(contato => {
        const row = `
            <tr>
                <td>${contato.n_contato_contato}</td>
                <td>${contato.s_nome_conato}</td>
                <td>${contato.s_email_contato}</td>
                <td>${contato.f_dtnas}</td>
            </tr>
        `;
        tabela.innerHTML += row;
    });
}
