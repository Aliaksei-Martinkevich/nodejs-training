import express from 'express';

import Store from '../../Store';
import { Product } from '../../models/Product';


/**
 * @type {express.RequestHandler}
 */
export default function postProducts(req, res, next) {
  const { name, reviews } = req.body;
  const product = new Product(name, reviews);
  Store.storage.addProduct(product);
  res.json(product);
}
