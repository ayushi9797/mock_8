const express = require("express");
const { connection } = require("./config/db");
const { UserRouter } = require("./router/User.Router");
const { ResturantRouter } = require("./router/Resturant.Router");
const { OrderRouter } = require("./router/Order.Router");
const { authentication } = require("./middleware/auth");

const app = express();

app.use("/", UserRouter);
app.use(authentication);
app.use("/", ResturantRouter);
app.use("/", OrderRouter);

app.use(express.json());

//!routers

//Making Home route
app.get("/home", async (req, res) => {
  try {
    res.send(`<h1>THIS IS THE HOME ROUTE</h1>`);
  } catch (error) {
    console.log(error.message);
  }
});

// connection to server

app.listen(process.env.port, async () => {
  try {
    await connection;
    console.log(`app listening on port ${process.env.port}`);
  } catch (error) {
    console.log({ error: `error in connections with port: ${error.message}` });
  }
});
