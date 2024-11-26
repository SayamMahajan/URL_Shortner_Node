const express = require('express');
const path = require('path');
const urlRouter = require('./routes/url');
const homeRouter = require('./routes/homeRouter');
const URL = require('./models/url');
const { connectMongo } = require('./connection');

const app = express();
const PORT = 3000;
app.use(express.urlencoded({extended : true}));
app.use(express.json());

app.set('view engine' , 'ejs');
app.set('views', path.resolve('./views'));

connectMongo('mongodb://localhost:27017/urlShortner');

app.use('/url', urlRouter);
app.use('/', homeRouter)

app.get('/url/:shortid', async (req, res) => {
  const shortURL = req.params.shortid;
  const entry = await URL.findOneAndUpdate({
    shortURL,
  }, {
    $push : {
      urlAnalytics : {
        timestamp : Date.now(),
      },
    }
  });
  return res.redirect(entry.redirectedURL);
});

app.listen(PORT, () => {
  console.log(`Server is running live on http://localhost:${PORT}/`);
})