import { Color } from "../models/Color";

function getAll() {
  return Color.findAll();
}

function findById(colorId: number) {
  return Color.findByPk(colorId);
}

export const colorsService = {
  getAll,
  findById,
}
