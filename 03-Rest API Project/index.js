const express = require("express");
const fs = require("fs");
const mongoose = require("mongoose");

const app = express();
const PORT = 8000;

// Connect to MongoDB
mongoose
  .connect("mongodb://127.0.0.1:27017/database-01")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB:", err);
  });

// Schema
const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: false,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  jobTitle: {
    type: String,
    required: false,
  },
  gender: {
    type: String,
    required: false,
  },
});

// Model
const User = mongoose.model("User", userSchema);

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Logger Middleware
app.use((req, res, next) => {
  fs.appendFile(
    "log.txt",
    `\n${Date.now()}: ${req.ip}: ${req.method}: ${req.path}`,
    (err) => {
      next();
    }
  );
});

// GET all users
app.get("/api/users", async (req, res) => {
  try {
    const users = await User.find();

    res.setHeader("X-MyName", "Hafiz Ikrash");

    return res.json(users);
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
});

// GET, PATCH, DELETE user by ID
app
  .route("/api/users/:id")

  // GET one user
  .get(async (req, res) => {
    try {
      const user = await User.findById(req.params.id);

      if (!user) {
        return res.status(404).json({
          status: "error",
          message: "User not found",
        });
      }

      return res.json(user);
    } catch (error) {
      return res.status(400).json({
        status: "error",
        message: "Invalid user ID",
      });
    }
  })

  // PATCH user
  .patch(async (req, res) => {
    try {
      const user = await User.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
          new: true,
        }
      );

      if (!user) {
        return res.status(404).json({
          status: "error",
          message: "User not found",
        });
      }

      return res.json({
        status: "success",
        message: "User updated successfully",
        user,
      });
    } catch (error) {
      return res.status(400).json({
        status: "error",
        message: error.message,
      });
    }
  })

  // DELETE user
  .delete(async (req, res) => {
    try {
      const user = await User.findByIdAndDelete(req.params.id);

      if (!user) {
        return res.status(404).json({
          status: "error",
          message: "User not found",
        });
      }

      return res.json({
        status: "success",
        message: "User deleted successfully",
      });
    } catch (error) {
      return res.status(400).json({
        status: "error",
        message: "Invalid user ID",
      });
    }
  });

// POST - Create new user
app.post("/api/users", async (req, res) => {
  try {
    const body = req.body;

    if (!body.firstName || !body.email) {
      return res.status(400).json({
        status: "error",
        message: "First name and email are required",
      });
    }

    const user = await User.create({
      firstName: body.firstName,
      lastName: body.lastName,
      email: body.email,
      gender: body.gender,
      jobTitle: body.jobTitle,
    });

    return res.status(201).json({
      status: "success",
      message: "User created successfully",
      user,
    });
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server started at PORT ${PORT}`);
});