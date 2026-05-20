# StockFlow – Sistema de Gestão de Estoque e Vendas: Roteiro Técnico Detalhado

## 1. Introdução

Este documento detalha o projeto **StockFlow – Sistema de Gestão de Estoque e Vendas**, um sistema web projetado para auxiliar pequenas empresas no controle de produtos, estoque, clientes e vendas. O objetivo é criar uma aplicação robusta e com aparência profissional, utilizando uma stack tecnológica moderna e valorizada no mercado para desenvolvedores júnior. O sistema deve ser funcional e apresentar uma interface de usuário que simule um ambiente corporativo real, permitindo que empresas pequenas gerenciem suas operações comerciais de forma eficiente e intuitiva.

Para o desenvolvimento do StockFlow, a stack tecnológica recomendada visa um bom equilíbrio entre complexidade e valorização no currículo de um desenvolvedor júnior. A tabela abaixo detalha as tecnologias escolhidas para cada camada da aplicação.

| Categoria       | Tecnologia           | Descrição                                                              |
| :-------------- | :------------------- | :--------------------------------------------------------------------- |
| **Front-end**   | HTML, CSS, JavaScript, Bootstrap | Estrutura, estilo e interatividade da interface do usuário. Bootstrap para agilizar o desenvolvimento responsivo. |
| **Back-end**    | Spring Boot          | Framework Java para construção de aplicações robustas e escaláveis.    |
| **Banco de Dados**| MySQL                | Sistema de gerenciamento de banco de dados relacional amplamente utilizado. |
| **ORM**         | Spring Data JPA / Hibernate | Ferramentas para mapeamento objeto-relacional, facilitando a interação com o banco de dados. |
| **Template Engine**| Thymeleaf            | Motor de template para renderização de páginas web no lado do servidor. |
| **Segurança**   | Spring Security      | Framework de segurança para autenticação e autorização de usuários.    |
| **Versionamento**| GitHub               | Plataforma para controle de versão do código-fonte e colaboração.      |

## 2. Escopo do Sistema

O sistema StockFlow será composto por diversos módulos obrigatórios que garantem o funcionamento completo da gestão comercial. O módulo de **Login e Autenticação** será responsável pelo gerenciamento de acesso ao sistema, garantindo que apenas usuários autorizados possam interagir com a aplicação. O **Dashboard** fornecerá uma visão geral e indicadores chave de desempenho, permitindo uma análise rápida da saúde do negócio.

A **Gestão de Produtos** permitirá o cadastro, consulta, edição e exclusão de produtos, enquanto o **Controle de Estoque** gerenciará a entrada e saída de produtos, mantendo as quantidades atualizadas. A **Gestão de Clientes** será responsável pelo cadastro, consulta, edição e exclusão de informações de clientes. O **Registro de Vendas** processará e registrará as transações de vendas, integrando-se com o controle de estoque. Por fim, o sistema contará com módulos de **Relatórios** para a geração de informações sobre vendas, produtos e estoque, e um **Histórico de Movimentações** para o registro detalhado de todas as alterações no estoque.

## 3. Arquitetura do Projeto

A arquitetura do projeto seguirá o padrão MVC (Model-View-Controller) com camadas bem definidas, utilizando a estrutura de diretórios padrão de um projeto Spring Boot. A organização dos pacotes visa separar as responsabilidades e facilitar a manutenção do código. A estrutura de diretórios esperada é a seguinte:

```txt
stockflow/
│
├── src/main/java/
│   ├── controller/
│   ├── service/
│   ├── repository/
│   ├── model/
│   ├── dto/
│   ├── config/
│   ├── security/
│   └── exception/
│
├── src/main/resources/
│   ├── templates/
│   ├── static/
│   │   ├── css/
│   │   ├── js/
│   │   └── img/
│   └── application.properties
│
└── pom.xml
```

Cada camada possui uma responsabilidade específica dentro da arquitetura. A camada **Controller** é responsável por receber as requisições HTTP do cliente, processá-las, interagir com a camada de serviço e retornar a resposta apropriada. A camada **Service** contém as regras de negócio da aplicação, orquestrando as operações e garantindo a integridade dos dados. A camada **Repository** abstrai a comunicação com o banco de dados, utilizando Spring Data JPA para realizar operações CRUD e consultas personalizadas.

A camada **Model** representa as entidades do domínio da aplicação, mapeadas para as tabelas do banco de dados. A camada **DTO (Data Transfer Object)** é utilizada para transferir dados entre as camadas da aplicação, evitando expor as entidades diretamente. A camada **Config** contém classes de configuração para beans e componentes. A camada **Security** gerencia a autenticação e autorização dos usuários. Por fim, a camada **Exception** define classes de exceção personalizadas para lidar com erros específicos da aplicação.

## 4. Modelagem do Banco de Dados

O banco de dados MySQL será utilizado para armazenar as informações do sistema. A modelagem abaixo apresenta as tabelas principais e seus respectivos campos. As chaves primárias (id) serão auto-incrementáveis e as chaves estrangeiras serão estabelecidas conforme os relacionamentos.

| Tabela | Campos Principais | Descrição |
| :--- | :--- | :--- |
| **usuarios** | id, nome, email, senha, cargo, ativo, created_at | Armazena os dados dos usuários do sistema, incluindo credenciais e nível de acesso. |
| **clientes** | id, nome, cpf, telefone, email, endereco, created_at | Registra as informações dos clientes para vinculação com as vendas. |
| **categorias** | id, nome, descricao | Define as categorias para classificação dos produtos. |
| **produtos** | id, nome, descricao, codigo_barras, preco_custo, preco_venda, quantidade_estoque, categoria_id, ativo, created_at | Armazena os detalhes dos produtos, incluindo preços e quantidade em estoque. Relaciona-se com a tabela de categorias. |
| **vendas** | id, cliente_id, usuario_id, valor_total, forma_pagamento, status, created_at | Registra as transações de vendas, vinculando o cliente, o usuário que realizou a venda e o valor total. |
| **itens_venda** | id, venda_id, produto_id, quantidade, valor_unitario, subtotal | Detalha os produtos incluídos em cada venda, com suas respectivas quantidades e valores. |
| **movimentacoes_estoque** | id, produto_id, tipo_movimentacao, quantidade, motivo, usuario_id, created_at | Mantém um histórico de todas as entradas e saídas de produtos no estoque, indicando o motivo e o usuário responsável. |

## 5. Regras de Negócio

As regras de negócio são fundamentais para garantir a integridade e o correto funcionamento do sistema. Para o cadastro de **Produtos**, os campos Nome, Categoria, Preço de Venda e Quantidade em Estoque são obrigatórios. Além disso, o nome do produto não pode ser repetido, o preço de venda deve ser maior que zero e a quantidade em estoque deve ser maior ou igual a zero.

No **Controle de Estoque**, a entrada de produtos exige que o usuário informe o produto, a quantidade a ser adicionada e o motivo da entrada. O sistema deve somar a quantidade informada ao estoque atual e registrar uma movimentação do tipo `ENTRADA`. A saída de estoque ocorre automaticamente na finalização de uma venda. A regra crítica neste processo é que o sistema **nunca** deve permitir que a quantidade em estoque de um produto se torne negativa. Se uma tentativa de saída resultar em estoque negativo, a operação deve ser bloqueada.

O fluxo de **Venda** envolve a seleção de um cliente, a adição de produtos ao carrinho com suas respectivas quantidades, a escolha da forma de pagamento e a finalização. Durante esse processo, o sistema deve calcular o subtotal de cada item e o valor total da venda, realizar a baixa automática da quantidade de produtos vendidos no estoque e registrar um histórico detalhado da venda e suas movimentações de estoque associadas. Se a quantidade de um produto solicitada na venda for maior que a quantidade disponível em estoque, o sistema deve exibir a mensagem "Quantidade indisponível em estoque" e bloquear a finalização da venda.

O sistema terá dois perfis de usuário com permissões distintas. O perfil **ADMIN** possui acesso total a todas as funcionalidades do sistema. O perfil **FUNCIONARIO** pode registrar vendas, consultar produtos e consultar clientes, mas não tem permissão para excluir produtos ou visualizar relatórios financeiros.

## 6. Telas do Sistema (UI/UX)

As telas do sistema devem seguir um design limpo e funcional, com foco na usabilidade. A **Tela de Login** conterá campos para Email e Senha, além de um botão "Entrar". O **Dashboard** apresentará cards de informação com o total de produtos cadastrados, total de vendas, clientes ativos e itens com estoque baixo. Além disso, exibirá gráficos de vendas por mês e produtos mais vendidos.

A tela de **Gestão de Produtos** exibirá uma tabela com Nome, Categoria, Preço, Quantidade, Status e Ações (Editar, Excluir, Visualizar), além de um botão "Novo Produto". A **Gestão de Clientes** oferecerá funcionalidade CRUD completa, com campos de busca por Nome, CPF e Telefone. A **Tela de Venda (PDV)** terá uma interface estilo Ponto de Venda, com campos para buscar produto e definir quantidade, um carrinho de compras exibindo Produto, Qtd, Preço e Subtotal, e um botão "Finalizar Venda". Por fim, a tela de **Relatórios** permitirá a geração de relatórios de produtos mais vendidos, faturamento mensal e estoque baixo, com filtros por data, categoria e cliente.

## 7. Endpoints REST

A comunicação entre o front-end e o back-end será realizada através de uma API RESTful. A tabela abaixo lista os principais endpoints que devem ser implementados.

| Método | Endpoint                  | Descrição                                        |
| :----- | :------------------------ | :----------------------------------------------- |
| `POST` | `/login`                  | Autentica um usuário no sistema.                 |
| `GET`  | `/produtos`               | Retorna a lista de todos os produtos.            |
| `POST` | `/produtos`               | Cadastra um novo produto.                        |
| `PUT`  | `/produtos/{id}`          | Atualiza um produto existente pelo ID.           |
| `DELETE`| `/produtos/{id}`          | Exclui um produto pelo ID.                       |
| `GET`  | `/clientes`               | Retorna a lista de todos os clientes.            |
| `POST` | `/vendas`                 | Registra uma nova venda.                         |
| `GET`  | `/relatorios/vendas`      | Gera relatórios de vendas com filtros.           |

## 8. Checklist de Desenvolvimento

O desenvolvimento do projeto será dividido em cinco fases principais para facilitar o acompanhamento e a entrega das funcionalidades. A **Fase 1** envolve a configuração inicial do ambiente Spring Boot, a configuração da conexão com o banco de dados MySQL, a criação das entidades mapeando as tabelas do banco de dados e a criação das interfaces de repositório utilizando Spring Data JPA.

A **Fase 2** foca no desenvolvimento das funcionalidades básicas e autenticação. Isso inclui a implementação do CRUD para as entidades Produto e Cliente, o desenvolvimento da funcionalidade de Login e Autenticação utilizando Spring Security, e a implementação da gestão de usuários e permissões. A **Fase 3** aborda o core do sistema, com o desenvolvimento da tela de venda (PDV), a lógica de cálculo de subtotal e total, a baixa automática de estoque, a garantia da regra de não permitir estoque negativo e o registro do histórico de movimentações.

A **Fase 4** é dedicada ao Dashboard e Relatórios. Nesta fase, serão desenvolvidos os cards de informações e gráficos do Dashboard, a funcionalidade de geração de relatórios com filtros e melhorias na interface do usuário. Por fim, a **Fase 5** trata da finalização e deploy do projeto. Isso inclui a criação de um arquivo `README.md` profissional com prints do sistema e um GIF demonstrativo, além da realização do deploy da aplicação em um ambiente de produção.

## 9. Diferenciais para Currículo (Opcional)

Para tornar o projeto ainda mais atrativo e demonstrar habilidades adicionais, o desenvolvedor pode considerar a implementação de alguns diferenciais. A exportação de relatórios em formatos PDF e/ou Excel é uma funcionalidade muito valorizada em sistemas corporativos. A implementação de um tema escuro para a interface do usuário demonstra atenção à experiência do usuário.

A adição de pesquisa dinâmica AJAX em campos de busca, como na tela de vendas, melhora significativamente a usabilidade. A implementação de paginação em tabelas com grande volume de dados é essencial para o desempenho da aplicação. O registro de logs de auditoria para ações importantes dos usuários aumenta a segurança e a rastreabilidade do sistema. Por fim, a dockerização da aplicação, com a criação de um `Dockerfile` e `docker-compose.yml`, facilita a implantação e o gerenciamento do ambiente.

## 10. Considerações Finais

Este roteiro técnico serve como um guia abrangente para o desenvolvimento do sistema StockFlow. É fundamental que o desenvolvedor siga as boas práticas de programação, realize testes unitários e de integração, e mantenha o código versionado no GitHub. A comunicação constante e a revisão de código são essenciais para o sucesso do projeto.

---

**Autor:** Manus AI
**Data:** 19 de Maio de 2026
