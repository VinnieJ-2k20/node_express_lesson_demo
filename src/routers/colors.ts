import { Router } from 'express';
import { colorsController } from '../controllers/colors';

export const colorsRouter = Router();

colorsRouter.get('/', colorsController.getAll);
