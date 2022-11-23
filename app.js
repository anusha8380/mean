const express=require("express");
const morgan = require("morgan");

const app=express();
require('dotenv/config');

//Middle ware
app.use(express.json()); 
app.use(morgan('tiny'));

const mongoose=require('mongoose');

const api = process.env.API_URL; 


//Routes
const productRoutes = require('./routes/product');
const categoriesRoutes = require('./routes/categories');
const usersRoutes = require('./routes/users');
const ordersRoutes = require('./routes/orders');


app.use(`${api}/categories`, categoriesRoutes);
app.use(`${api}/products`, productRoutes);
app.use(`${api}/users`, usersRoutes);
app.use(`${api}/orders`, ordersRoutes);

//DataBase
mongoose.connect(process.env.CONNECTION_STRING,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    dbName:'E-shop-database'
})
   .then(()=>{
    console.log('connected...',api);
   }).catch((err)=>{
    console.log(err);
   });

app.listen(3000, ()=>{
    console.log('server listening to port 3000!!');
})