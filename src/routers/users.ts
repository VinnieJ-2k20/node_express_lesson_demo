import express, { Router } from 'express';
import { usersController } from '../controllers/users';

export const usersRouter = Router();

usersRouter.get('/', usersController.getAll);
usersRouter.get('/:userId', usersController.getById);
usersRouter.post('/', express.json(), usersController.create);