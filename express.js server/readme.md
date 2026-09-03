# 02-Express.js Server Project

## Description

A basic Express.js server project built with Node.js and Express.js. This project demonstrates how to create a server, handle HTTP requests, create routes, use middleware, and return responses.

## Features

- Express.js server
- GET routes
- POST routes
- PATCH routes
- DELETE routes
- URL parameters
- JSON request handling
- URL-encoded form handling
- Custom middleware
- Request logging
- CRUD API for users

## Technologies Used

- Node.js
- Express.js
- JavaScript
- JSON
- Postman

## Project Structure

```text
express-server/
├── index.js
├── log.txt
├── package.json
├── package-lock.json
└── README.md
````

## API Routes

| Method | Route            | Description       |
| ------ | ---------------- | ----------------- |
| GET    | `/api/users`     | Get all users     |
| GET    | `/api/users/:id` | Get a user by ID  |
| POST   | `/api/users`     | Create a new user |
| PATCH  | `/api/users/:id` | Update a user     |
| DELETE | `/api/users/:id` | Delete a user     |

## Middleware

The project uses Express middleware for handling:

* JSON data
* URL-encoded form data
* Request logging

## How It Works

The server starts using Express.js and listens on a specific port.

Requests are received by the server and matched with the appropriate route. Each route performs the required operation and sends a response back to the client.

The request information is also recorded in `log.txt`.

## Testing

The API can be tested using **Postman** by sending GET, POST, PATCH, and DELETE requests to the available routes.

## Installation

```bash
npm install
```

## Run the Project

```bash
npm start
```

The server will run on:

```text
http://localhost:3000
```

## Learning Outcomes

* Understanding Node.js and Express.js
* Creating an HTTP server
* Working with Express routes
* Understanding middleware
* Building REST APIs
* Handling request and response objects
* Performing CRUD operations
* Testing APIs using Postman


