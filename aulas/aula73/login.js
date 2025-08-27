class Login {
  static logado = false;
  static matlogado = null;
  static nomeLogado = null;
  static acessologado = null;
  static config = { cor: "048" };
  static endpoint = "http://localhost:2074/aluno";

  static estilo_css = `
    .fundoLogin { display:flex; justify-content:center; align-items:center; height:100vh; background:linear-gradient(to bottom right,#1e3c72,#2a5298);}
    .baseLogin { background:#fff; padding:40px 30px; border-radius:15px; box-shadow:0 8px 20px rgba(0,0,0,0.3); width:350px;}
    .tituloLogin { font-size:28px; font-weight:bold; text-align:center; color:#2a5298; margin-bottom:25px;}
    #corpoLogin { display:flex; flex-direction:column;}
    form label { margin-top:10px; font-weight:bold; color:#333; display:block;}
    form input { width:100%; padding:10px 12px; margin-top:5px; border-radius:8px; border:1px solid #ccc; outline:none; transition:0.3s;}
    form input:focus { border-color:#2a5298; box-shadow:0 0 5px rgba(42,82,152,0.5);}
    form button { width:100%; padding:12px; margin-top:20px; border:none; border-radius:8px; background:#2a5298; color:#fff; font-size:16px; cursor:pointer; transition:0.3s;}
    form button:hover { background:#1e3c72;}
    #logo { margin-top:20px; text-align:center; font-weight:bold; color:#2a5298; font-size:18px;}
  `;

  /** Utilitário para criar elementos */
  static criarElemento(tag, attrs = {}, content = "") {
    const el = document.createElement(tag);
    Object.entries(attrs).forEach(([key, val]) => el.setAttribute(key, val));
    if (content) el.innerHTML = content;
    return el;
  }

  /** Renderiza a tela de login */
  static aplicarEstilo() {
    // Fundo
    const fundoLogin = this.criarElemento("div", { id: "fundoLogin", class: "fundoLogin" });
    document.body.prepend(fundoLogin);

    // Caixa principal
    const baseLogin = this.criarElemento("div", { id: "baseLogin", class: "baseLogin" });
    fundoLogin.appendChild(baseLogin);

    // Título
    baseLogin.appendChild(this.criarElemento("div", { id: "tituloLogin", class: "tituloLogin" }, "Login"));

    // Corpo
    const corpoLogin = this.criarElemento("div", { id: "corpoLogin", class: "corpoLogin" });
    baseLogin.appendChild(corpoLogin);

    // Formulário
    const form = this.criarElemento("form", { method: "get" });
    corpoLogin.appendChild(form);

    // Inputs dinamicamente
    const campos = [
      { id: "matricula", label: "Matrícula", type: "text" },
      { id: "senha", label: "Senha", type: "password" }
    ];

    campos.forEach(({ id, label, type }) => {
      form.appendChild(this.criarElemento("label", { for: id }, label));
      form.appendChild(this.criarElemento("input", { type, id, name: id }));
    });

    // Botões
    const btnLogin = this.criarElemento("button", {}, "Verificar");
    btnLogin.addEventListener("click", (evt) => {
      evt.preventDefault(); // evita reload da página
      this.verificarLogin() ? this.fechar() : console.log("erro");
    });
    form.appendChild(btnLogin);

    const btnCancelar = this.criarElemento("button", { id: "cancelar" }, "Cancelar");
    btnCancelar.addEventListener("click", (evt) => {
      evt.preventDefault();
      this.fechar();
    });
    form.appendChild(btnCancelar);

    // Logo
    baseLogin.appendChild(this.criarElemento("div", { id: "logo" }, "Logo"));

    // CSS
    if (!document.getElementById("id_estiloLogin")) {
      const style = this.criarElemento("style", { id: "id_estiloLogin" });
      style.textContent = this.estilo_css;
      document.head.appendChild(style);
    }
  }

  /** Login com backend */
  static login(config, mat, pas) {
    this.config = config;
    const url = `${this.endpoint}?matricula=${mat}&senha=${pas}`;
    fetch(url)
      .then((res) => res.json())
      .then((res) => console.log("Dados do back-end:", res))
      .catch((err) => console.error("Erro ao buscar dados:", err));
  }

  /** Valida credenciais */
  static verificarLogin() {
    const mat = document.getElementById("matricula")?.value;
    const pas = document.getElementById("senha")?.value;
    return mat === "123" && pas === "321";
  }

  /** Remove tela de login */
  static fechar() {
    document.getElementById("fundoLogin")?.remove();
    document.getElementById("id_estiloLogin")?.remove();
  }
}

export { Login };
