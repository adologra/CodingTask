var express    = require('express'),
    path       = require('path'),
    app        = express(), // call express
    bodyParser = require('body-parser'),
    port,
    router;

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.use('/app', express.static(path.join(__dirname, 'dist/')));

port = 3100;

router = express.Router();

router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '/dist/index.html'));

});

app.use('/app', router);

module.exports = app;

app.listen(port);
console.log('Start project ' + port);