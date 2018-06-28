import Store from '../../../Store';


export default async function getProduct(req, res, next) {
  res.json(await Store.storage.getProductById(req.params.id));
}
