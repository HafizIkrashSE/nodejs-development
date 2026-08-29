# 🟢 Node.js HTTP Server

A basic **HTTP server built with Node.js core modules**, created as part of my Node.js fundamentals learning journey.

This project focuses on understanding how Node.js works internally and how to build a web server **without using Express.js**.

## 🚀 Features

* Built a basic HTTP server using Node.js
* Handles incoming HTTP requests
* Uses the `fs` module for file read/write operations
* Uses the `url` module to parse request URLs and query parameters
* Logs incoming requests to a file
* Uses CommonJS modules
* Uses npm scripts to run the server
* No Express.js or external dependencies

## 🛠️ Technologies & Modules

* **Node.js**
* **HTTP Module** — Creates the web server
* **File System (`fs`)** — Reads and writes files
* **URL Module** — Parses URLs and query parameters
* **CommonJS** — Module system used by Node.js
* **npm** — Project and script management

## 📁 Project Structure

```text
server/
├── index.js
├── package.json
├── package-lock.json
├── log.txt
└── .gitignore
```

## ⚙️ Installation

Clone the repository:

```bash
git clone <your-repository-url>
```

Navigate into the project:

```bash
cd server
```

Install dependencies:

```bash
npm install
```

> This project uses only Node.js built-in modules, so there are no external dependencies to install.

## ▶️ Run the Server

Start the server using the npm script:

```bash
npm start
```

The server will run on:

```text
http://localhost:3000
```

Open the URL in your browser or send requests using a tool such as Postman.

## 📝 Request Logging

The server records incoming requests using the `fs` module.

Example log:

```text
1787988853088:GET / New Request Received
1787988861234:GET /about New Request Received
```

These logs are stored in `log.txt`.

## 🧠 Node.js Concepts Practiced

### 1. HTTP Module

Used Node.js's built-in `http` module to create an HTTP server without Express.

```js
const http = require("http");
```

### 2. File System

Used the `fs` module for file operations and request logging.

```js
const fs = require("fs");
```

### 3. URL Parsing

Used the built-in `url` module to parse request URLs and query parameters.

```js
const url = require("url");
```

### 4. CommonJS

The project uses the CommonJS module system:

```js
const http = require("http");
```

This is enabled through:

```json
"type": "commonjs"
```

### 5. npm Scripts

The server can be started with:

```bash
npm start
```

using the script defined in `package.json`:

```json
"scripts": {
  "start": "node index.js"
}
```

### 6. Node.js Event Loop

This project also helped me understand how Node.js handles asynchronous operations using its event-driven architecture and event loop.

## 📌 Learning Outcomes

Through this project, I practiced:

* Creating an HTTP server from scratch
* Understanding request and response objects
* Handling different URLs and HTTP methods
* Working with the Node.js file system
* Parsing URLs and query parameters
* Understanding CommonJS modules
* Using npm and `package.json`
* Understanding the Node.js event loop
* Building a server without relying on Express.js

## 👨‍💻 Author

**Hafiz Ikrash**

BS Computer Science Student | Full Stack AI Engineering

---

⭐ This project was built while learning **Node.js Fundamentals** and understanding the core concepts behind Node.js web servers.
