import Store from '../../../Store';
import { Product } from '../../../models/Product';


export default function postProducts(req, res, next) {
  const { name, reviews } = req.body;
  const product = new Product({ name, reviews });
  Store.storage.addProduct(product);
  res.json(product);
}
