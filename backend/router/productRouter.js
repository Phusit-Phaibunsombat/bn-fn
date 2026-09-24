import { Router } from "express";
import { createProduct, getAllProduct, getProductById, updateProduct} from "../controller/productController.js";
import Product from "../model/productModel.js";

const productRouter = Router();

productRouter.post("/", createProduct);
productRouter.get("/", getAllProduct);
productRouter.get("/", getProductById);
productRouter.put("/", updateProduct);


export default productRouter;
