const fs = require('fs');
const http = require('http');
const archiver = require('archiver');
let packname = "package";

// fs.stat(filename, (err, stat) => {
const options = {
    host: 'localhost',
    port: 8081,
    path: `/?filename=${packname}.zip`,
    method: 'POST',
    headers: {
        'Content-Type': 'application/octet-stream'
    }
}

const archive = archiver('zip', {
    zlib: { level: 9 }
});

archive.directory(packname, false);


archive.finalize();



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

archive.pipe(req)

archive.on('end', () => {
    req.end();
})

/*let readStream = fs.createReadStream("./" + packname);

readStream.pipe(req)
readStream.on('end', () => {
    req.end();
})
*/
    // req.write(postData);
    // req.end();
// })



