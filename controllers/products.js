

const Product = require('../models/productModel');



//Add Product
async function addProduct(){
    const supplier = new Supplier({supplierName: 'Venom', supplierCatalog: 'gloves'})
    const product = new Product({productName: 'Glove', productPrice: 100,  productCategory: 'gloves', productImage: 'https://asia.venum.com/media/catalog/product/cache/3d6373dfdbd8bf7042581a31874a0831/9/d/9d277721a4670d9f1293247493ee8b5837b8c88f_BG_RAZOR_BLACK_GOLD_01.jpg', productSupplier: 'gloves'})
    await product.save()
    console.log(product)
  }


//Get All Products
async function getAllProducts(){
    
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
}

//Get Product
async function getProduct(productName){
    return new Product();
}

//Edit Product
async function editProduct(productName, product = new Product){
    return p
}
//Delet Product
async function deletProduct(){

}
  