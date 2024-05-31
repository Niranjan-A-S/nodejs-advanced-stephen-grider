const express = require('express');

app = express();

app.get('/', (req, res) => {
    res.send('Hi there')
})

app.listen(3000, () => {
    console.log('Server started running on port 3000.')
}) 