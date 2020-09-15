const http = require('http');
const querystring = require('querystring');

const postData = querystring.stringify({
    content: 'Hello World! 123'
})

const options = {
    host: 'localhost',
    port: 8081,
    path: '/?filename=x.html',
    method: 'POST',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': Buffer.byteLength(postData)
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
req.write(postData);
req.end();