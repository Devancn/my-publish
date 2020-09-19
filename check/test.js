{
    var code = "e2157a147253aeaae5df";
    var state = "abc123";
    var client_secret = "b139bd01326a927c643602da4eb2231e4fe14b6e";
    var client_id = "Iv1.7dcb69595c80f31f";
    var redirect_uri = encodeURIComponent("http://localhost:8000");
    var params = `code=${code}&state=${state}&client_secret=${client_secret}&client_id=${client_id}&redirect_uri=${redirect_uri}`
    var xhr = new XMLHttpRequest
    xhr.open("POST", `https://github.com/login/oauth/access_token?${params}`, true);
    xhr.send(null)
    // xhr.setRequestHeader("Authorization", "token ");
    xhr.addEventListener("readystatechange", event => {
        if (xhr.readyState === 4) {
            console.log(xhr.responseText)
        }
    })
}
{
    var xhr = new XMLHttpRequest
    xhr.open("GET", `https://api.github.com/user`, true);
    xhr.setRequestHeader("Authorization", "token 98e931d3a8ea10bc1c84ae90042782a19a7285ea");
    xhr.send(null)
    xhr.addEventListener("readystatechange", event => {
        console.log(event)
        if (xhr.readyState === 4) {
            console.log(xhr.responseText)
        }
    })
}

// widnows 唤起浏览器 cmd start http:www.baidu.com