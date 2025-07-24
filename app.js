const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const scratchRoutes = require('./routes/scratchRoutes');

const app = express();

const corsOptions = {
  origin: 'https://manharshoppingmall.vercel.app',
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type'],
  credentials: true
};

app.use(cors(corsOptions));
app.options('*', cors(corsOptions));

app.use('/scratch', scratchRoutes); 
module.exports = app;
