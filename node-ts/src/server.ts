import express, { Request, Response } from 'express';
import path from 'path';
import mustache from 'mustache-express';
import mainRoutes from './routes/index';

const server = express();
const porta: number = 3000;

// Template engine com mustache
server.set('view engine', 'mustache');
server.set('views', path.join(__dirname, 'views')); // Paginas HTMLS
server.engine('mustache', mustache());

// Arquivos estaticos
server.use(express.static(path.join(__dirname, '../public')));

server.use('/', mainRoutes);
server.use((req: Request, res: Response) => {
    res.status(404).send("Not Found");
});

server.listen(porta);
console.log(`rodando na porta ${porta}`);
