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
    form button { width:100%; padding:12px; margin-top:12px; border:none; border-radius:8px; background:#2a5298; color:#fff; font-size:16px; cursor:pointer; transition:0.3s;}
    form button:hover { background:#1e3c72;}
    #logo { margin-top:20px; text-align:center; font-weight:bold; color:#2a5298; font-size:18px;}
    .login-error { color: #b00020; margin-top:8px; text-align:center; font-weight:600; }
  `;

  static criarElemento(tag, attrs = {}, content = "") {
    const el = document.createElement(tag);
    Object.entries(attrs).forEach(([key, val]) => {
      if (key === "class" || key === "className") el.className = val;
      else el.setAttribute(key, val);
    });
    if (content) el.innerHTML = content;
    return el;
  }

  static aplicarEstilo() {
    if (document.getElementById("fundoLogin")) return;

    const fundoLogin = this.criarElemento("div", { id: "fundoLogin", class: "fundoLogin" });
    document.body.prepend(fundoLogin);

    const baseLogin = this.criarElemento("div", { id: "baseLogin", class: "baseLogin" });
    fundoLogin.appendChild(baseLogin);

    baseLogin.appendChild(this.criarElemento("div", { id: "tituloLogin", class: "tituloLogin" }, "Login"));

    const corpoLogin = this.criarElemento("div", { id: "corpoLogin", class: "corpoLogin" });
    baseLogin.appendChild(corpoLogin);

    const form = this.criarElemento("form", { method: "get", id: "formLogin" });
    corpoLogin.appendChild(form);

    const campos = [
      { id: "matricula", label: "Matrícula", type: "text" },
      { id: "senha", label: "Senha", type: "password" }
    ];

    campos.forEach(({ id, label, type }) => {
      form.appendChild(this.criarElemento("label", { for: id }, label));
      form.appendChild(this.criarElemento("input", { type, id, name: id }));
    });

    const msgErro = this.criarElemento("div", { id: "loginError", class: "login-error", role: "alert" }, "");
    form.appendChild(msgErro);

    const btnLogin = this.criarElemento("button", { type: "button", id: "btnLogin" }, "Entrar");
    btnLogin.addEventListener("click", async (evt) => {
      evt.preventDefault();
      msgErro.textContent = "";
      const ok = await this.verificarLogin(); // aguarda a resposta do fetch
      if (ok) this.fechar();
      else msgErro.textContent = "Matrícula ou senha inválida.";
    });
    form.appendChild(btnLogin);

    const btnCancelar = this.criarElemento("button", { type: "button", id: "cancelar" }, "Cancelar");
    btnCancelar.addEventListener("click", (evt) => {
      evt.preventDefault();
      this.fechar();
    });
    form.appendChild(btnCancelar);

    baseLogin.appendChild(this.criarElemento("div", { id: "logo" }, "Logo"));

    if (!document.getElementById("id_estiloLogin")) {
      const style = this.criarElemento("style", { id: "id_estiloLogin" });
      style.textContent = this.estilo_css;
      document.head.appendChild(style);
    }
  }

  /** Faz GET para ver a URL e retorna dados do backend (ou null em erro) */
  static async loginGet(mat, pas) {
    try {
      const endpoint = `${this.endpoint}?matricula=${encodeURIComponent(mat)}&senha=${encodeURIComponent(pas)}`;
      console.log("GET ->", endpoint); // aqui você vê a URL
      const res = await fetch(endpoint, { method: "GET" });
      if (!res.ok) {
        console.error("Servidor respondeu com status:", res.status);
        return null;
      }
      const dados = await res.json();
      return dados;
    } catch (err) {
      console.error("Erro no fetch GET:", err);
      return null;
    }
  }

  /** Valida credenciais com GET */
  static async verificarLogin() {
    const mat = document.getElementById("matricula")?.value ?? "";
    const pas = document.getElementById("senha")?.value ?? "";

    if (!mat || !pas) return false;

    const dados = await this.loginGet(mat, pas);

    // Ajuste conforme formato do teu backend.
    // Exemplos cobertos:
    // 1) { success: true, usuario: { nome, matricula } }
    // 2) [ { matricula: "...", nome: "..." } ]
    // 3) { matricula: "...", nome: "..." }
    if (!dados) return false;

    if (dados.success === true && dados.usuario) {
      const usuario = dados.usuario;
      this.logado = true;
      this.matlogado = usuario.matricula ?? mat;
      this.nomeLogado = usuario.nome ?? null;
      this.acessologado = usuario.acesso ?? null;
      return true;
    }

    if (Array.isArray(dados) && dados.length > 0) {
      const usuario = dados[0];
      this.logado = true;
      this.matlogado = usuario.matricula ?? mat;
      this.nomeLogado = usuario.nome ?? null;
      return true;
    }

    if (dados.matricula || dados.nome) {
      this.logado = true;
      this.matlogado = dados.matricula ?? mat;
      this.nomeLogado = dados.nome ?? null;
      return true;
    }

    // fallback: se backend retornar {ok:true} ou similar
    if (dados.ok === true) {
      this.logado = true;
      this.matlogado = mat;
      return true;
    }

    return false;
  }

  static fechar() {
    document.getElementById("fundoLogin")?.remove();
    document.getElementById("id_estiloLogin")?.remove();
  }
}

/* Se você usa modules (type="module") mantenha export:
export { Login };
*/

/* Se usa script normal no navegador (sem module), exponha no window: */
export {Login}
