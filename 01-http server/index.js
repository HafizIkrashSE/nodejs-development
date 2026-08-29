const http = require('http');
const fs = require('fs');
const url = require('url');

function myhandler(req, res) {
    if (req.url === '/favicon.ico') {
        return res.end();
    }

    const log = `${Date.now()}: ${req.method} ${req.url} New Request Received\n`;
    const myUrl = url.parse(req.url, true);

    fs.appendFile("log.txt", log, (err) => {
        if (err) {
            console.log("Error writing to log file:", err);
            return;
        }

        switch (myUrl.pathname) {
            case '/':
                if (req.method === "GET") {
                    res.end("Welcome to the home page");
                }
                break;

            case '/about':
                const username = myUrl.query.myname || "Guest";
                res.end(`Hi, ${username}`);
                break;

            case '/search':
                const search = myUrl.query.search_query || "";
                res.end(
                    "Here are the search results for your query: " + search
                );
                break;

            case '/signup':
                if (req.method === "GET") {
                    res.end("Welcome to the signup page");
                } else if (req.method === "POST") {
                    // DB query
                    res.end("Success");
                }
                break;

            default:
                res.statusCode = 404;
                res.end("404 Not Found");
                break;
        }
    });
}

const myserver = http.createServer(myhandler);

myserver.listen(3000, () => {
    console.log("Server is listening on port 3000");
});