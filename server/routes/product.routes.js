const ProductController = require('../controllers/product.controller');

module.exports = function(app){
    app.get('/api', ProductController.index);
    app.post('/api/product', ProductController.createProduct);
    app.get('/api/product', ProductController.getAllProducts);
    app.get('/api/product/:idd', ProductController.getProducts);
    app.put("/api/product/:product_id", ProductController.updateProduct)
    app.delete("/api/product/:id", ProductController.deleteProduct)
}