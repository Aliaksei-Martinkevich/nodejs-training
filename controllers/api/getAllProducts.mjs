import Store from '../../Store';


export default function getAllProducts(req, res, next) {
  res.json(Store.storage.getProducts());
}
