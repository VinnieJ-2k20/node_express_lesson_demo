import { User } from "../models/User";

function getAll() {
  return User.findAll();
}

function findById(userId: number) {
  return User.findByPk(userId);
}

function create(name: string, carColorId: number) {
  return User.create({
    name,
    carColorId,
  });
}

export const usersService = {
  getAll,
  findById,
  create,
}