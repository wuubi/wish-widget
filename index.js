require('dotenv').config();

const express = require('express'),
  router = express.Router(),
  exphbs = require('express-handlebars');

// Routes
const index = require('./routes/index');

// Handlebars Setup
(app = express()),
  (hbs = exphbs.create({
    /* config */
  }));
// Express Setup
const server = app.listen(process.env.PORT, () => {
  console.log('Express listening at ', server.address().port);
});

// View Setup
app.engine(
  '.hbs',
  exphbs({
    extname: '.hbs',
    helpers: {
      toJSON: function(object) {
        return JSON.stringify(object);
      }
    }
  })
);

app.set('view engine', '.hbs');
app.set('views', __dirname + '/views');
app.use('/', index);
