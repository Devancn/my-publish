const http = require('http');
const fs = require('fs');
const unzip = require('unzipper');
const https = require('https');

const server = http.createServer((req, res) => {
    if (req.url.match(/^\/auth/))
        return auth(req, res)
    if (!req.url.match(/^\/?/)) {
        res.writeHead(404, { 'Content-Type': 'text/plain' })
        res.end('not found');
        return
    }

    const options = {
        hostname: 'api.github.com',
        port: 443,
        path: `/user`,
        method: 'GET',
        headers: {
            Authorization: `token ${req.headers.token}`,
            "User-Agent": "my-publish-server"
        }
    }
    const request = https.request(options, response => {
        let body = "";
        response.on('data', d => {
            body += d.toString();
        })
        response.on('end', d => {
            let user = JSON.parse(body)
            // 获取到用户信息后做权限校验（略）
            let writeStream = unzip.Extract({ path: '../server/public' })
            req.pipe(writeStream);
            req.on('end', () => {
                res.writeHead(200, { 'Content-Type': 'text/plain' })
                res.end('okay');
            })

        })
    })


    request.on('error', e => {
        console.log(e)
    })
    request.end();

})

function auth(req, res) {
    let code = req.url.match(/code=([^&]+)/)[1];
    var state = "abc123";
    var client_secret = "b139bd01326a927c643602da4eb2231e4fe14b6e";
    var client_id = "Iv1.7dcb69595c80f31f";
    var redirect_uri = encodeURIComponent("http://localhost:8081/auth");
    var params = `code=${code}&state=${state}&client_secret=${client_secret}&client_id=${client_id}&redirect_uri=${redirect_uri}`
    var url = `https://github.com/login/oauth/access_token?${params}`;


    const options = {
        hostname: 'github.com',
        port: 443,
        path: `/login/oauth/access_token?${params}`,
        method: 'POST'
    }
    const request = https.request(options, response => {
        response.on('data', d => {
            let result = d.toString().match(/access_token=([^&]+)/);
            if (result) {
                let token = result[1];
                res.writeHead(200, {
                    'access_token': token,
                    'Content-Type': 'text/html'
                })
                res.end(`<a href="http://localhost:8080/publish?token=${token}">publish</a>`);
            } else {
                res.writeHead(200, {
                    'Content-Type': 'text/plain'
                })
                res.end('error');
            }

        })
    })


    request.on('error', e => {
        console.log(e)
    })
    request.end();

    // res.writeHead(200, { 'Content-Type': 'text/plain' })
    // res.end('okay');
}

server.listen(8081)