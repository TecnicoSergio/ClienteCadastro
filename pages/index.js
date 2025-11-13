export default function Home() {
  return (
    <>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css
        https://getbootstrap.com/docs/5.3/assets/css/docs.css
        <title>Cadastro de Clientes</title>
        https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js
      </head>

      <div className="p-3 m-0 border-0 bd-example">
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            #
              Navbar
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  #
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  #
                    Link
                  </a>
                </li>
              </ul>
           >
        </nav>

        {/* Formulário */}
        <form
          id="formOrcamento"
          className="mt-4"
          onSubmit={async (e) => {
            e.preventDefault();
            const form = e.target;
            const data = {
              nome: form.nome.value,
              empresa: form.empresa.value,
              email: form.email.value,
              telefone: form.telefone.value,
              servico: form.servico.value,
             .value,
            };

            try {
              const response = await fetch("/api/cadastrar", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
              });

              const result = await response.json();
              alert(result.message);
              form.reset();
            } catch (error) {
              console.error(error);
              alert("Erro ao enviar solicitação.");
            }
          }}
        >
          <div className="row g-3">
            <div className="col-md-6">
              <label className="form-label">Nome Completo *</label>
              <input type="text" className="form-control" name="nome" required />
            </div>
            <div className="col-md-6">
              <label className="form-label">Empresa</label>
              <input type="text" className="form-control" name="empresa" />
            </div>
            <div className="col-md-6">
              <label className="form-label">E-mail *</label>
              <input type="email" className="form-control" name="email" required />
            </div>
            <div className="col-md-6">
              <label className="form-label">Telefone *</label>
              <input type="tel" className="form-control" name="telefone" required />
            </div>
            <div className="col-12">
              <label className="form-label">Serviço de Interesse</label>
              <select className="form-select" name="servico">
                <option>Selecione um serviço</option>
                <option>Assessoria em TI</option>
                <option>Suporte Técnico</option>
                <option>Segurança da Informação</option>
                <option>Redes e Infraestrutura</option>
              </select>
            </div>
            <div className="col-12">
              <label className="form-label">Mensagem *</label>
              <textarea
                className="form-control"
                name="mensagem"
                rows="4"
                required
              ></textarea>
            </div>
          </div>
          <button type="submit" className="btn btn-primary w-100 mt-4">
            Enviar Solicitação
          </button>
        </form>
      </div>
    </>
  );
}