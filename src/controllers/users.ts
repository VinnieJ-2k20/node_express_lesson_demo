import { Request, Response } from 'express';
import { usersService } from '../services/users';
import { colorsService } from '../services/colors';

const getAll = (req: Request, res: Response) => {
  const users = usersService.getAll();

  res.send(users);
}

const getById = (req: Request, res: Response) => {
  const { userId } = req.params;

  const foundUser = usersService.findById(+userId);

  if (!foundUser) {
    res.sendStatus(404);
    return;
  }

  res.send(foundUser);
}

const create = (req: Request, res: Response) => {
  const { name, carColorId } = req.body;

  const nameIsValid = Boolean(name) && typeof name === 'string';

  const carColorIdIsValid = (
      colorsService.findById(carColorId)
        && typeof carColorId === 'number'
    );

  if (!nameIsValid || !carColorIdIsValid) {
    res.sendStatus(422);

    return;
  }

  const newUser = usersService.create(name, carColorId);

  res.status(201);
  res.send(newUser);
}

export const usersController = {
  getAll,
  getById,
  create
}
