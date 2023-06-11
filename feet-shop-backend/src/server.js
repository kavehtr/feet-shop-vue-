import express from 'express';
import { cartProducts, products} from './temp-data';

const app = express();


app.get('/ProductPage', (req, res) => {
    res.json(products);
});

app.get('/ShoppingCartPage', (req, res) => {
    res.json(cartProducts);
})

app.get('/ProductPage/:ProductId', (req, res) => {
    const productId = req.params.ProductId;
    const product = products.find(product => product.id === productId);
    res.json(product);
});

app.post('/shoppingCartList', (req, res) => {
    
})

app.listen(8000, () => {
    console.log('Server Is Listening on Port 8000');
});