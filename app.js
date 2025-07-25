const express = require('express');
const cors = require('cors');
const scratchRoutes = require('./routes/scratchRoutes');

const app = express();

const allowedOrigins = [
  'https://manharshoppingmall.vercel.app',
  'https://manhar-admin.vercel.app'
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST'],
  credentials: true
}));

app.use(express.json());
app.use('/api', scratchRoutes);

module.exports = app;
