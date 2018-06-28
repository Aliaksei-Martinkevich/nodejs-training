import Store from '../../../Store';


export default async function postProducts(req, res, next) {
  const { name, reviews } = req.body;
  res.json(await Store.storage.createProduct({ name, reviews }));
}
