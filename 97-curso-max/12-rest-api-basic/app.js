const path = require('path');

const express = require('express');
const mongoose = require('mongoose');

const multer = require('multer');
const { v4: uuidv4 } = require('uuid');

const feedRoutes = require('./routes/feed');
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');

const app = express();

const fileStorage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'images'),
  filename: (req, file, cb) => cb(null, `${uuidv4()}-${file.originalname}`),
});

const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === 'image/png' ||
    file.mimetype === 'image/jpg' ||
    file.mimetype === 'image/jpeg'
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

app.use(express.json());
app.use(
  multer({ storage: fileStorage, fileFilter: fileFilter }).single('image')
);
app.use('/images', express.static(path.join(__dirname, 'images')));

app.use((req, res, next) => {
  // Para añadir varios dominios se deben separar por comas
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Methods',
    // OPTIONS no es necesario añadirlo
    'OPTIONS, GET, POST, PUT, PATCH, DELETE'
  );
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  next();
});

app.use('/feed', feedRoutes);
app.use('/auth', authRoutes);
app.use('/user', userRoutes);

app.use((error, req, res, next) => {
  console.log(error);

  const status = error.statusCode || 500;
  const message = error.message;
  const data = error.data;

  res.status(status).json({ message, data });
});

mongoose
  .connect(
    'mongodb+srv://node:dqoOedTlawu9fJI4@cluster0.a2uzr.mongodb.net/messages?retryWrites=true&w=majority',
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => {
    const server = app.listen(8080);

    const io = require('socket.io')(server);
    io.in('connetion', (socket) => console.log('Client connected'));
  })
  .catch((err) => console.log(err));
