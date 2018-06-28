import Store from '../../../Store';

import UsersService from '../../../services/UsersService';

export default async function getAllUsers(req, res, next) {
  res.json(await Store.storage.getUsers());
}
