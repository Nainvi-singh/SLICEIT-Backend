import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { createConnection } from './shared/db/connection.js';
import {productRoutes} from './modules/products/routes/product-route.js'
const app= express();
dotenv.config();
app.use(cors());
app.use(express.json());
app.use('/',productRoutes);

const promise=createConnection();
promise.then((conInfo)=>{
    console.log('DB connection Established');
    app.listen(process.env.PORT||4444,err=>{
        if (err) {
            console.log('sever Crash',err);
        }
        else{
            console.log('serve up and Running');
        }
    })
}).catch(err=>{
    console.log("Application Can't up");
})

