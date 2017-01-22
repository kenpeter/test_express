// https://stackoverflow.com/questions/33695893/express-postman-req-body-is-empty
var express = require('express'),
    bodyParser = require('body-parser'),
    app = express();

// https://stackoverflow.com/questions/24330014/bodyparser-is-deprecated-express-4
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());

app.set('port', (process.env.PORT || 5000));

app.listen(app.get('port'), function() {
    console.log("Node app is running at localhost:" + app.get('port'))
});

// https://stackoverflow.com/questions/24543847/req-body-empty-on-posts
app.post('/test', function(req, res) {
    //var Keywords = req.body.Keywords;
    console.log("Yoooooo");
    console.log(req.headers);
    console.log(req.body);
    res.status(200).send("yay");
});
