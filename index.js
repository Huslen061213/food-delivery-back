require("dotenv").config();

const express = require("express");
const cors = require("cors");
const connectToDB = require("./db");
const userRouter = require("./routes/userRoutes");
const categoryRouter = require("./routes/categoryRoutes");
const AuthenticationRouter = require("./routes/authenticationRoutes");
const dishRouter = require("./routes/dishRoutes");

const app = express();
const PORT = process.env.PORT || 999;
const corsOrigin = process.env.CORS_ORIGIN;

app.use(
  cors(
    corsOrigin
      ? {
          origin: corsOrigin.split(",").map((origin) => origin.trim()),
        }
      : undefined
  )
);
app.use(express.json({ limit: "10mb" }));

connectToDB();

app.use("/user", userRouter);
app.use("/foodCategory", categoryRouter);
app.use("/dish", dishRouter);
app.use("/authentication", AuthenticationRouter);
app.get("/", (req, res) => {
  res.send("hello world working");
});

app.listen(PORT, () => {
  console.log(`API listening on http://localhost:${PORT}`);
});
