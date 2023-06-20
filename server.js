const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/productModel');

const app = express();

mongoose.connect('mongodb+srv://itairahamim1:Itai2311@cluster0.mwnmbd9.mongodb.net/');

app.get('/', (req, res) => {
  res.send('Successful response.');
});

async function getAllProducts() {
  try {
    const products = await Product.find();
    return products;
  } catch (error) {
    console.error('Error retrieving products:', error);
    throw error;
  }
}

app.listen(3000, async () => {
  try {
    await getAllProducts().then(products => {
      console.log('All products:', products);
    });
    console.log('Boxing on port 3000.');
  } catch (error) {
    console.error('Error:', error);
  }
});












/*const express = require('express');
const { default: mongoose } = require('mongoose');
const Product = require('./models/productModel');
const Supplier = require('./models/supplierModel');
require('./controllers/products');

const app = express();






app.get('/', (req, res) => {
  res.send('Successful response.');
});


mongoose.connect('mongodb+srv://itairahamim1:Itai2311@cluster0.mwnmbd9.mongodb.net/');
run();
async function run(){
  const supplier = new Supplier({supplierName: 'Venom', supplierCatalog: 'gloves'})
  const product = new Product({productName: 'Glove', productPrice: 100,  productCategory: 'gloves', productImage: 'https://asia.venum.com/media/catalog/product/cache/3d6373dfdbd8bf7042581a31874a0831/9/d/9d277721a4670d9f1293247493ee8b5837b8c88f_BG_RAZOR_BLACK_GOLD_01.jpg', productSupplier: 'gloves'})
  await product.save()
  console.log(product)
}

const products = new Array(Product);




getAllProducts()
async function getAllProducts() {
  try {
    let products;
    products = await Product.find();
    return products;
  } catch (error) {
    console.error('Error retrieving products:', error);
    throw error;
  } 
}
console.log(getAllProducts());
app.listen(3000, () => console.log('Boxing on port 3000.'));*/ 