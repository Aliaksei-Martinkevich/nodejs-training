import Store from '../../../Store';


export default async function getProductReviews(req, res, next) {
  res.json((await Store.storage.getProductById(req.params.id)).reviews);
}
