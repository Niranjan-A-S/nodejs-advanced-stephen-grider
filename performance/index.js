const cluster = require('node:cluster');
const os = require('node:os');

//Checking if the cluster is in master mode
if (cluster.isMaster) {
    //run the index.js file again in child mode
    let index = 0;
    while (index++ < os.availableParallelism()) {
        cluster.fork();
    }
} else {
    const express = require('express');
    app = express();
    function doWork(duration) {
        const start = Date.now();
        while (Date.now() - start < duration) { }
    }

    app.get('/', (req, res) => {
        doWork(5000);
        res.send('Hi there')
    })

    app.get('/fast', (req, res) => {
        return res.send('This is a fast response');
    });

    app.listen(3000, () => {
        console.log('Server started running on port 3000.')
    });

}
