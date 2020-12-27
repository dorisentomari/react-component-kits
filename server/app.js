const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const nunjucks = require('nunjucks');

const app = express();
const PORT = 3000;
const route = express.Router();

nunjucks.configure('views', {
  autoescape: true,
  express: app,
  watch: true
});

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Authorization,X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method')
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PATCH, PUT, DELETE')
  res.header('Allow', 'GET, POST, PATCH, OPTIONS, PUT, DELETE')
  if (req.method === 'OPTIONS') {
    return res.end();
  }
  next();
});
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.resolve(__dirname, 'static')));

route.get('/', (req, res) => {
  res.render('index.html');
});

app.use('/', route);

app.listen(PORT, err => {
  if (err) {
    console.log(err);
  } else {
    console.log(`server is running at http://localhost:${PORT}`);
  }
});

// cnpm i express @types/express body-parser @types/body-parser nunjucks -D
