<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="https://getbootstrap.com/docs/5.3/assets/css/docs.css" rel="stylesheet">
    <title>Bootstrap Example</title>
    <script defer src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js"></script>
</head>

<body class="p-3 m-0 border-0 bd-example m-0 border-0">
    <!-- Example Code Start-->
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Navbar</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Link</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown
              </a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li>
                                <hr class="dropdown-divider">
                            </li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link disabled" aria-disabled="true">Disabled</a>
                    </li>
                </ul>
                <form class="d-flex" role="search">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                    <button class="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
        </div>
    </nav>
    <!-- Example Code End -->
</body>

</html>

<head>
    <meta charset="utf-8" />
    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta name="description" content="Web site created using create-react-app" />
    <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
    <!--
      manifest.json provides metadata used when your web app is installed on a
      user's mobile device or desktop. See https://developers.google.com/web/fundamentals/web-app-manifest/
    -->
    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
    <!-- Formulário de Orçamento -->
    <form id="formOrcamento">
        <div class="row g-3">
            <div class="col-md-6">
                <label class="form-label">Nome Completo *</label>
                <input type="text" class="form-control" name="nome" placeholder="Seu nome completo" required>
            </div>
            <div class="col-md-6">
                <label class="form-label">Empresa</label>
                <input type="text" class="form-control" name="empresa" placeholder="Nome da sua empresa">
            </div>
            <div class="col-md-6">
                <label class="form-label">E-mail *</label>
                <input type="email" class="form-control" name="email" placeholder="seu@email.com" required>
            </div>
            <div class="col-md-6">
                <label class="form-label">Telefone *</label>
                <input type="tel" class="form-control" name="telefone" placeholder="(11) 99999-9999" required>
            </div>
            <div class="col-12">
                <label class="form-label">Serviço de Interesse</label>
                <select class="form-select" name="servico">
        <option selected>Selecione um serviço</option>
        <option>Assessoria em TI</option>
        <option>Suporte Técnico</option>
        <option>Segurança da Informação</option>
        <option>Redes e Infraestrutura</option>
      </select>
            </div>
            <div class="col-12">
                <label class="form-label">Mensagem *</label>
                <textarea class="form-control" name="mensagem" rows="4" placeholder="Conte-nos sobre suas necessidades..." required></textarea>
            </div>
        </div>
        <button type="submit" class="btn btn-primary w-100 mt-4">Enviar Solicitação</button>
    </form>
    <div id="mensagem" class="mt-3"></div>
    <!--
      Notice the use of %PUBLIC_URL% in the tags above.
      It will be replaced with the URL of the `public` folder during the build.
      Only files inside the `public` folder can be referenced from the HTML.

      Unlike "/favicon.ico" or "favicon.ico", "%PUBLIC_URL%/favicon.ico" will
      work correctly both with client-side routing and a non-root public URL.
      Learn how to configure a non-root public URL by running `npm run build`.
    -->
    <title>React App</title>
</head>

<body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
    <!--
      This HTML file is a template.
      If you open it directly in the browser, you will see an empty page.

      You can add webfonts, meta tags, or analytics to this file.
      The build step will place the bundled scripts into the <body> tag.

      To begin the development, run `npm start` or `yarn start`.
      To create a production bundle, use `npm run build` or `yarn build`.
    -->
    <script>
        document.getElementById('formOrcamento').addEventListener('submit', function(e) {
            e.preventDefault();

            const formData = new FormData(this);

            fetch('/api/cadastrar', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    nome: this.nome.value,
                    empresa: this.empresa.value,
                    email: this.email.value,
                    telefone: this.telefone.value,
                    servico: this.servico.value,
                    mensagem: this.mensagem.value
                })
            })

            .then(response => response.json())
                .then(data => {
                    document.getElementById('mensagem').innerText = data.message;
                    this.reset();
                })

            .catch(error => {
                document.getElementById('mensagem').innerText = 'Erro ao enviar solicitação.';
                console.error(error);
            });
        });
    </script>
</body>




</html>