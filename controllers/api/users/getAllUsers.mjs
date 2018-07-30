import Store from '../../../Store';


export default async function getAllUsers(req, res, next) {
  res.json(await Store.storage.getUsers());
}
