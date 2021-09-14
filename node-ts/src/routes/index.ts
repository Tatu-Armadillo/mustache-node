import { Router, Request, Response } from "express";

import * as HomeController from '../controllers/home.controller'
import * as InfoController from '../controllers/info.controller'
import * as UserController from '../controllers/user.controller'

const router = Router();

router.get('/', HomeController.home);
router.get('/contato', InfoController.contato);
router.get('/sobre', InfoController.sobre);

router.get('/nome', UserController.nome);

router.get('/idade', UserController.idadeForm);

router.post('/idade-resultado', UserController.idadeAction);

export default router;
