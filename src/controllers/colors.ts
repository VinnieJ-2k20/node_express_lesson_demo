import { Request, Response } from 'express';
import { colorsService } from '../services/colors';

const getAll = async (req: Request, res: Response) => {
  const colors = await colorsService.getAll();

  res.send(colors);
}

export const colorsController = {
  getAll,
}