var page = require('webpage').create();

page.open('http://baidu.com', function (status) {
    console.log('status:' + status);
    if (status === 'success') {
        var body = page.evaluate(function () {
            var toString = function (pad, element) {
                var children = element.childNodes;
                var childrenString = '';
                for (var i = 0; i < children.length; i++) {
                    childrenString += toString("  " + pad, children[i]) + "\n";
                }
                var name = element.tagName;
                if (element.nodeType === Node.TEXT_NODE) {
                    name = "#text" + JSON.stringify(element.textContent);
                }
                if (element.nodeType === Node.ELEMENT_NODE) {
                    name = element.tagName;
                }
                return pad + name + (childrenString.length ? "\r\n" + childrenString : "");
            }
            return toString("", document.body)
        })
        console.log(body);
    }
    phantom.exit();
})