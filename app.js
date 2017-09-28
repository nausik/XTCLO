const express = require('express'),
    path = require('path');

let app = express(),
    port = process.env.PORT || "3544";

app.use(express.static('public'));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../public', 'index.html'));
});

app.listen(port, function() {
    let host = this.address().address,
        port = this.address().port;

    console.log('Web server started at http://%s:%s', host, port);
});
