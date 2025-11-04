//Load http module to create a http server
import http from 'http';
import dotenv from 'dotenv';

dotenv.config();

const port = process.env.PORT;
//configure http server to respond with hello world to all requests
const server = http.createServer((req,res) => {
    res.writeHead(200);
    res.end("Hello WAD2!");
});

server.listen(port);

//put message on the terminal
console.log(`Server running at ${port}`);