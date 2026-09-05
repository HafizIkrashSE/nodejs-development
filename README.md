# Node.js HTTP Server

A simple HTTP server project built using the core `http` module of Node.js without using Express.js.

This project was created to understand the fundamentals of Node.js, HTTP requests and responses, routing, file system operations, modules, and npm scripts.

## Features

* Basic HTTP server using Node.js `http` module
* Handles different routes
* Sends HTTP responses
* Uses appropriate HTTP status codes
* Uses the `fs` module for file operations
* Demonstrates CommonJS modules
* Demonstrates basic Node.js event-driven architecture
* Uses npm and `package.json` scripts
* Built without Express.js

## Technologies Used

* Node.js
* JavaScript
* Node.js `http` module
* Node.js `fs` module
* npm

## Project Structure

```text
node-http-server/
│
├── index.js
├── package.json
├── package-lock.json
└── README.md
```

## Installation

Clone the repository:

```bash
git clone <your-repository-url>
```

Navigate to the project folder:

```bash
cd node-http-server
```

Install dependencies:

```bash
npm install
```

## Run the Server

Start the server using:

```bash
npm start
```

Or run directly with Node.js:

```bash
node index.js
```

The server will run on the port defined in the project, for example:

```text
http://localhost:8000
```

## Example HTTP Server

```javascript
const http = require("http");

const server = http.createServer((req, res) => {
  res.end("Hello from Node.js HTTP Server");
});

server.listen(8000, () => {
  console.log("Server started on port 8000");
});
```

## Node.js Event Loop

The Node.js event loop allows Node.js to perform non-blocking and asynchronous operations.

Instead of waiting for one task to finish before starting another, Node.js can handle other operations while tasks such as file reading, database operations, or network requests are being completed.

This makes Node.js efficient for applications that handle many requests.

## File System Module

The Node.js `fs` module is used to interact with files.

Example:

```javascript
const fs = require("fs");

fs.writeFileSync("example.txt", "Hello from Node.js");

const data = fs.readFileSync("example.txt", "utf-8");

console.log(data);
```

It can be used to:

* Read files
* Write files
* Append data
* Delete files
* Rename files

## CommonJS Modules

Node.js supports CommonJS modules using:

```javascript
require()
```

to import modules and:

```javascript
module.exports
```

to export functionality from one file to another.

Example:

```javascript
const fs = require("fs");
```

## npm and package.json

npm is the package manager used with Node.js.

The `package.json` file contains information about the project, dependencies, and scripts.

Example:

```json
{
  "scripts": {
    "start": "node index.js"
  }
}
```

The server can then be started using:

```bash
npm start
```

## Learning Outcomes

Through this project, I learned:

* Node.js fundamentals
* How the Node.js event loop works
* How to create a server using the `http` module
* How HTTP requests and responses work
* Basic routing
* Using the `fs` module for file operations
* CommonJS modules
* npm and package management
* `package.json` scripts
* The fundamentals behind web servers before using Express.js

## Purpose

The purpose of this project is to build a strong understanding of Node.js core concepts before moving to frameworks such as Express.js and building more advanced REST APIs.

## Author

**Hafiz Ikrash**
