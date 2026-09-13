# 🔗 URL Shortener

A full-stack URL Shortener built with **Node.js, Express.js, MongoDB, Mongoose, and EJS**.
The project includes **JWT-based authentication** and **role-based authorization** for secure access to protected routes.

## ✨ Features

* User Signup & Login
* JWT-based authentication
* JWT stored in HTTP cookies
* Role-based authorization (`ADMIN` / `NORMAL`)
* Create short URLs
* Redirect short URLs to original URLs
* Track URL visit history
* Users can view their own URLs
* Admins can view all URLs
* Protected routes using authentication middleware
* MongoDB database with Mongoose
* MVC-based project structure
* EJS templates for frontend views

## 🛠️ Tech Stack

* **Backend:** Node.js, Express.js
* **Database:** MongoDB, Mongoose
* **Authentication:** JWT, Cookie Parser
* **Frontend:** EJS, HTML, CSS
* **Language:** JavaScript

## 📁 Project Structure

```text
short-url/
│
├── controllers/
│   ├── url.js
│   └── user.js
│
├── middlewares/
│   └── auth.js
│
├── models/
│   ├── url.js
│   └── user.js
│
├── routes/
│   ├── staticRouter.js
│   ├── url.js
│   └── user.js
│
├── service/
│   └── auth.js
│
├── views/
│   ├── home.ejs
│   ├── login.ejs
│   └── signup.ejs
│
├── public/
│   └── style.css
│
├── connect.js
├── index.js
├── package.json
└── README.md
```

## 🔐 Authentication & Authorization

The project uses **JWT** for authentication.

```text
Login
  ↓
Verify Credentials
  ↓
Generate JWT
  ↓
Store JWT in Cookie
  ↓
Authentication Middleware
  ↓
req.user
  ↓
Role-Based Authorization
```

### Roles

| Role     | Access                                   |
| -------- | ---------------------------------------- |
| `NORMAL` | Create and view own URLs                 |
| `ADMIN`  | Create, view own URLs, and view all URLs |

The `auth.js` middleware handles:

* Checking the JWT from cookies
* Identifying the logged-in user
* Restricting routes according to user roles

## 🔗 URL Shortening

When a user creates a short URL:

```text
Original URL
     ↓
Generate Short ID
     ↓
Save in MongoDB
     ↓
Return Short URL
     ↓
Redirect to Original URL
```

Each URL also stores its **creator** and **visit history**.

## 🌐 Main Routes

| Method | Route           | Access         |
| ------ | --------------- | -------------- |
| GET    | `/`             | NORMAL / ADMIN |
| GET    | `/login`        | Public         |
| GET    | `/signup`       | Public         |
| POST   | `/user`         | Public         |
| POST   | `/user/login`   | Public         |
| POST   | `/url`          | NORMAL / ADMIN |
| GET    | `/url/:shortId` | Public         |
| GET    | `/admin/urls`   | ADMIN          |

## 🗄️ Database

**Database:** `short-url`

### Users Collection

```text
name
email
password
role
```

### URLs Collection

```text
shortId
redirectURL
createdBy
visitHistory
```

## 🚀 Installation

```bash
git clone <repository-url>
cd short-url
npm install
npm start
```

Run the application at:

```text
http://localhost:8001
```

Make sure MongoDB is running locally or provide your MongoDB connection string through the environment variable.

## 📌 Future Improvements

* Password hashing with bcrypt
* Better input validation
* Improved error handling
* Admin dashboard
* URL analytics
* URL expiration
* Deployment

## 👨‍💻 Author

**Hafiz Ikrash Riaz**
BS Computer Science — University of Education, Township Campus, Lahore

GitHub: **[HafizIkrashSE](https://github.com/HafizIkrashSE)**

**Project Status:** In Development
