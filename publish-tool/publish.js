const fs = require('fs');
const http = require('http');
const archiver = require('archiver');
const child_process = require('child_process');
const path = require('path');
let packname = "dist";
fs.readdir(path.resolve(packname), (err, file) => {
    console.log(err)
    console.log(file)
})

const redirect_uri = encodeURIComponent(`http://104.128.90.141:8081/auth`)
child_process.exec(`start https://github.com/login/oauth/authorize?client_id=Iv1.7dcb69595c80f31f&redirect_uri=${redirect_uri}&scope=read%3Auser&state=123abc`)
const server = http.createServer((request, res) => {
    console.log(request.url)
    if (request.url === "/favicon.ico") {
        res.writeHead(404, { 'Content-Type': 'text/plain' })
        res.end('not found');
        return
    }
    let token = request.url.match(/token=([^&]+)/)[1];
    const options = {
        host: '104.128.90.141',
        port: 8081,
        path: `/?filename=${packname}.zip`,
        method: 'POST',
        headers: {
            'token': token,
            'Content-Type': 'application/octet-stream'
        }
    }
    const archive = archiver('zip', {
        zlib: { level: 9 }
    });

    archive.directory(packname, false);

    const req = http.request(options, res => {
        console.log(`STATUS: ${res.statusCode}`);
    });

    req.on('error', e => {
        console.log(e.message)
    })
    archive.pipe(req)
    archive.pipe(fs.createWriteStream('example.zip'))

    archive.on('end', () => {
        req.end();
        res.end("public success")
        server.close()
    })
    archive.finalize();
})
server.listen(8080)
// fs.stat(filename, (err, stat) => {

/*let readStream = fs.createReadStream("./" + packname);

readStream.pipe(req)
readStream.on('end', () => {
    req.end();
})
*/
    // req.write(postData);
    // req.end();
// })



