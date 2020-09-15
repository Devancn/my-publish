const fs = require('fs');
const http = require('http');
const querystring = require('querystring');

let filename = "./cat.jpg";

fs.stat(filename, (err, stat) => {
    const options = {
        host: 'localhost',
        port: 8081,
        path: '/?filename=cat.jpg',
        method: 'POST',
        headers: {
            'Content-Type': 'application/octet-stream',
            'Content-Length': stat.size
        }
    }
    const req = http.request(options, res => {
        console.log(`STATUS: ${res.statusCode}`);
        /*res.setEncoding('utf-8');
        res.on('data', chunk => {
            console.log(chunk)
        })
        res.on('end', () => {
            console.log('No more data in response')
        })*/
    });

    req.on('error', e => {
        console.log(e.message)
    })

    let readStream = fs.createReadStream(filename);

    readStream.pipe(req)
    readStream.on('end', () => {
        req.end();
    })
    // req.write(postData);
    // req.end();
})



