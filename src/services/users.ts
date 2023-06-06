const users = [
  { id: 1, name: 'Paul Mccartney', carColorId: 5 },
  { id: 2, name: 'John Lennon', carColorId: 4 },
  { id: 3, name: 'George Harrison', carColorId: 2 },
  { id: 4, name: 'Ringo Starr', carColorId: 2 },
];

function getAll() {
  return users;
}

function findById(userId: number) {
  return users.find(({ id }) => id === userId) || null;
}

function create(name: string, carColorId: number) {
  const newUserId = Math.max(...users.map(({ id }) => id)) + 1;

  const newUser = {
    id: newUserId,
    name,
    carColorId,
  };

  users.push(newUser);

  return newUser;
}

export const usersService = {
  getAll,
  findById,
  create,
}