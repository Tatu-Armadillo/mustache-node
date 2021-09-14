import express, { Request, Response } from 'express';
import path from 'path';
import mustache from 'mustache-express';
import dotenv from 'dotenv';
import mainRoutes from './routes/index';

dotenv.config();

const server = express();
// Template engine com mustache
server.set('view engine', 'mustache');
server.set('views', path.join(__dirname, 'views'));
server.engine('mustache', mustache());
// Arquivos estaticos
server.use(express.static(path.join(__dirname, '../public')));

server.use(express.urlencoded({extended: true})); // detalhes dos dados enviados

server.use('/', mainRoutes);
server.use((req: Request, res: Response) => {
    res.status(404).send("Not Found");
});

server.listen(process.env.PORT);
console.log(`rodando na porta ${process.env.PORT}`);
