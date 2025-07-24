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
app.use(bodyParser.json());

// ✅ Match full Vercel-exposed route paths
app.options('/api/check', cors(corsOptions));
app.options('/api/claim', cors(corsOptions));

// ✅ Still mount your routes as /
app.use('/', scratchRoutes);

module.exports = app;
