const glob = require('../environment/glob');

const http = require('node:http');
const hostname = glob.hostname;
const port = glob.port;
// Express Method
const express = require('express');
const app = express();
// Access BodyJson *
app.use(express.json());

app.get('/demo', (req, res) => {
    const resQueryParams = req.query;    // Get Query Params
    const resHeader = req.headers;       // Get Headers Data
    const resBodyData = req.body;        // Get Body Json
    const resFileData = req.file         // Get Files Data

    const resData = {
        runningURL: {
            URL : `http://${hostname}:${port}${req.path}`
        },
        QueryParams: resQueryParams,
        Header: resHeader,
        BodyJson: resBodyData,
        fileData: resFileData
    }

    console.log("BodyJson = ",resData);

    // Sending Response
    res.json(resData);

});

// Running Server
app.listen(port,hostname,() => {
    console.log(`\nServer Running on ${hostname}/${port}/`)
})

// HTTP Method
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello I"m coming from HTTP Method !\n');
  });
  
// Run Server
// server.listen(port, hostname, () => {
//     console.log(`Server running at http://${hostname}:${port}/`);
//   }); 
