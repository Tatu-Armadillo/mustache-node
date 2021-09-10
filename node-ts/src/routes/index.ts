import { Router, Request, Response } from "express";

const router = Router();
router.get('/', (req: Request, res: Response) => {
    let age: number = 20
    res.render('home', {
        name: 'Dedo',
        age: age,
        showBobo: (age > 50),
        products:[
            {title: 'Producto X', price: 10},
            {title: 'Producto Y', price: 15},
            {title: 'Producto Z', price: 20}
        ],
        frasesDoDia: [
            'Olha o corno',
            'kkkkkkkkkkkk'
        ]
    });
});

router.get('/contato', (req: Request, res: Response) => {
    res.send('Formulario de Contato');
});

router.get('/sobre', (req: Request, res: Response) => {
    res.send('Pagina da empresa');
});

export default router;

