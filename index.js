const express = require("express");
const cors = require("cors");
const connectToDB = require("./db");
const UserModel = require("../Back-End/schemas/userSchema");
const CategoryModel = require("./schemas/foodCategorySchema");
const userRouter = require("./routes/userRoutes");
const categoryRouter = require("./routes/categoryRoutes");
const AuthenticationRouter = require("./routes/authenticationRoutes");

const app = express();
const PORT = process.env.PORT || 999;

app.use(cors());
app.use(express.json());

connectToDB();

app.use("/user", userRouter);
app.use("/foodCategory", categoryRouter);
app.use("/authentication", AuthenticationRouter);
app.get("/", (req, res) => {
  res.send("hello world working");
});

app.listen(PORT, () => {
  console.log(`API listening on http://localhost:${PORT}`);
});
