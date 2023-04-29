const express = require("express");
const { OrderModel } = require("../models/Order.Model");

const app = express();
const OrderRouter = express.Router();
OrderRouter.use(express.json());

// Get all Orders

// Get all Resturants

OrderRouter.get("/api/orders", async (req, res) => {
  try {
    let data = await OrderModel.find();
    console.log(data);
    console.log(` Get your order `);
    res.status(200).send(data);
  } catch (error) {
    console.log(error.message);
    res.status(404).send(`error in getting your order`);
  }
});

// GEt by id

OrderRouter.get("/api/orders/:id", async (req, res) => {
  try {
    let id = req.params.id;
    let data = await OrderModel.findById(id);
    console.log(data);
    console.log(` Get your order `);
    res.status(200).send(data);
  } catch (error) {
    console.log(error.message);
    res.status(404).send(`error in getting your order`);
  }
});

// Add your Resturants

OrderRouter.post("/api/orders", async (req, res) => {
  try {
    let order = req.body;
    console.log(order);

    let data = new OrderModel(order);
    await data.save();
    console.log(data);
    console.log(` ADD your order `);
    res.status(201).send(data);
  } catch (error) {
    console.log(error.message);
    res.status(404).send(`error in ADDING your order`);
  }
});

// update order

OrderRouter.patch("/api/orders/:id", async (req, res) => {
  try {
    let id = req.params.id;
    let order = req.body;
    let data = await OrderModel.findByIdAndUpdate(id, order);
    console.log(data);
    console.log(` update your menu from  order `);
    res.status(204).send(data);
  } catch (error) {
    console.log(error.message);
    res.status(404).send(`error in update your menu from  order`);
  }
});

// Delete menu from order

OrderRouter.delete("/api/orders/:id/menu/:id", async (req, res) => {
  try {
    let id = req.params.id;

    let data = await OrderModel.findByIdAndRemove(id);
    console.log(data);
    console.log(` Delete your  menu from order `);
    res.status(204).send(data);
  } catch (error) {
    console.log(error.message);
    res.status(404).send(`error in Delete your  menu from order `);
  }
});

module.exports = {
  OrderRouter,
};
