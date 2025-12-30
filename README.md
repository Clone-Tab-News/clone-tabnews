# Clone TabNews

Um projeto de exemplo para aprender Next.js, inspirado no TabNews.

## Como rodar o projeto

1. Instale as dependências:

   ```bash
   npm install
   ```

2. Inicie o servidor de desenvolvimento:

   ```bash
   npm run dev
   ```

3. Acesse [http://localhost:3000](http://localhost:3000) no seu navegador.

## Estrutura inicial

Crie o arquivo `pages/index.js` com o seguinte conteúdo para exibir a página inicial:

```javascript
function Home() {
  return (
    <div>
      <h1>Bem-vindo ao Clone TabNews</h1>
      <p>Este é um projeto de exemplo para aprender Next.js.</p>
    </div>
  );
}

export default Home;
```

Pronto! O servidor estará rodando e você verá a mensagem de boas-vindas na página inicial.

---

## Aula 07: Relação entre Cliente e Servidor

### O que é Cliente e Servidor?

- **Cliente:** Quem faz uma solicitação e espera uma resposta.
- **Servidor:** Quem recebe a solicitação e fornece o serviço ou resposta.

#### Exemplos simples

- **Copo de água:** Se alguém pede um copo de água, essa pessoa é o cliente e quem serve é o servidor. Se você pede para outra pessoa buscar o copo para entregar, nesse momento você vira cliente e quem busca vira servidor.
- **Restaurante:** Você faz o pedido ao garçom (cliente → garçom), o garçom pede para a cozinha (garçom → cozinha), a cozinha prepara e entrega ao garçom, que traz para você.

---

### Deploy com Vercel

Para publicar seu projeto,

## Aula 09: Níveis de Organização de Tarefas

### Níveis de Organização

#### Nível 1: Ser lembrado individualmente

- Se lembrar do que precisa fazer
- Já sabe como e o que precisa ser feito, mas precisa ser lembrado para não fazer outra coisa
- Utiliza ferramentas com menor custo de produção (energia) e menor tempo de aquecimento
- **Exemplo:** Anotar tarefas em um papel e deixá-lo visível na mesa de trabalho

#### Nível 2: Ser lembrado em grupo

- Relembrar toda a equipe do que precisa ser feito
- Não precisa detalhar muito o que precisa ser feito
- **Exemplo:** Quadros de Kanban

#### Nível 3: Expandir conhecimento

- Desenvolver de forma detalhada o que e como algo deve ser feito
- Documentar processos e compartilhar conhecimento
- **Exemplos:** Trello e GitHub

#### Nível 4: Gerar métricas

- Mensurar a produtividade das pessoas que estão trabalhando nas tarefas
- **Exemplo:** Planilhas com informações de tarefas totais, executadas e concluídas
  ![alt text](./class-images/image-1.png)

### Gerenciamento de Projetos

Ao iniciar um novo projeto, não existem apenas as opções "Tudo" ou "Nada". Há uma abordagem intermediária que envolve dividir o trabalho em partes gerenciáveis.

Um projeto é como uma pedra grande que precisa ser quebrada em partes menores para ser "digerida":

- **Milestones:** São os grandes pedaços da pedra (objetivos maiores)
- **Issues:** São os fragmentos que você consegue consumir (tarefas específicas)

As issues no GitHub são usadas para apontar problemas ou tarefas específicas dentro do repositório.

## Aula 10: Padronização de Código

### EditorConfig

O EditorConfig ajuda a manter estilos de codificação consistentes entre diferentes editores e IDEs.

1. Crie o arquivo `.editorconfig` na raiz do projeto com o seguinte conteúdo:

```
root = true

[*]
indent_style = space
indent_size = 2
```

2. Instale a extensão "EditorConfig for VS Code" para que o editor respeite estas configurações.

### Prettier

O Prettier é uma ferramenta que formata automaticamente seu código para manter um estilo consistente.

1. Instale o Prettier como dependência de desenvolvimento:

```bash
npm install prettier -D
```

2. Adicione os scripts de verificação e correção no `package.json`:

```json
"scripts": {
  "dev": "next dev",
  "lint:check": "prettier --check .",
  "lint:fix": "prettier --write ."
}
```

3. Configure o VS Code:
   - Instale a extensão do Prettier
   - Abra as configurações de Open User Settings (Ctrl + Alt + P)
   - Defina o Prettier como formatador padrão nas configurações:

     ![Configuração do Prettier](./class-images/class-10/prettier.png)

   - Habilite a opção "Format On Save":

     ![Format On Save](./class-images/class-10/prettier-1.png)

   - Desabilite o "Auto Save" para ter mais controle sobre quando salvar os arquivos:

     ![Auto Save](./class-images/class-10/prettier-2.png)

OBS: O Preetier é para salvar as configurações depoisd e escrever o código, o editorConfig é durante

## Aula 12: Registro de Domínio Próprio

### O que é um registrador de domínio?

- Um registrador de domínio é responsável por registrar e gerenciar domínios na internet.
- No Brasil, o principal registrador é o [registro.br](https://registro.br/).
- Todos os domínios ficam registrados no "Registry", que no Brasil é o nic.br.

  ![Registro de domínio](./class-images/class-12/aula-12-1.png)

### Como configurar o DNS na Vercel

1. Acesse o painel da Vercel e entre na seção **Domain**.
2. Clique em **ADD** para adicionar um novo domínio.

   ![Adicionar domínio](./class-images/class-12/aula-12-2.png)

3. Escolha o projeto e insira o domínio desejado.

   ![Escolher projeto e domínio](./class-images/class-12/aula-12-3.png)

4. Copie os servidores DNS fornecidos pela Vercel.

   ![Copiar DNS da Vercel](./class-images/class-12/aula-12-4.png)

5. Acesse o site [registro.br](https://registro.br/) e cole os DNSs copiados na configuração do seu domínio.
6. Aguarde a atualização do sistema do registro.br para que o domínio fique ativo.

   ![Configurar DNS no registro.br](./class-images/class-12/aula-12-5.png)

## Aula 14: PoC e MVP

### O que são PoC e MVP?

- **PoC (Prova de Conceito):** Demonstra a viabilidade técnica de uma ideia ou solução. É um experimento para validar se algo é possível antes de investir mais tempo e recursos.
- **MVP (Produto Mínimo Viável):** É a versão mais simples de um produto que já entrega valor ao usuário. O objetivo é lançar rapidamente para obter feedback real e evoluir o produto de forma iterativa.

#### Perguntas para guiar o desenvolvimento

- **Para PoC:**
  - Qual o menor custo que posso ter para mostrar a direção que devo seguir?
  - Qual a prova que confirma (ou não) o conceito que quero validar?

- **Para MVP:**
  - O que é o mínimo que posso fazer, mas muito bem feito, para já resolver o problema do usuário?
  - Qual o menor custo para entregar algo funcional ao usuário?

---

### Milestone 1: Fundação

É interessante começar com uma PoC do front-end, mesmo que simples. O importante é ter uma base inicial para construir e evoluir o projeto.

### "Overengineering"

Evite complicar demais o projeto desde o início. Foque no essencial e vá adicionando complexidade conforme necessário. O objetivo é entregar algo funcional rapidamente, sem se perder em detalhes desnecessários.

Fazer o simples bem feito é mais importante do que fazer algo complexo e cheio de recursos que não são necessários no momento.

## Aula 13: Testes automatizados

O nosso Teste Runner (framework de testes) é o Jest, instalamos ele como dependência de desenvolvimento:

```bash
npm install jest -D
```

Agora adicionar os scripts de teste no `package.json`:

```json
"scripts": {
  "test": "jest",
  "test:watch": "jest --watch"
}
```

É assim que se espera que os testes sejam executados, com "expect" e "toBe" para verificar os resultados.
![alt text](./class-images/class-15/aula-15-1.png)

```javascript
test("soma de dois números", () => {
  expect(valorDinamico).toBe("12");
});
```

Aqui nesse exemplo, o "expect" espera um valor dinâmico, enquanto o "toBe" espera um valor estático. O Jest vai comparar o resultado da soma com o valor esperado.

Pode-se ler assim: Espera-se que algo vindo do sistema (expect, valor dinâmico) possua o resultado declarado (toBe, hardcoded).

## Aula 16: Testes

### Tipos de Testes

- **Teste Unitário:** Testa uma unidade específica do código, como uma função ou método isolado. Não depende de outras partes do sistema ou de infraestrutura externa (ex: banco de dados). São independentes e autossuficientes.
- **Teste de Integração:** Testa a interação entre diferentes partes do sistema, como módulos ou componentes. Garante que as unidades funcionam bem juntas e podem envolver dependências externas, como banco de dados ou APIs.
- **Teste E2E (End-to-End):** Testa o sistema como um todo, simulando o comportamento do usuário final e verificando se todas as partes funcionam juntas corretamente.

![Tipos de Testes](/class-images/class-16/imagem-16-1.png)

### Por que precisamos de testes?

Garantir que as "peças do quebra-cabeça" do software se encaixem é fundamental. Não adianta cada parte funcionar sozinha se, juntas, não entregam o resultado esperado. Mudanças em uma parte do sistema podem causar erros em cadeia. Testes de unidade e integração ajudam a evitar esses problemas ao garantir que alterações não quebrem o funcionamento do sistema.

### Diferença entre tipos de testes

- **Teste de unidade:** Código que funciona por conta própria, sem dependências externas.
- **Teste de integração:** Foca na integração entre unidades ou camadas da aplicação/infrastrutura. Mesmo com 100% de cobertura em testes de unidade, o sistema pode não funcionar se as integrações falharem. Exemplo: testar uma chamada HTTP que acessa um banco de dados.
- **Teste E2E:** O mais fiel ao ambiente real, simulando a experiência do usuário final. Pode envolver deploy em infraestrutura semelhante à produção.

### Velocidade e custos

Quanto mais abrangente o teste, mais lento ele tende a ser. Testes E2E, por exemplo, podem exigir infraestrutura adicional e simulação de navegadores, tornando-os mais demorados. Em projetos grandes, a execução de todos os testes pode impactar o tempo de entrega de correções rápidas (hotfixes).

### Modelos de Testes

- **Pirâmide de Testes:** Proposta por Mike Cohn (2009), sugere ter mais testes unitários, alguns de integração e poucos E2E.
- **Troféu de Testes:** Proposta por Guillermo Rauch (criador do Next.js), valoriza mais os testes de integração.
- **Modelo Favo de Mel do Spotify:** Também dá mais importância aos testes de integração.

### Como distinguir testes de unidade e integração

Antigamente, testes de unidade eram feitos por desenvolvedores e testes de integração pelo time de qualidade. Hoje, muitos defendem que o importante é ter testes rápidos e confiáveis, independentemente da divisão clássica. Se não for possível implementar todos os tipos, priorize os testes de integração, pois eles garantem que as partes do sistema funcionam juntas.

> **Dica:** Projetos como Pagar.me e TabNews priorizaram testes de integração para garantir que a API funcionasse corretamente, já que o mais importante era a integração das partes.

---

### Encostando a mão no Protocolo HTTP

**Endpoint** é o endereço de uma API. Tudo com o que você interage provavelmente é uma interface, que abstrai detalhes de implementação.

Para criar um endpoint no Next.js, crie um arquivo em `pages/api`. Exemplo de rota: `http://localhost:3000/api/status`.

![Exemplo de endpoint](/class-images/class-16/image-16-2.png)

```javascript
function status(request, response) {
  response.status(200).json({ status: "ok" });
}

export default status;
```

**CURL** é uma ferramenta de linha de comando para fazer requisições HTTP.

```bash
curl -v http://localhost:3000/api/status
```

![Exemplo CURL](/class-images/class-16/image-16-3.png)

Para visualizar detalhes do protocolo HTTP, utilize o parâmetro `-v`:

```bash
curl -v http://localhost:3000/api/status
```

![Detalhes HTTP](/class-images/class-16/image-16-4.png)

## Aula 17: Qual banco de dados escolher?

Existem três decisões principais na hora de escolher a arquitetura de dados para um projeto:

- SGBD (Sistema de Gerenciamento de Banco de Dados): software que armazena e gerencia os dados. Exemplos: PostgreSQL, MySQL, MongoDB.
- Biblioteca de acesso / ORM: abstração para fazer queries e mapear modelos no código. Exemplos: Prisma, Sequelize, TypeORM.
- Migrations: scripts que versionam o esquema do banco (criação/alteração de tabelas). Exemplos: Prisma Migrate, TypeORM Migrations.

![Etapas de escolha](/class-images/class-17/image.png)

As escolhas do Filipe para este curso estão ilustradas abaixo:
![Escolhas do Filipe](/class-images/class-17/image-1.png)

### Por que o Docker virou padrão?

Antes cada desenvolvedor rodava tudo na própria máquina, o que gerava a famosa frase "na minha máquina funciona". Máquinas virtuais resolveram parte do problema, mas são pesadas.

O Docker trouxe containers leves que compartilham o kernel do sistema operacional, permitindo ambientes isolados, reprodutíveis e mais rápidos. Isso facilita desenvolver, testar e distribuir imagens (ex.: enviar para o Docker Hub).

![Docker](/class-images/class-17/image-2.png)

### Subir um banco de dados local (exemplo: PostgreSQL)

Crie um arquivo de composição na raiz do projeto (ex.: docker-compose.yml) e adicione um serviço de banco:

```yaml
# docker-compose.yml
version: "3.9"

services:
  database:
    image: postgres:17.6-alpine3.21
    environment:
      POSTGRES_PASSWORD: local_password
    ports:
      - "5432:5432"
```

Suba o container em segundo plano:

```bash
docker compose up -d
```

### Conectando ao PostgreSQL local

Instale o cliente psql (Ubuntu/Debian):

```bash
sudo apt update
sudo apt install -y postgresql-client
```

Conecte-se ao banco:

```bash
psql --host=localhost --port=5432 --username=postgres --dbname=postgres
# será solicitada a senha definida em POSTGRES_PASSWORD (ex: local_password)
```

Para sair do psql, digite:

```bash
\q
```

Se o arquivo docker-compose.yml estiver em outro diretório, use:

```bash
docker compose -f caminho/para/docker-compose.yml up -d
```

## Aula 18: Criar módulo "database.js"

No terminal usamos o psql para conectar ao PostgreSQL manualmente. No código, usamos o pacote "pg" para conectar ao banco a partir da aplicação.
![alt text](/class-images/class-18/image.png)

Instalação do pacote "pg":

```bash
npm install pg@8.11.3
```

Então dentro do diretório infra, foi criado o modulo database.js, que é responsável por de baixo dos panos, abrir conexão
com o banco de dados, executar uma query e fechar a conexão., sem que seja preciso fazer isso em cada arquivo, somente importando ele

```javascript
import { Client } from "pg";

async function query(queryObject) {
  const client = new Client({
    host: "localhost",
    port: 5432,
    user: "postgres",
    database: "postgres",
    password: "local_password",
  });

  await client.connect();
  const result = await client.query(queryObject);
  await client.end();

  return result;
}

export default { query };
```

Então importamos esse modulo database para dentro do nosso endpoint /api/v1/status, e fazemos uma query de teste, que é o SELECT 1 + 1 AS sum.

```javascript
import database from "../../../../infra/database.js";

async function status(request, response) {
  const result = await database.query("SELECT 1 + 1 AS sum;");
  console.log(result);
  response.status(200).json({ status: "ok" });
}

export default status;
```

### A importância das Variáveis de Ambiente

Podemos definir um serviço em três Camadas:

- Interface
- Aplicação
- Persistência

Enquanto a camada de Interface se preocupa com oferecer o melhor layout e experiência para o usuário, a camada de Aplicação se preocupa com a lógica de negócio e regras do sistema. Já a camada de Persistência é responsável por armazenar os dados de forma segura e eficiente.

A lógica para um serviço ser Stateless (sem estado) é que ele não deve depender de informações armazenadas localmente, como em memória ou arquivos. Isso permite que o serviço seja escalável e resiliente, já que qualquer instância do serviço pode atender a qualquer requisição sem depender de dados específicos.
![alt text](/class-images/class-18/image-1.png)

### Variáveis de Ambiente no Código

Criei o arquivo `.env` na raiz do projeto com as seguintes variáveis:

```
POSTGRES_HOST=localhost
POSTGRES_PORT=5432
POSTGRES_USER=postgres
POSTGRES_DB=postgres
POSTGRES_PASSWORD=local_password
```

E alterei no database.js para pegar essas variáveis de ambiente:

```javascript
const client = new Client({
  host: process.env.POSTGRES_HOST,
  port: process.env.POSTGRES_PORT,
  user: process.env.POSTGRES_USER,
  database: process.env.POSTGRES_DB,
  password: process.env.POSTGRES_PASSWORD,
});
```

### Variáveis de Ambiente no Docker Compose

Foi alterado o docker-compose.yml para pegar as variáveis de ambiente do arquivo .env
foi alterado o environment para env_file

```yaml
version: "3.9"
services:
  database:
    image: postgres:17.6-alpine3.21
    env_file:
      - ../.env
    ports:
      - "5432:5432"
```

### Foi certo fazer o commit do .env?

Segundo a documentação do NextJS sim, .env deveria ser commitado por conter as variáveis de ambiente, porém como pode haver
dados sensíveis, o ideal é ter um .env.example que não contenha dados sensíveis, e sim apenas o nome das variáveis, para que
quem for clonar o projeto, saiba quais variáveis de ambiente precisa criar.

Porém nesse exemplo utilizamos o .env.development, que é específico para o ambiente de desenvolvimento, e não contém dados sensíveis.

```bash
mv .env .env.development
```

E no composer.yaml alterei para pegar o .env.development

```yaml
# Qualquer serviço que você deseja executar deve ser definido aqui.
services:
  database:
    image: "postgres:17.6-alpine3.21"
    env_file:
      - ../.env.development
    ports:
      - "5432:5432"
```

### Caminho Absoluto

Para que o NextJs reconheça o caminho absoluto, foi criado o arquivo jsconfig.json na raiz do projeto com o seguinte conteúdo:

```json
{
  "compilerOptions": {
    "baseUrl": "."
  }
}
```

Esse "." é para referenciar que o caminho absoluto é a raiz do projeto.

Com isso, podemos importar o database.js de forma absoluta, sem precisar usar o caminho relativo com muitos "../"

```javascript
import database from "infra/database.js";
```

### Configurar scripts dos serviços

Primeiro criamos scripts para subir, parar e derrubar o container do docker, fizemos isso dedntro do package.json

```json
{
  "scripts": {
    "services:up": "docker compose -f infra/compose.yaml up -d",
    "services:stop": "docker compose -f infra/compose.yaml stop",
    "services:down": "docker compose -f infra/compose.yaml down"
  }
}
```

Também podemos combinar um comando após o outro, como por exemplo subir o conatiner e já rodar o service com o nosso comando
npm run dev:

```json
{
  "scripts": {
    "dev": "npm run services:up && next dev"
  }
}
```

## Aula 19:

### Endpoint "/status": ISO 8601 + Fuso + MVC + lowerCamelCase

O padrão ISO 8601 é uma norma internacional que define a representação de datas e horas. Ele é amplamente utilizado em APIs para garantir que as informações de data e hora sejam transmitidas de forma consistente e sem ambiguidade.

Um exemplo de data no formato ISO 8601 é: `2023-03-15T13:45:30Z`, que representa 15 de março de 2023, às 13:45:30 UTC.

Além disso, ao trabalhar com fusos horários, é importante considerar a diferença entre UTC e o horário local. O padrão ISO 8601 permite a inclusão de informações de fuso horário, como `2023-03-15T13:45:30-03:00`, que indica que a hora está no fuso horário de Brasília (UTC-3).

Controller pede pro model alguma informação ou regra de negócio

Depois que a Model faz o que tem que ser feito ele retorna essa informação para o Controller.

Então o Controller manda essa informação para a View, que se responsabiliza em devolver isso para o consumidor final no formato correto.

Para fazer a data atual ser retornada no formato ISO 8601, podemos utilizar o método `toISOString()` do objeto `Date` em JavaScript. Esse método retorna uma string no formato ISO 8601, que é o formato desejado para a nossa API.

```javascript
const updatedAt = new Date().toISOString();
```

OBS: a resposta (View) deve sempre ser feita em `snack case`

```javascript
async function status(request, response) {
  const updatedAt = new Date().toISOString();
  response.status(200).json({
    status: "ok",
    updated_at: updatedAt,
  });
}

export default status;
```

## Aula 20

### Database "Version" (+ Red, Green e Refactor do TDD)

RED é o estagio do TDD onde os testes falham, pois a funcionalidade ainda não foi implementada.

GREEN é o estágio onde os testes passam, ou seja, a funcionalidade foi implementada corretamente.

REFACTORY é o estágio de quando os testes já passaram, então podemos refatorar o código deixando ele mais semântico.

Para vermos a versão que esta no Postgres podemos usar a query SHOW, que nos "mostra alguns detalhes da nossa aplicação.

```javascript
async function status(request, response) {
  const updatedAt = new Date().toISOString();
  const databaseVersion = await database
    .query("SHOW server_version;")
    .then((result) => result.rows[0].server_version);

  response.status(200).json({
    updated_at: updatedAt,
    dependences: {
      database: {
        version: databaseVersion,
      },
    },
  });
}
```

Foi preciso fazer o then(), pois o retorno do dabase.query é um array da propriedade row.

```text
Result {
  command: 'SHOW',
  rowCount: null,
  oid: null,
  rows: [ { server_version: '17.6' } ],
  fields: [
    Field {
      name: 'server_version',
      tableID: 0,
      columnID: 0,
      dataTypeID: 25,
      dataTypeSize: -1,
      dataTypeModifier: -1,
      format: 'text'
    }
  ],
  _parsers: [ [Function: noParse] ],
  _types: TypeOverrides {
    _types: {
      getTypeParser: [Function: getTypeParser],
      setTypeParser: [Function: setTypeParser],
      arrayParser: [Object],
      builtins: [Object]
    },
    text: {},
    binary: {}
  },
  RowCtor: null,
  rowAsArray: false,
  _prebuiltEmptyResultObject: { server_version: null }
}
```

### Database "Max Connections"

Podemos pegar a quantidade máxima de conexões que o banco de dados suporta, com a query SHOW max_connections;

```javascript
async function status(request, response) {
  const updatedAt = new Date().toISOString();
  const databaseVersion = await database
    .query("SHOW server_version;")
    .then((result) => result.rows[0].server_version);

  const maxConnections = await database
    .query("SHOW max_connections;")
    .then((result) => result.rows[0].max_connections);

  response.status(200).json({
    updated_at: updatedAt,
    dependences: {
      database: {
        version: databaseVersion,
        max_connections: parseInt(maxConnections),
      },
    },
  });
}

export default status;
```

E fazemos em seguida o teste de integração para esse endpoint /api/v1/status

```javascript
test("Get to /api/v1/status should return 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  expect(response.status).toBe(200);

  const responseBody = await response.json();
  expect(responseBody.updated_at).toBeDefined();

  const parsedUpdatedAt = new Date(responseBody.updated_at).toISOString();
  expect(responseBody.updated_at).toBe(parsedUpdatedAt);

  expect(responseBody.dependences.database.version).toEqual("17.6");
  expect(responseBody.dependences.database.max_connections).toEqual(100);
});
```

### Database "Opened Connections"

Criamos a query para pegar a quantidade de conexões abertas no banco de dados, com a query SELECT \* from pg_stat_activity WHERE datname = 'local_db';

```javascript
const databaseOpenedConnectionsResult = await database.query(
  "SELECT count(*)::int from pg_stat_activity WHERE datname = 'local_db';",
);
```

### SQL Injection e Queries Parametrizadas

Primeiro começamos invadindo nosso próprio banco parametrizando nossa query:

```javascript
const databaseName = request.query.databaseName;
const databaseOpenedConnectionsResult = await database.query(
  `SELECT count(*)::int from pg_stat_activity WHERE datname = '${databaseName}';`,
);
```

Então, nos testes de integração, criamos um teste que simula um ataque de SQL Injection:

```javascript
test.only("Teste SQL Injection", async () => {
  await fetch(
    "http://localhost:3000/api/v1/status?databaseName='; SELECT pg_sleep(4); --",
  );
});
```

Dessa forma o nosso banco de dados fica vulnerável a ataques de SQL Injection, onde um atacante pode manipular a query para executar comandos maliciosos.

Para evitar isso, devemos utilizar queries parametrizadas, onde os valores são passados separadamente da query, evitando que o atacante consiga manipular a query.

```javascript
const databaseName = process.env.POSTGRES_DB;
const databaseOpenedConnectionsResult = await database.query({
  text: "SELECT count(*)::int from pg_stat_activity WHERE datname = $1;",
  values: [databaseName],
});
```

Um outro ponto muito importante é a questão do fechamento da connexão com o banco ded dados, sempre que ocorre algum erro fica uma conexão aberta, e isso pode levar o banco a ficar sem conexões disponíveis.

Para sempre evitar isso e garantir que haverá o fechamento da conexão, independente se ocorrer um erro ou não, podemos utilizar o try...catch...finally

```javascript
import { Client } from "pg";

async function query(queryObject) {
  const client = new Client({
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT,
    user: process.env.POSTGRES_USER,
    database: process.env.POSTGRES_DB,
    password: process.env.POSTGRES_PASSWORD,
  });

  try {
    await client.connect();
    const result = await client.query(queryObject);

    return result;
  } catch (error) {
    console.error("Database query error:", error);
  } finally {
    await client.end();
  }
}

export default { query };
```

## Aula 21

### Investigando logs da Vercel em Produção

Para investigar melhor o que de fato esta acontecendo em produção, podemos adicionar mais logs no nosso código, para termos mais informações do que esta acontecendo.

No arquivo infra/database.js, adicionei um console.log para imprimir as credenciais do banco de dados que estão sendo usadas na conexão.

```javascript
import { Client } from "pg";

async function query(queryObject) {
  const client = new Client({
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT,
    user: process.env.POSTGRES_USER,
    database: process.env.POSTGRES_DB,
    password: process.env.POSTGRES_PASSWORD,
  });

  console.log("Credenciais do Postgres: ", {
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT,
    user: process.env.POSTGRES_USER,
    database: process.env.POSTGRES_DB,
    password: process.env.POSTGRES_PASSWORD,
  });

  try {
    await client.connect();
    const result = await client.query(queryObject);

    return result;
  } catch (error) {
    console.error("Database query error:", error);
    throw error;
  } finally {
    await client.end();
  }
}

export default { query };
```

Com isso após acessar a rota `/api/v1/status` em produção, podemos ver nos logs da Vercel as credenciais que estão sendo usadas para conectar no banco de dados.
![alt text](/class-images/class-21/image.png)

### Banco de Produção

Criamos uma conta na NeonDB, que é um serviço de banco de dados PostgreSQL na nuvem, e criamos um banco de dados chamado `tabnews_clone`.

Dentro dela criamos uma instância do banco PostgreSQL, e pegamos as credenciais para conectar no banco.

Então entramos no .env do projeto e adicionamos as credenciais do banco de produção.

```
POSTGRES_HOST=ep-lingering-snow-779165.us-east-2.aws.neon.tech
POSTGRES_PORT=5432
POSTGRES_USER=your_username
POSTGRES_DB=tabnews_clone
POSTGRES_PASSWORD=your_password
```

Com isso conseguimos acessar a rota `/api/v1/status` em localmente, e ver que agora estamos conectando no banco de produção.

Depois entramos na vercel e colocamos as mesmas variáveis de ambiente do .env, para que em produção o projeto consiga conectar no banco de produção.

## Aula 22

Iremos utilizar o node-pg-migration que é uma ferramenta para controle de migração de banco de dados para PostgreSQL.

### Instalação do node-pg-migration

```bash
npm install node-pg-migrate@6.2.2
```

Adicionamos o script no package.json para criar uma nova migration:

```json
"scripts": {
    "migrate:create": "node-pg-migrate --migrations-dir infra/migrations create"
  }
```

Para testes foi rodado uma migration teste:

```bash
npm run migration:create first migrate teste
```

Vamos adicionar o modulo "dotenv" para carregar as variáveis de ambiente do .env

```bash
npm install dotenv@16.4.4
```

E alteramos o script, informando qual o arquivo do .env.development

```json
"scripts": {
    "migrate:up": "node-pg-migrate --migrations-dir infra/migrations --envPath .env.development up"
}
```

Adicionamos a nova variável de ambiente DATABASE_URL no .env.development

```bash
DATABASE_URL=postgres://local_user:local_password@localhost:5432/local_db
```

## Aula 23

### Migrations pelo endpoint “/migrations” (Dry Run)

Documentação que iremos utilizar da parte programática do node-pg-migrate, que permite fazer a mesma coisa que o CLI, mas de forma programática (código).
https://salsita.github.io/node-pg-migrate/api

Modo Dry Run é uma funcionalidade que permite simular a execução de uma operação sem realmente aplicá-la. No contexto de migrações de banco de dados, o Dry Run permite verificar quais mudanças seriam feitas no banco sem realmente executá-las. Isso é útil para revisar as alterações antes de aplicá-las, garantindo que tudo esteja correto e evitando possíveis erros.

Modo Live Run é o modo normal de execução, onde as mudanças são realmente aplicadas ao banco de dados. Nesse modo, as migrações são executadas e as alterações são feitas no banco conforme definido nos arquivos de migração.

Então criamos o endpoint /api/v1/migrations, que ao ser acessado, executa as migrações em modo Dry Run, ou seja, simula a execução das migrações sem realmente aplicá-las ao banco de dados.

```bash
tests/integration/api/v1/migrations/get.test.js
```

```javascript
test("Get to /api/v1/migrations should return 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/migrations");
  const responseBody = await response.json();

  expect(response.status).toBe(200);
  expect(Array.isArray(responseBody)).toBe(true);
  expect(responseBody.length).toBeGreaterThanOrEqual(0);
});
```

E utilizamos o migrationrunner do node-pg-migrate para executar as migrações em modo Dry Run:

```javascript
export default async function migrations(request, response) {
  const migrations = await migrateRunner({
    databaseUrl: process.env.DATABASE_URL,
    dryRun: true,
    dir: join("infra", "migrations"),
    direction: "up",
    verbose: true,
    migrationsTable: "pgmigrations",
  });

  response.status(200).json(migrations);
}
```

### Migrations pelo endpoint “/migrations” (Live Run)

Para executar as migrações em modo Live Run, ou seja, aplicando as mudanças ao banco de dados, criamos um teste para rodar com o metodo POST:

```javascript
test("Post to /api/v1/migrations should return 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/migrations", {
    method: "POST",
  });

  const responseBody = await response.json();
  expect(Array.isArray(responseBody)).toBe(true);
});
```

e alteramos a controller para se receber um GET, rodar em modo Dry Run, e se receber um POST, rodar em modo Live Run:

```javascript
import migrateRunner from "node-pg-migrate";
import { join } from "node:path";

export default async function migrations(request, response) {
  if (request.method === "GET") {
    const migrations = await migrateRunner({
      databaseUrl: process.env.DATABASE_URL,
      dryRun: true,
      dir: join("infra", "migrations"),
      direction: "up",
      verbose: true,
      migrationsTable: "pgmigrations",
    });

    return response.status(200).json(migrations);
  }

  if (request.method === "POST") {
    const migrations = await migrateRunner({
      databaseUrl: process.env.DATABASE_URL,
      dryRun: false,
      dir: join("infra", "migrations"),
      direction: "up",
      verbose: true,
      migrationsTable: "pgmigrations",
    });

    return response.status(200).json(migrations);
  }

  return response.status(405).json({ message: "Method not allowed" });
}
```

## Aula 24

### Fazendo o Jest "transpilar" arquivos em ESM

#### Problema: Testes rodando em paralelo

O primeiro objetivo foi fazer o Jest parar de rodar de forma paralela e passar a rodar de forma linear (sequencial). Isso é importante para testes de integração que compartilham o mesmo banco de dados, pois testes paralelos podem causar condições de corrida (race conditions) e resultados inconsistentes.

Para resolver isso, adicionamos a flag `--runInBand` no script de teste do `package.json`:

```json
"test": "jest --runInBand",
"test:watch": "jest --watchAll --runInBand",
```

A flag `--runInBand` força o Jest a executar todos os testes em série, um após o outro, no mesmo processo.

#### Problema: Jest não suporta ESM nativamente

Encontramos um novo problema: por padrão, o Jest não possui as configurações necessárias para trabalhar com ECMAScript Modules (ESM), que é o padrão moderno do JavaScript utilizado no projeto com `import/export`.

#### Solução: Integrar Jest com Next.js

Precisamos fazer com que o Jest possua os mesmos "poderes" do Next.js para transpilar arquivos ESM. Para isso, criamos o arquivo `jest.config.js` na raiz do projeto:

```javascript
const dotenv = require("dotenv");
dotenv.config({
  path: ".env.development",
}); // Carrega as variáveis de ambiente do .env para o process.env

const nextJest = require("next/jest"); // Dá para o Jest os "poderes" do Next.js

const createJestConfig = nextJest();
const jestConfig = createJestConfig({
  moduleDirectories: ["node_modules", "<rootDir>"],
  testEnvironment: "node",
});

module.exports = jestConfig;
```

**O que cada parte faz:**

1. **`dotenv.config()`**: Carrega as variáveis de ambiente do arquivo `.env.development` para o `process.env`, garantindo que os testes tenham acesso às mesmas configurações do ambiente de desenvolvimento.

2. **`require("next/jest")`**: Importa a função de configuração do Jest fornecida pelo Next.js, que já vem configurada para trabalhar com ESM, TypeScript e outras features modernas.

3. **`moduleDirectories`**: Define onde o Jest deve procurar por módulos. O `<rootDir>` permite usar imports absolutos (como `import database from "infra/database.js"`) em vez de relativos (como `import database from "../../../../infra/database.js"`).

4. **`testEnvironment: "node"`**: Define que os testes serão executados em ambiente Node.js (não em ambiente de navegador/DOM), que é apropriado para testes de API e integração com banco de dados.

#### Problema: Fetch não disponível no Node.js

Como o `fetch` não é nativo em versões antigas do Node.js, foi necessário adicionar o polyfill `node-fetch` nos arquivos de teste:

```javascript
import fetch from "node-fetch";
globalThis.fetch = fetch;
```

Isso garante que o `fetch` esteja disponível globalmente em todos os testes, simulando o comportamento do navegador.

#### Isolamento de testes com cleanDatabase

Para garantir que cada teste comece com um banco de dados limpo (evitando interferência entre testes), criamos a função `cleanDatabase` que é executada antes de todos os testes:

```javascript
beforeAll(cleanDatabase);

async function cleanDatabase() {
  // Derrubar todas as tabelas do banco de dados
  // E depois recriar o schema public
  await database.query("drop schema public cascade; create schema public;");
}
```

**Como funciona:**

- `DROP SCHEMA public CASCADE`: Remove o schema público e todas as suas dependências (tabelas, índices, etc.)
- `CREATE SCHEMA public`: Recria o schema público vazio
- `beforeAll()`: Hook do Jest que executa a função antes de todos os testes do arquivo

Isso garante um ambiente limpo e previsível para cada execução de testes.

#### Estrutura final dos testes

Com todas essas configurações, os testes de integração ficaram organizados da seguinte forma:

**GET /api/v1/migrations** (`tests/integration/api/v1/migrations/get.test.js`):

```javascript
import database from "infra/database.js";
import fetch from "node-fetch";

globalThis.fetch = fetch;

beforeAll(cleanDatabase);

async function cleanDatabase() {
  await database.query("drop schema public cascade; create schema public;");
}

test("Get to /api/v1/migrations should return 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/migrations");
  const responseBody = await response.json();

  expect(response.status).toBe(200);
  expect(Array.isArray(responseBody)).toBe(true);
  expect(responseBody.length).toBeGreaterThanOrEqual(0);
});
```

**POST /api/v1/migrations** (`tests/integration/api/v1/migrations/post.test.js`):

```javascript
import database from "infra/database.js";
import fetch from "node-fetch";

globalThis.fetch = fetch;

beforeAll(cleanDatabase);

async function cleanDatabase() {
  await database.query("drop schema public cascade; create schema public;");
}

test("POST to /api/v1/migrations should return 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/migrations", {
    method: "POST",
  });

  const responseBody = await response.json();
  expect(response.status).toBe(200);
  expect(Array.isArray(responseBody)).toBe(true);
});
```

#### Resumo das alterações

1. ✅ Testes agora rodam de forma sequencial (`--runInBand`)
2. ✅ Jest configurado para trabalhar com ESM através do Next.js
3. ✅ Variáveis de ambiente carregadas automaticamente nos testes
4. ✅ Fetch disponível globalmente via `node-fetch`
5. ✅ Banco de dados limpo antes de cada arquivo de teste
6. ✅ Imports absolutos funcionando nos testes

Com essa estrutura, os testes de integração são confiáveis, isolados e podem ser executados de forma consistente em qualquer ambiente.

## Aula 25: Deploys e Migração em Produção

### Instalando o dotenv-expand

O pacote `dotenv-expand` é uma extensão do `dotenv` que permite expandir variáveis de ambiente que referenciam outras variáveis. Isso é útil quando você deseja criar variáveis compostas ou reutilizar valores já definidos.

no termianal, instalei o pacote:

```bash
npm install dotenv-expand@11.0.6
```

ai meu .env.development ficou assim:

```
POSTGRES_HOST=localhost
POSTGRES_PORT=5432
POSTGRES_USER=local_user
POSTGRES_PASSWORD=local_password
POSTGRES_DB=local_db
DATABASE_URL=postgres://$POSTGRES_USER:$POSTGRES_PASSWORD@$POSTGRES_HOST:$POSTGRES_PORT/$POSTGRES_DB
NODE_ENV=development
```

### Criando uma conexão com o banco

No arquivo infra/database.js, criei o método assincrono getNewClient. Ele retorna uma instância conectada do banco de dados PostgreSQL usando as variáveis de ambiente para configuração.

```javascript
import { Client } from "pg";

async function query(queryObject) {
  let client;
  try {
    client = await getNewClient();
    const result = await client.query(queryObject);

    return result;
  } catch (error) {
    console.error("Database query error:", error);
    throw error;
  } finally {
    await client.end();
  }
}

async function getNewClient() {
  const client = new Client({
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT,
    user: process.env.POSTGRES_USER,
    database: process.env.POSTGRES_DB,
    password: process.env.POSTGRES_PASSWORD,
    ssl: process.env.NODE_ENV === "production" ? true : false,
  });

  await client.connect();
  return client;
}

export default { query, getNewClient };
```

Agora chamamos ela no @pages/api/v1/migrations/index.js

```javascript
import migrateRunner from "node-pg-migrate";
import { join } from "node:path";
import database from "infra/database.js";

export default async function migrations(request, response) {
  const dbClient = await database.getNewClient();
  const defaulMigrationsOptions = {
    dbClient,
    dryRun: true,
    dir: join("infra", "migrations"),
    direction: "up",
    verbose: true,
    migrationsTable: "pgmigrations",
  };

  if (request.method === "GET") {
    const pendingMigrations = await migrateRunner(defaulMigrationsOptions);

    await dbClient.end();
    return response.status(200).json(pendingMigrations);
  }

  if (request.method === "POST") {
    const migratedMigrations = await migrateRunner({
      ...defaulMigrationsOptions,
      dryRun: false,
    });

    await dbClient.end();

    if (migratedMigrations.length > 0) {
      return response.status(201).json(migratedMigrations);
    }

    return response.status(200).json(migratedMigrations);
  }

  return response.status(405).json({ message: "Method not allowed" });
}
```

## Aula 26: Criação de ambiente homologação

### Fazendo deploy em Homologação (Staging)

Primeiro passo foi criar um novo database dentro do Projeto Neon, chamamos ele de `staging`
![alt text](/class-images/class-26/image.png)

Depois, va Vercel, configuramos essas variáveis de ambiente, porém somente para o Preview (esse é o nome que a Vercel chama o ambiente de homologação).
![alt text](/class-images/class-26/image-1.png)

Para finalizar, criamos um arquivo chamado `cabelo.tx`e adicionamos ao staged (fizemos commit), depois deletamos esse arquivo e fizmos um novo commit
![alt text](/class-images/class-26/image-2.png)
OBS: tivemos que fazer isso, para poder gerar um novo deploy para o ambiente de homologação (Preview) da Vercel.

Então por último criamos uma nova branch e subimos ela (git push), com isso na Vercel foi gerado um novo deploy para o ambiente de homologação (Preview).
![alt text](/class-images/class-26/image-3.png)

## Melhorando visibilidade dos logs em Produção via curl

Utilizamos a lib `json.tool` do python3 para visualizar melhor os logs do cli

```bash
curl -s https://tabnews-clone-filipe.vercel.app/api/v1/status | python3 -m json.tool
```

# Aula 27

## Git Reflog

O comando `git reflog` é uma ferramenta poderosa que permite visualizar o histórico de referências do Git, incluindo commits, branches e outras operações. Ele registra todas as mudanças feitas no repositório, mesmo aquelas que não são visíveis no histórico padrão do Git.

# Aula 29

## Estabilizar "npm run dev"

Estabilizar Ambientes Locais

- Alterações no script "dev"

Vamos resolver isso, como usamos um banco ded dados relacional, a migration precisa ser feita no comando "npm run dev" para que o banco de dados esteja com o schema atualizado.

Alteramos o package.json

```json
"scripts": {
    "dev": "npm run services:up && npm run migration:up && next dev"
  }
```

Porém se rodar o comando "npm run dev" com o container desabilitado aconteceu um erro, pois o docker esta funcionando em modo detach, ou seja, já vai direto para o background e os demais comandos já são executados, porém até o momento ele ainda não "rodou completamente" o que não permite que seja feita a migration

Para resolver o problema foi criado um script para verificar se já esta tudo correto para subir as migrations (wait-for-postgres)

Então foi criado esse arquivo em infra/scripts/wait-for-postgres.js

E colocamos a chamada desse script no package.json

```json
"scripts": {
    "wait-for-postgres": "node infra/scripts/wait-for-postgres.js"
  }
```

Vamos dar um nome para um container, para poder rodar um comando que verifica a conexão do banco de dados

- alteração é feita no compose.yaml

```yaml
services:
  database:
    container_name: "postgres-dev"
```

Para conseguir processar comandos dentro de um script utilizamos o child_process, que permite executar comandos do sistema operacional a partir do Node.js.
Vamos utilizar o método exec dele para executar o comando psql que verifica a conexão com o banco de dados.

```javascript
const { exec } = require("node:child_process");

function checkPostgres() {
  exec("docker exec postgres-dev pg_isready", handleReturn);

  function handleReturn(error, stdout) {
    if (stdout.search("accepting connections") === -1) {
      console.log("Não esta aceitando conexões ainda.");
      return;
    }

    console.log("✅ Postgres está aceitando conexões!");
  }
}

console.log("🔴 Aguardando Postgres aceitar conexões");
checkPostgres();
```

Resultado final do arquivo

```javascript
const { exec } = require("node:child_process");

function checkPostgres() {
  exec("docker exec postgres-dev pg_isready --host localhost", handleReturn);

  function handleReturn(error, stdout) {
    if (stdout.search("accepting connections") === -1) {
      process.stdout.write(".");
      checkPostgres();
      return;
    }

    process.stdout.write("\n✅ Postgres está aceitando conexões!\n");
  }
}

process.stdout.write("\n\n🔴 Aguardando Postgres aceitar conexões\n");
checkPostgres();
```

## Estabilizar "npm test" (Paralelismo)

A ideia é quando rodar o comando "npm test" ele já suba o container do banco de dados, aguarde ele estar pronto para aceitar conexões, rode as migrations e só depois rode os testes.

Se somente faezr isso:

```json
  "test": "npm run services:up && npm run wait-for-postgres && jest --runInBand",
```

Não vai dar certo porque o comando "npm run services:up" roda em modo detach, ou seja, ele já vai direto para o background e os demais comandos já são executados, porém até o momento ele ainda não "rodou completamente" o que não permite que seja feita a migration e os testes.

Esse erro também ocorre porque o nosso servidor "next dev" ainda não esta de pé. Mas diferente do container, o servidor não possui um modo detach, que roda enquanto o próximo comando é executado.

Vamos resolver esse problema em duas etapas: Primeiro fazer eles rodarem de forma concorrente e depois fazer um orquestrador

Para fazer rodar de forma concorrente, vamos utilizar o pacote `concurrently`, que permite executar múltiplos comandos npm em paralelo.
https://www.npmjs.com/package/concurrently

```bash
npm install --save-dev concurrently@8.2.2
```

Com esse pacote instalado já posso usar os comando em modo concorrente:

```json
    "test": "npm run services:up && npm run wait-for-postgres && concurrently 'next dev' 'jest --runInBand'",
```

Como podemos ver esse vem com um colchete informando qual o comando que esta sendo executado, neste exemplo, o [0] é o next dev e o [1] é o jest.
![alt text](class-images/class-29/image.png)

Para melhorar a visualização, vamos utilizar o parâmetro `--names` para definir nomes personalizados para cada comando, vamos usar a maneira abreviada que é "-n".

```json
    "test": "npm run services:up && npm run wait-for-postgres && concurrently --n next,jest 'next dev' 'jest --runInBand'",
```

![alt text](class-images/class-29/image-1.png)

Agora que temos eles nomeados podemos esconder o que não nos interessa, como estamos trabalhando com testes, o que nos interessa é o jest, então podemos esconder o next dev., para isso usamos o parâmetro "--hide"

```json
    "test": "npm run services:up && npm run wait-for-postgres && concurrently --n next,jest --hide next 'next dev' 'jest --runInBand'",
```

![alt text](class-images/class-29/image-2.png)

Um outro ponto que esta incomodando é fato de sempre precisar pressionar o CRTL+C para finalizar o comando, para resolver isso usamos outro parametro que é o "--kill-others", que finaliza todos os comandos quando um deles finalizar. A versão mais curta dele é "-k"

```json
    "test": "npm run services:up && npm run wait-for-postgres && concurrently --n next,jest --hide next --kill-others 'next dev' 'jest --runInBand'",
```

![alt text](class-images/class-29/image-3.png)

Um ultimo ponto é que mesmo quando o comando de saída do jest é success (0), o concurrently retorna um comando de falha (1), precisamos definir qual o comando o concurrently deve considerar como sucesso, para isso usamos o parâmetro "--success", que tem a versão curta "-s". Nesse caso queremos que o concurrently considere como sucesso quando o jest finalizar com sucesso, ou seja, com o código 0.

```json
    "test": "npm run services:up && npm run wait-for-postgres && concurrently --n next,jest  --hide next --k --success command-jest 'next dev' 'jest --runInBand'",
```

![alt text](class-images/class-29/image-4.png)

OBS: O comando "echo $?" no terminal retorna o código de saída do último comando executado. Um código de saída 0 geralmente indica sucesso, enquanto qualquer outro valor indica algum tipo de erro ou falha.

## Estabilizar "npm test" (Orquestrador)

Vamos verificar nosso /status, confirmando que elçe esta de pé e retornando um json válido, dessa forma confirmamos que o servidor esta funcionando corretamente.

Vamos utilizar um módulo chamado "async-retrail", que recebe uma função callback que caso falhe, ele tenta executar novamente até um número máximo de tentativas ou até que a função seja executada com sucesso.
https://www.npmjs.com/package/async-retry

```bash
npm install  async-retry@1.3.3
```

Criamos um arquivo orchestrator.js em "tests/orchestrator.js" para utilizar retry e garantir que vai estar tudo funcionando corretamente.

```javascript
import retry from "async-retry";

async function waitForAllServices() {
  await waitForWebServer();

  async function waitForWebServer() {
    return retry(fechStatusPage);

    async function fechStatusPage() {
      // Precisamos colocar alguma coisa que possa estourar um erro, para que o async retry fique tentando novamente
      // Caso não ocorra erro ele vai entender que teve sucesso e continuar o script
      const response = await fetch("http://localhost:3000/api/v1/status");
      const responseBody = await response.json();
    }
  }
}

export default {
  waitForAllServices,
};
```

Agora somente importamos nosso orchestrator nos testes utilizando o hook beforeAll

```javascript
import orchestrator from "tests/orchestrator.js";

beforeAll(async () => {
  await orchestrator.waitForAllServices();
});
```

Mas ainda pode ocorrer de a máquina onde esses testes forem rodar ser muito lenta e acabar quebrando os testes, pois o jest por padrão espera somente 5 segundos para executar seus comandos, agora se o nosso servidor por algum motivo demorar mais que 5 segundo pra subir, o nosso hook beforeAll vai quebrar e o teste vai teste vai retornar um erro de timeout.

Podemos resolver esse problema adicionando mais tempo para o jest agurdar, fazemos isso no jest.config.js

```javascript
const jestConfig = createJestConfig({
  moduleDirectories: ["node_modules", "<rootDir>"],
  testEnvironment: "node",
  testTimeout: 60000,
});
```

# Aula 30

## rafaelcorrea-dev: "maxTimeout"

O jest por padrão utiliza um fator 2 para os retry (tentativas) do async-retry, ou seja, se a primeira tentativa falhar, ele espera 100ms para tentar novamente, se a segunda tentativa falhar, ele espera 200ms para tentar novamente, se a terceira tentativa falhar, ele espera 400ms para tentar novamente, e assim por diante.

Como isso pode atrasar e muito em determinados casos, podemos definir um tempo máximo de espera entre as tentativas, para isso utilizamos o parâmetro "maxTimeout" do async-retry.

## Configurar "Continuous Integration" (com GitHub Actions)

O que vamos fazer aqui é o comando "npm test" rodar em uma máqui remota, sempre zerada.

Pra isso vamos utilizar o GutHubActions:
https://github.com/features/actions?locale=pt-BR

O Fluxo é o seguinte:

- Tudo começa com um Workflow (fluxo de trabalho)
- Dentro desse fluxo de trabalho definimos qual será o evento que esse workflow vai ficar esperando acontecer (observando)
- Quando ocorrer esse evento será executado um Job (tarefa) que precisa ser executado
- Precisamos definir qual vai ser o SO que irá rodar (RUNNER) as coisas
- Agora definido qual o SO podemos colocar qual será os comandos que irão rodar dentro dele (step-by-step)
  ![alt text](class-images/class-30/image.png)

Pra iniciar criamos o arquivo que vai ser nosso workflow de testes:
`.github/workflows/tests.yml`

podemos achar extensões para as Actions que ficam em:
https://github.com/marketplace

Aqui podemos achar por exemplo a extensão que estamos usando de `checkout`

Vamos utilizar o comando `npm ci` que é mais indicado para ambientes de CI/CD, pois ele instala as dependências exatamente como estão definidas no package-lock.json, garantindo que o ambiente de desenvolvimento e o ambiente de CI/CD sejam idênticos.
Enquanto o `npm install` pode atualizar o package-lock.json se houver diferenças, o `npm ci` sempre vai ser a mesma coisa
OBS: esta ai a importancia de sempre commitar o package-lock.json no repositório.
![alt text](class-images/class-30/image-1.png)

O arquivo `tests.yml` ficou assim:

```yaml
# Definir o nome do fluxo
name: Automated Tests

# Definir qual evento ele deve ficar observando
on: pull_request

# Quando o Pull Request acontecer, precisar rodar os jobs
jobs:
  jest:
    name: Jest Ubuntu
    # Vamos definir aqui também com o SO que vai rodar as coisas no runs-on
    runs-on: ubuntu-latest
    # Agora vamos definir os passos que o job vai executar
    steps:
      # Aqui usamos extensões (Actions) prontas do GitHub
      - uses: actions/checkout@v4 # Puxa o código para dentro do ambiente

      - uses: actions/setup-node@v4 # Configura o Node.js
        with:
          node-version: "lts/hydrogen" # Versão do Node.js

      # Aqui vamos executar comandos dentro do ambiente de forma manual
      - run: npm ci
      - run: npm test
```

Dessa forma já vai funcionar sempre fizer um Pull Request lá no github, porém ainda temos um problema, porque mesmo que um teste falhe, ainda sim é possivel fazer o merge com a main.

Para impedir isso é preciso fazer algumas configurações no github.

- Vamos em Settings e Branchs
  ![alt text](class-images/class-30/image-2.png)

Ai é so adicionar as regras.
![alt text](class-images/class-30/image-3.png)

# Aula 31

## Lint Code: Style

Existem os Pré Formatadores e os Pós Formatadores.

Os `Pré Formatadores` são aqueles que formatam o código enquanto estamos escrevendo, como por exemplo o `Prettier`, que é um formatador de código que formata o código automaticamente de acordo com as regras definidas.

Os `Pós Formatadores` são aqueles que formatam o código depois que salva o arquivo, como por exemplo o `ESLint`, que é um linter que verifica o código em busca de problemas de estilo e boas práticas, e pode ser configurado para corrigir automaticamente alguns desses problemas.

Os `Pós Formatadores` podedm ser divididos em duas categorias de especialização: Especializazdos em `Estilização`do código e especializado em `Qualidade`do código.
![alt text](class-images/class-31/image.png)

Vamos criar um novo arquivo para o workflow de lint code:
`.github/workflows/linting.yml`

```yaml
name: Linting

on: pull_request

jobs:
  prettier:
    name: Prettier
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4 # Puxa o código para dentro do ambiente

      - uses: actions/setup-node@v4 # Configura o Node.js
        with:
          node-version: "lts/hydrogen" # Versão do Node.js

      - run: npm ci
      - run: npm run lint:prettier:check
```

Lá no github, precisamos adicioanr a regra de não permitir fazer o merge enquanto a verificação do prettier não estiver passando.
![alt text](class-images/class-31/image-1.png)

## Lint Code: Quality

Agora vamos trazer o ESLint para o projeto, para ele ajudar a manter algumas regras básicas de qualidade de código. Depois colocar isso no CI.
https://eslint.org/


Documentação para instalar o ESLint direto pelo NextJs, já com todas as recomendações prontas:
https://nextjs.org/docs/app/api-reference/config/eslint

A primeira coisa que fizemos foi criar um novo script no package.json para rodar o eslint:

```json
"scripts": {
  "lint:eslint:check": "next lint",
}
```

Quando rodei esse comando no terminal já me deu a opção de instalação.
![alt text](class-images/class-31/image-2.png)

Para que o ESLint consiga verificar todos os arquivos do projeto, podemos utilizar o proprio comando "eslint" ao invés da abstração do next "next lint"

```json
"scripts": {
  "lint:eslint:check": "eslint .",
}
```
![alt text](class-images/class-31/image-3.png)

Agora precisamos fazer o ESLint entender como o Jest funciona, para que ele pare de reclarmar dos erross relacionados ao Jest, para isso instalamos o plugin do Jest para o ESLint:
https://www.npmjs.com/package/eslint-plugin-jest

```bash
npm i -D eslint-plugin-jest@28.6.0
```

Agora no .eslintrc.json adicionamos o plugin do jest e a configuração recomendada dele:
{
  "extends": [
    "plugin:jest/recommended", -> essa é a recomendação do plugin do jest para o eslint
    "eslint:recommended",
    "next/core-web-vitals"
  ]
}

Precisamos agora de um outro plugin para que as regras do prettier não conflitem com as regras do eslint, para isso instalamos o eslint-config-prettier:
https://www.npmjs.com/package/eslint-config-prettier

Depois fazemos a instalação:

```bash
npm i -D eslint-config-prettier@9.1.0
```

Por fim basta colocar o "prettier" no final do array de extends do .eslintrc.json, para que as regras do prettier sobrescrevam as regras do eslint.

```json
{
  "extends": [
    "plugin:jest/recommended",
    "eslint:recommended",
    "next/core-web-vitals",
    "prettier"
  ]
}
```

Para funcionar no CI, adicionamos essa nova informação no arquivo `.github/workflows/linting.yml`

```yaml
name: Linting

on: pull_request

jobs:
  prettier:
    name: Prettier
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4 # Puxa o código para dentro do ambiente

      - uses: actions/setup-node@v4 # Configura o Node.js
        with:
          node-version: "lts/hydrogen" # Versão do Node.js

      - run: npm ci
      - run: npm run lint:prettier:check
  eslint:
    name: Eslint
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4 # Puxa o código para dentro do ambiente

      - uses: actions/setup-node@v4 # Configura o Node.js
        with:
          node-version: "lts/hydrogen" # Versão do Node.js

      - run: npm ci
      - run: npm run lint:eslint:check

```

Nas `rulesets` do GitHub adicionamos essa nova regra do EsLint
![alt text](class-images/class-31/image-4.png)