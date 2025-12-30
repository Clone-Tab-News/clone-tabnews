import retry from "async-retry";

async function waitForAllServices() {
  await waitForWebServer();

  async function waitForWebServer() {
    return retry(fechStatusPage, {
      retries: 100,
      maxTimeout: 1000,
    });

    async function fechStatusPage() {
      // Precisamos colocar alguma coisa que possa estourar um erro, para que o async retry fique tentando novamente
      // Caso não ocorra erro ele vai entender que teve sucesso e continuar o script
      const response = await fetch("http://localhost:3000/api/v1/status");

      if (!response.ok) {
        throw new Error("Web server is not ready yet");
      }
    }
  }
}

const orchestrator = { waitForAllServices };
export default orchestrator;
