import express from 'express';
import { getAllProducts } from '../src/controllers/product.controller';

const router = express.Router();

router.route("/products").get(getAllProducts)

export {router};