const express = require('express');
const app = express();
app.use(express.json());

app.post('/register', (req, res) => {
  res.status(201).send("User registered");
});

app.post('/login', (req, res) => {
  res.status(200).send("User logged in");
});

app.get('/profile', (req, res) => {
  res.status(200).send("User profile");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`User Service running on port ${PORT}`));
