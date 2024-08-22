import express from "express";
import { addNewProd, viewAll } from "../controllers/product-controller.js";
export const productRoutes=express.Router();

productRoutes.get('/view-products',viewAll);

productRoutes.post('/add-new-product',addNewProd);
// routes.put('/update-products',(request,response)=>{
//     response.send('Products');
// })
// routes.get('/search-product',(request,response)=>{
//     response.send('Products');
// })