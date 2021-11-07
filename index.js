const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    const url = req.url;
    const fileName = (url === '/') ? './index.html' : `.${url}.html`;
    fs.readFile(fileName, 'utf-8', (err, data) => {
        if (err) {
            return fs.readFile('./404.html', 'utf-8', (err, errorData) => {
                if (err) {
                    throw err;
                }
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.write(errorData);
                console.log('sdsad', errorData);
                return res.end();
            });
        }
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        return res.end();
    });
});

console.log('server created');

server.listen(8080);

console.log('server started, listening on port 8080');