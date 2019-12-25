var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;


// ************* Before Index.js before Express-generator ****************
// const express = require('express')
// const app = express()
// const port = 3000

// app.get('/', (req, res) => res.send('Hello World!'))










// app.listen(port, () => console.log(`index.js is running on Port: ${port}`))