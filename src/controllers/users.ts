import { Request, Response } from 'express';
import { usersService } from '../services/users';
import { colorsService } from '../services/colors';

const getAll = async (req: Request, res: Response) => {
  const users = await usersService.getAll();
  res.send(users);
}

const getById = async (req: Request, res: Response) => {
  const { userId } = req.params;

  const foundUser = await usersService.findById(+userId);

  if (!foundUser) {
    res.sendStatus(404);
    return;
  }

  res.send(foundUser);
}

const create = async (req: Request, res: Response) => {
  const { name, carColorId } = req.body;

  const nameIsValid = Boolean(name) && typeof name === 'string';

  const carColorIdIsValid = (
      await colorsService.findById(carColorId)
        && typeof carColorId === 'number'
    );

  if (!nameIsValid || !carColorIdIsValid) {
    res.sendStatus(422);

    return;
  }

  const newUser = await usersService.create(name, carColorId);

  res.status(201);
  res.send(newUser);
}

export const usersController = {
  getAll,
  getById,
  create
}
