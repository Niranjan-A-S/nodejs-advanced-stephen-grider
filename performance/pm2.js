
const express = require('express');
const crypto = require("node:crypto");

app = express();

app.get('/', (req, res) => {
    crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
        res.send('Hi there');
    });
})

app.get('/fast', (req, res) => {
    return res.send('This was fast !');
});

app.listen(3000, () => {
    console.log('Server started running on port 3000.')
});

