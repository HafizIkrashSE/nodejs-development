const app = require("./app");
const dotenv = require("dotenv");
const connectDatabase = require("./config/database");

//Handling uncaught exception
process.on("uncaughtException",(err) =>{
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server due to uncaught exception`);

  process.exit(1);
  
});
//config
dotenv.config({ path: "backend/config/config.env" });

const PORT = process.env.PORT || 4000;

//connecting to database
connectDatabase();

const server = app.listen(PORT, () => {
    console.log(`Server is working on http://localhost:${PORT}`);
});

//Unhandled Promise Rejection
process.on("unhandledRejection", (err) => {
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server due to Unhandled Promise Rejection`);

    server.close(() => {
        process.exit(1);
    });
});
