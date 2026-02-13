import express from "express";
import mainRouter from "./routes/mainRouter.js";

const server = express();
const port = 3000;

server.use(express.json());
server.use(mainRouter);
server.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
