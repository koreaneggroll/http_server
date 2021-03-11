const http = require('http');

const host = "localhost";
const port = 8000;

const requestListener = function(req, res) {
    res.setHeader("Content-type", "text/csv");
    res.setHeader("Content-Disposition", "attachement:filename=oceanpals.csv");
    res.writeHead(200);
    res.end(`id,name,email\n1, Arin Grigoras, aringrigoras@gmail.com`);
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});