import Store from '../../../Store';


export default function getProduct(req, res, next) {
  res.json(Store.storage.getProductById(req.params.id));
}
