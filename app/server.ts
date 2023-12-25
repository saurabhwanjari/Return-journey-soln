import express from 'express';
import bodyParser from 'body-parser';
import appMiddleware from './middleware/appMiddleware';
const app = express();

const hostname :string ='127.0.0.1';
const port:number =5000;

app.use(appMiddleware);

// In-memory data store
let products = [
  { id: 1, name: 'Product 1', price: 20 },
  { id: 2, name: 'Product 2', price: 30 },
  { id: 3, name: 'Product 3', price: 25 },
  { id: 4, name: 'Product 4', price: 12 }
];

app.use(bodyParser.json());

// GET /api/products
app.get('/api/products', (req, res) => {
  res.json(products);
});

// GET /api/products/:id
app.get('/api/products/:id', (req, res) => {
  const productId = parseInt(req.params.id);
  const product = products.find((p) => p.id === productId);

  if (!product) {
    res.status(404).json({ error: 'Product not found' });
    return;
  }

  res.json(product);
});

// POST /api/products
app.post('/api/products', (req, res) => {
  const newProduct = req.body;
  products.push(newProduct);
  res.status(201).json(newProduct);
});

// PUT /api/products/:id
app.put('/api/products/:id', (req, res) => {
  const productId = parseInt(req.params.id);
  const updatedProduct = req.body;
  const index = products.findIndex((p) => p.id === productId);

  if (index === -1) {
    res.status(404).json({ error: 'Product not found' });
    return;
  }

  products[index] = { ...products[index], ...updatedProduct };
  res.json(products[index]);
});

// DELETE /api/products/:id
app.delete('/api/products/:id', (req, res) => {
  const productId = parseInt(req.params.id);
  products = products.filter((p) => p.id !== productId);
  res.json({ message: 'Product deleted successfully' });
});

app.listen(port,hostname,()=>{
    console.log(`express server started at http://${hostname}:${port}`)
})
