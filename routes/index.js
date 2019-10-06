const express = require('express');
router = express.Router();
BigCommerce = require('node-bigcommerce');
// BC API Setup
const bigCommerce = new BigCommerce({
  logLevel: 'info',
  clientId: process.env.CLIENT,
  accessToken: process.env.TOKEN,
  secret: process.env.SECRET,
  storeHash: process.env.HASH,
  responseType: 'json',
  headers: { 'Accept-Encoding': '*' }, // Override headers (Overriding the default encoding of GZipped is useful in development)
  apiVersion: 'v3' // Default is v2
});

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});
// define the home page route
router.get('/', function(req, res) {
  res.render('index', {
    data: s
  });
});

// BC LOGIC
bigCommerce.get('/wishlists').then(data => {
  s = JSON.stringify(data);
  console.log(s);
  var Arr = JSON.parse('[' + s + ']');
  let new_array = Arr.map(e => {
    try {
      console.log(e);
    } catch (err) {
      console.log(err);
    }
  });
});
module.exports = router;
