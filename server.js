const http = require('http');
const host = "localhost";
const port = 8000;


const requestListener = function(req, res) {
    //res.writeHead(20);
    res.end("STUPET");
}

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});