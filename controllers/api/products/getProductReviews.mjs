import Store from '../../../Store';


export default function getProductReviews(req, res, next) {
  res.json(Store.storage.getProductById(req.params.id).reviews);
}
