import { Request, Response } from "express";

import { Product } from '../models/Product';

export const home = (req: Request, res: Response) => {
    let age: number = 20
    let list = Product.getAll();
    let expensiveList = Product.getFromPriceAfter(12);
    res.render('pages/home', {
        name: 'Dedo',
        age: age,
        showBobo: (age > 50),
        products: list,
        expensive: expensiveList,
        frasesDoDia: []
    });
};
