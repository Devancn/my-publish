const fs = require('fs');
const http = require('http');
const archiver = require('archiver');
const child_process = require('child_process');
let packname = "package";


const redirect_uri = encodeURIComponent(`http://localhost:8081/auth`)
child_process.exec(`start https://github.com/login/oauth/authorize?client_id=Iv1.7dcb69595c80f31f&redirect_uri=${redirect_uri}&scope=read%3Auser&state=123abc`)
const server = http.createServer((request, res) => {
    let token = request.url.match(/token=([^&]+)/)[1];
    const options = {
        host: 'localhost',
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

    archive.finalize();

    const req = http.request(options, res => {
        console.log(`STATUS: ${res.statusCode}`);
    });

    req.on('error', e => {
        console.log(e.message)
    })

    archive.pipe(req)

    archive.on('end', () => {
        req.end();
        res.end("public success")
        server.close()
    })

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



