const https = require('https');

const start = Date.now();

function makeNetworkRequest() {
    https
        .request('https://www.google.com', res => {
            res.on('data', () => { });
            res.on('end', () => console.log(Date.now() - start));
        })
        .end()
};

makeNetworkRequest();
makeNetworkRequest();
makeNetworkRequest();
makeNetworkRequest();
makeNetworkRequest();
makeNetworkRequest();
//here all 6 tasks completed simultaneously
//Here the OS does the real HTTP request the task is getting allocated to the OS through the libuv
//There has been signalling done to receive the response in the libuv and ..
//Libuv instead delegate the work to the OS kernel and whenever possible, it will poll the kernel and see if the request has completed
