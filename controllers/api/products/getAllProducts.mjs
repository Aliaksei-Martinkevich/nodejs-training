import Store from '../../../Store';


export default async function getAllProducts(req, res, next) {
  res.json(await Store.storage.getProducts());
}
