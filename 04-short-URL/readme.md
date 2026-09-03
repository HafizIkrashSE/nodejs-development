
# URL Shortener

A simple URL Shortener web application built with **Node.js, Express.js, MongoDB, Mongoose, EJS, HTML, and CSS**.

## Features

- Generate short URLs
- Redirect short URLs to original URLs
- Track URL clicks
- Store visit timestamps
- View URL analytics
- MongoDB database integration
- EJS server-side rendering
- Simple and clean UI

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- EJS
- HTML
- CSS
- Nanoid

## Project Structure

```text
short-url/
│
├── controllers/
│   └── url.js
├── models/
│   └── url.js
├── routes/
│   ├── staticRouter.js
│   └── url.js
├── views/
│   └── home.ejs
├── public/
│   └── style.css
├── connect.js
├── index.js
├── package.json
├── package-lock.json
└── README.md
````

## How It Works

1. Enter an original URL.
2. Click **Generate**.
3. A unique short URL is created.
4. The URL is stored in MongoDB.
5. Opening the short URL redirects to the original URL.
6. Each visit is recorded in `visitHistory`.
7. The analytics table displays the total number of clicks.

## Routes

```text
POST /url
GET /url/analytics/:shortId
GET /:shortId
```

## Run the Project

```bash
npm install
npm start
```

Open:

```text
http://localhost:8001
```

## MongoDB

Database:

```text
short-url
```

Connection:

```text
mongodb://127.0.0.1:27017/short-url
```

## Author

**Hafiz Ikrash**

GitHub: **HafizIkrashSE**

## License

This project is created for learning and educational purposes.


