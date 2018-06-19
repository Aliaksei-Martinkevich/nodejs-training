import Store from '../../../Store';

import UsersService from '../../../services/UsersService';

export default function getAllUsers(req, res, next) {
  res.json(Store.storage.getUsers());
}
