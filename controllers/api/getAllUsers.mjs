import Store from '../../Store';


export default function getAllUsers(req, res, next) {
  res.json(Store.storage.getUsers());
}
