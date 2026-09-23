import { Router } from "express";
import { createProduct } from "../controller/productController.js";
import Product from "../model/productModel.js";

const productRouter = Router();

productRouter.post("/", createProduct);

export default productRouter;