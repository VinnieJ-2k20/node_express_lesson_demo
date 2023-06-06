import { Request, Response } from 'express';
import { colorsService } from '../services/colors';

const getAll = (req: Request, res: Response) => {
  const colors = colorsService.getAll();

  res.send(colors);
}

export const colorsController = {
  getAll,
}