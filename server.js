const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const authRoutes = require('./routes/auth');
const protectedRoutes = require('./routes/protected');

require('dotenv').config();

const app = express();

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(express.json());
app.use(session({
  secret: 'your_secret_key',
  resave: false,
  saveUninitialized: false
}));

app.use('/auth', authRoutes);
app.use('/protected', protectedRoutes);

app.listen(3000, () => console.log('Server running on http://localhost:3000'));
