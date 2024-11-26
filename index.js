const express = require('express');
const path = require('path');
const cokkieParser = require('cookie-parser');
const { connectMongo } = require('./connection');
const { validateUUid, checkAuth } = require('./middlewares/auth');

const urlRouter = require('./routes/url');
const homeRouter = require('./routes/homeRouter');
const userRouter = require('./routes/user');

const app = express();
const PORT = 3000;

app.use(express.urlencoded({extended : true}));
app.use(express.json());
app.use(cokkieParser());

app.set('view engine' , 'ejs');
app.set('views', path.resolve('./views'));

connectMongo('mongodb://localhost:27017/urlShortner');

app.use('/', checkAuth,homeRouter);
app.use('/url', validateUUid, urlRouter);
app.use('/user', userRouter);

app.listen(PORT, () => {
  console.log(`Server is running live on http://localhost:${PORT}/`);
})