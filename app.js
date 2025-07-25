// app.js
const express = require('express');
const cors = require('cors');
const scratchRoutes = require('./routes/scratchRoutes');

const app = express();

app.use(cors({
  origin: 'https://manharshoppingmall.vercel.app', // your frontend domain
  methods: ['GET', 'POST'],
  credentials: true
}));

app.use(express.json());
app.use('/api', scratchRoutes);

module.exports = app;
