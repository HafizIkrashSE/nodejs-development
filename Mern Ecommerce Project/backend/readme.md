# 🛒 E-Commerce Store Backend

A complete **E-Commerce Store Backend** built with **Node.js, Express.js, MongoDB, and Mongoose**. The backend provides the core server-side functionality required for an online store, including product management, user management, authentication utilities, admin operations, API features, email functionality, and centralized error handling.

The project follows a structured **MVC architecture** to keep the application modular, maintainable, and scalable.

## ✨ Features

### 👤 User Management

* User model and database integration
* Admin user management
* Get all users
* Get a single user
* Update user information
* Delete users
* User roles

### 📦 Product Management

* Create products
* Get all products
* Get individual products
* Update products
* Delete products
* Product database management
* Product querying and filtering

### 🔐 Authentication & Security

* JWT token functionality
* User authentication support
* Role-based user structure
* Secure environment variable configuration

### 🔎 API Features

* Filtering
* Searching
* Query handling
* Pagination support
* Reusable API feature utility

### 📧 Email Functionality

* Email utility for application emails
* Centralized email-sending functionality

### 🛡️ Error Handling

* Custom `ErrorHandler` class
* Centralized error-handling middleware
* Proper HTTP status codes
* Structured error responses
* Handling invalid IDs and missing resources

## 🛠️ Technologies Used

| Technology     | Purpose                       |
| -------------- | ----------------------------- |
| **Node.js**    | Backend runtime               |
| **Express.js** | Server and REST API framework |
| **MongoDB**    | Database                      |
| **Mongoose**   | MongoDB ODM                   |
| **JWT**        | Authentication tokens         |
| **Nodemailer** | Email functionality           |
| **dotenv**     | Environment configuration     |
| **Nodemon**    | Development server            |
| **Postman**    | API testing                   |

## 📁 Project Structure

```text
ecommerce/
│
├── backend/
│   │
│   ├── config/
│   │   └── config.env
│   │
│   ├── controllers/
│   │   ├── productController.js
│   │   └── userController.js
│   │
│   ├── middlewares/
│   │   └── error.js
│   │
│   ├── models/
│   │   ├── productModel.js
│   │   └── userModel.js
│   │
│   ├── routes/
│   │   ├── productRoute.js
│   │   └── userRoute.js
│   │
│   ├── utils/
│   │   ├── apiFeatures.js
│   │   ├── errorHandler.js
│   │   ├── jwTToken.js
│   │   └── SendEmail.js
│   │
│   ├── app.js
│   └── server.js
│
├── package.json
├── package-lock.json
└── README.md
```

## 🏗️ Backend Architecture

The backend follows the **MVC (Model-View-Controller) pattern**.

```text
                    Client / Frontend
                           │
                           ▼
                         Routes
                           │
                           ▼
                      Controllers
                           │
                           ▼
                         Models
                           │
                           ▼
                        MongoDB
                           │
                           ▼
                       Response
```

Error handling is managed separately through middleware and utility classes.

## 📦 Product Management

The product module provides the core functionality for managing products in the store.

### Available Operations

```text
GET     /api/v1/products
POST    /api/v1/product/new
PUT     /api/v1/product/:id
DELETE  /api/v1/product/:id
```

These endpoints allow the store to create, retrieve, update, and delete products.

## 👤 Admin User Management

The backend includes dedicated admin routes for managing users.

### Available Operations

```text
GET     /api/v1/admin/users
GET     /api/v1/admin/users/:id
PUT     /api/v1/admin/users/:id
DELETE  /api/v1/admin/users/:id
```

### Example Update

```json
{
  "name": "Tayyab Ali",
  "email": "Tayyab@gmail.com",
  "role": "admin"
}
```

## 🔐 JWT Authentication

JWT functionality is organized in:

```text
backend/utils/jwTToken.js
```

It provides the foundation for creating and handling authentication tokens within the application.

## 🔎 API Features

Reusable API functionality is implemented in:

```text
backend/utils/apiFeatures.js
```

The utility is designed to support features such as:

* Filtering
* Searching
* Pagination
* Query customization

This keeps database querying logic reusable and helps maintain cleaner controllers.

## 📧 Email Service

Email functionality is organized in:

```text
backend/utils/SendEmail.js
```

This utility provides the foundation for sending emails from the application, such as authentication or account-related emails.

## 🛡️ Error Handling

The application uses centralized error handling through:

```text
backend/utils/errorHandler.js
backend/middlewares/error.js
```

This allows errors to be handled consistently throughout the application.

Example:

```json
{
  "success": false,
  "message": "User not found"
}
```

## 🗄️ Database

The application uses **MongoDB** with **Mongoose**.

Mongoose is used for:

* Creating schemas
* Data validation
* Database queries
* CRUD operations
* MongoDB document management

## ⚙️ Environment Configuration

The backend configuration is stored in:

```text
backend/config/config.env
```

Example:

```env
PORT=4000
MONGO_URI=your_mongodb_connection_string
```

Sensitive credentials should never be committed to the repository.

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone YOUR_REPOSITORY_URL
```

### 2. Navigate to the project

```bash
cd ecommerce
```

### 3. Install dependencies

```bash
npm install
```

### 4. Configure environment variables

Create/configure:

```text
backend/config/config.env
```

Add your MongoDB connection string and other required configuration values.

### 5. Run the development server

```bash
npm run dev
```

The backend will start at:

```text
http://localhost:4000
```

For production/start mode:

```bash
npm start
```

## 🧪 Testing

The backend has been tested using **Postman**.

Testing includes:

* Product CRUD operations
* User management
* Admin operations
* Database operations
* Invalid resource IDs
* Resource-not-found responses
* Validation errors
* API request/response handling

## 🔮 Future Enhancements

The backend can be extended with additional e-commerce functionality such as:

* Shopping cart
* Orders and order management
* Product reviews and ratings
* Payment gateway integration
* Product image uploads
* Advanced authentication and authorization
* Admin dashboard
* Order tracking
* Production deployment
* Additional security features

## 👨‍💻 Author

**Hafiz Ikrash Riaz**

BS Computer Science | MERN Stack Developer

GitHub: [HafizIkrashSE](https://github.com/HafizIkrashSE)


⭐ **Built as a full-stack e-commerce backend foundation using the MERN stack.**
