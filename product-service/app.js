const express = require('express');
const app = express();
app.use(express.json());

app.get('/products', (req, res) => {
  res.status(200).send("List of products");
});

app.get('/products/:id', (req, res) => {
  res.status(200).send(`Product details for ${req.params.id}`);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Product Service running on port ${PORT}`));
