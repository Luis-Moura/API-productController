# ProductController Backend

## Descrição
O **ProductController** é uma aplicação de controle de estoque desenvolvida em JavaScript que permite a gestão eficiente de produtos. Este backend foi criado para suportar todas as funcionalidades necessárias para o gerenciamento de produtos, incluindo cadastro, atualização, exclusão e consulta de produtos no estoque.

## Funcionalidades
- **Gerenciamento de Produtos:** Permite o CRUD (Create, Read, Update, Delete) de produtos.
- **Autenticação e Autorização:** Implementação de um sistema de login com suporte a diferentes níveis de acesso.
- **Validação de Dados:** Garantia de que os dados inseridos seguem os padrões esperados.
- **Segurança:** Proteção contra ataques comuns, como SQL Injection, e uso de CORS para controle de origens.

## Tecnologias Utilizadas
- **Node.js:** Ambiente de execução para JavaScript no servidor.
- **Express.js:** Framework para construir a API RESTful.
- **MySQL:** Banco de dados utilizado para armazenar informações dos produtos.
- **MySQL Workbench:** Ferramenta de interface gráfica para gerenciar o banco de dados.
- **CORS:** Middleware para permitir solicitações de outras origens.
- **.env:** Arquivo para gerenciamento de variáveis de ambiente.

## Instalação e Configuração

### Pré-requisitos
- Node.js (versão 14 ou superior)
- MySQL
- MySQL Workbench (opcional, mas recomendado)
- Git (para clonar o repositório)

## Configuração do Arquivo `.env`

A aplicação **ProductController** utiliza um arquivo `.env` para gerenciar variáveis de ambiente. Abaixo está um exemplo das configurações necessárias para rodar a aplicação corretamente.

### Exemplo de `.env`

```env
PORT=3000

// Configurações do Banco de Dados
DATABASE_NAME=nome_do_seu_banco_de_dados
DATABASE_USER=seu_usuario_no_banco_de_dados
DABATASE_PASSWORD=sua_senha_no_banco_de_dados
DATABASE_HOST=seu_host

// Configurações do CORS
FRONT_END_URL="http://seu-ip-local:5501"

```


### Passos de Instalação
1. **Clone o repositório:**
    ```bash
    git clone https://github.com/seu-usuario/productcontroller-backend.git
    cd productcontroller-backend
    ```

2. **Instale as dependências:**
    ```bash
    npm install
    ```

3. **Configuração do Banco de Dados:**
    - Crie um banco de dados MySQL.
    - Utilize o MySQL Workbench ou qualquer outra ferramenta para importar o arquivo `schema.sql` presente no repositório.
    - Configure as credenciais do banco de dados no arquivo `.env`:
    ```bash
    DB_HOST=localhost
    DB_USER=root
    DB_PASSWORD=sua_senha
    DB_NAME=productcontroller
    ```

4. **Inicie o servidor:**
    ```bash
    npm start
    ```
    O servidor estará disponível em `http://localhost:3000`.

## Uso da API

### Rotas de Estoque

#### **Listar Estoque**
- **GET** `http://localhost:3000/api/estoque`
    - Retorna uma lista de todos os produtos no estoque.

#### **Cadastrar Produto no Estoque**
- **POST** `http://localhost:3000/api/estoque`
    - Cadastra um novo produto no estoque.
    - **Body Exemplo:**
        ```json
        {
          "descricao": "novo produto"
        }
        ```

#### **Adicionar 1 ao produto**
- **PATCH** `http://localhost:3000/api/estoque/:id/increment`
    - Adiciona uma unidade ao estoque do produto especificado.
    - **Exemplo de uso:**
        - `http://localhost:3000/api/estoque/47/increment`

#### **Remover 1 ao produto**
- **PATCH** `http://localhost:3000/api/estoque/:id/decrement`
    - Remove uma unidade do estoque do produto especificado.
    - **Exemplo de uso:**
        - `http://localhost:3000/api/estoque/47/decrement`

#### **Deletar Produto do Estoque**
- **DELETE** `http://localhost:3000/api/estoque/:id`
    - Remove o produto especificado do estoque.
    - **Exemplo de uso:**
        - `http://localhost:3000/api/estoque/48`

### Rotas de Transações

#### **Listar Transações**
- **GET** `http://localhost:3000/api/transacoes`
    - Retorna uma lista de todas as transações registradas.

#### **Registrar Transação**
- **POST** `http://localhost:3000/api/transacoes`
    - Registra uma nova transação.
    - **Body Exemplo:**
        ```json
        {
          "tipo": "entrada",
          "descricao": "conta de luz 10",
          "valor": 300
        }
        ```

#### **Remover Transação**
- **DELETE** `http://localhost:3000/api/transacoes/:id`
    - Remove a transação especificada.
    - **Exemplo de uso:**
        - `http://localhost:3000/api/transacoes/21`

## Contribuição
Se você deseja contribuir para o **ProductController**, siga os passos abaixo:
1. Fork este repositório.
2. Crie uma branch para a nova funcionalidade (`git checkout -b feature/nova-funcionalidade`).
3. Faça commit das suas alterações (`git commit -m 'Adiciona nova funcionalidade'`).
4. Faça push para a branch (`git push origin feature/nova-funcionalidade`).
5. Abra um Pull Request.
