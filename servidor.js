
import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PORTA = 8000;

const tipos = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8"
};

const servidor = http.createServer(async (req, res) => {
  // Conexão com a inteligência artificial
  if (req.method === "POST" && req.url === "/api/chat") {
    try {
      let corpo = "";

      for await (const parte of req) {
        corpo += parte;
      }

      const dados = JSON.parse(corpo);

      const resposta = await fetch("http://localhost:11434/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          model: "gemma3:4b",
          messages: [
            {
              role: "system",
              content: "Você é o Citizen Assist AI, assistente especializado em eficiência energética hospitalar. Responda em português, de forma clara e educativa. Use os dados fornecidos pelo usuário quando disponíveis."
            },
            {
              role: "user",
              content: dados.pergunta
            }
          ],
          stream: false
        })
      });

      if (!resposta.ok) {
        throw new Error("Erro ao consultar o Ollama.");
      }

      const resultado = await resposta.json();

      res.writeHead(200, {
        "Content-Type": "application/json; charset=utf-8"
      });

      res.end(JSON.stringify({
        resposta: resultado.message.content
      }));

    } catch (erro) {
      res.writeHead(500, {
        "Content-Type": "application/json; charset=utf-8"
      });

      res.end(JSON.stringify({
        erro: "Não foi possível consultar a inteligência artificial."
      }));
    }

    return;
  }

  // Exibição dos arquivos do site
  const url = new URL(req.url, `http://localhost:${PORTA}`);
  let caminho = decodeURIComponent(url.pathname);

  if (caminho === "/" || caminho === "/chatbot/") {
  caminho = "/chatbot/index.html";
}

  const arquivo = path.resolve(__dirname, "." + caminho);

  if (!arquivo.startsWith(__dirname + path.sep)) {
    res.writeHead(403);
    res.end("Acesso negado");
    return;
  }

  fs.readFile(arquivo, (erro, conteudo) => {
    if (erro) {
      res.writeHead(404);
      res.end("Arquivo não encontrado");
      return;
    }

    const tipo = tipos[path.extname(arquivo)] || "application/octet-stream";

    res.writeHead(200, {
      "Content-Type": tipo
    });

    res.end(conteudo);
  });
});

servidor.listen(PORTA, () => {
  console.log(`Servidor iniciado em http://localhost:${PORTA}/chatbot/`);
});
