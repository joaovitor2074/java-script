const config_dgv = {
  endpoint: "produtos.json",
};

const datagridview = (() => {
  fetch(config_dgv.endpoint)
    .then(res => res.json())
    .then(data => {
      // cria o container principal
      const dgv = document.createElement("div");
      dgv.setAttribute("id", "dgv_produtos");
      dgv.setAttribute("class", "dgv");
      document.body.appendChild(dgv);

      // cabeçalho
      const titulos = document.createElement("div");
      titulos.setAttribute("id", "dgvTitulos");
      titulos.setAttribute("class", "dgvTitulos");
      titulos.innerHTML = `
        <div>ID</div>
        <div>Produto</div>
        <div>Marca</div>
        <div>Modelo</div>
        <div>Funções</div>
      `;
      dgv.appendChild(titulos);

      // área de dados
      const dgvDados = document.createElement("div");
      dgvDados.setAttribute("id", "dgvDados");
      dgvDados.setAttribute("class", "dgvDados");
      dgv.appendChild(dgvDados);

      // percorre o array JSON
      data.forEach((p) => {
        const linha = document.createElement("div");
        linha.classList.add("linha");
        linha.setAttribute("id", p.id)
        linha.innerHTML = `
          <div>${p.id}</div>
          <div>${p.produto}</div>
          <div>${p.marca}</div>
          <div>${p.modelo}</div>
          <div class="funcoes">
            <button class="btn edit">Editar</button>
            <button class="btn delete">Excluir</button>
          </div>
        `;
        dgvDados.appendChild(linha);
      });
    })
    .catch(err => console.error("Erro ao carregar produtos:", err));
})();
