const express = require('express');
const app = express();
app.use(express.json());

app.post('/orders', (req, res) => {
  res.status(201).send("Order placed");
});

app.get('/orders/:id', (req, res) => {
  res.status(200).send(`Order details for ${req.params.id}`);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Order Service running on port ${PORT}`));
