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
