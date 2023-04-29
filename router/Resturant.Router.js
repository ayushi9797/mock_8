const express = require("express");
const { RestaurantModel } = require("../models/Resturant.Model");

const app = express();
const ResturantRouter = express.Router();
ResturantRouter.use(express.json());

// Get all Resturants

ResturantRouter.get("/api/restaurants", async (req, res) => {
  try {
    let data = await RestaurantModel.find();
    console.log(data);
    console.log(` Get your RESTAURANT `);
    res.status(200).send(data);
  } catch (error) {
    console.log(error.message);
    res.status(404).send(`error in getting your RESTAURANT`);
  }
});

// GEt by id

ResturantRouter.get("/api/restaurants/:id", async (req, res) => {
  try {
    let id = req.params.id;
    let data = await RestaurantModel.findById(id);
    console.log(data);
    console.log(` Get your RESTAURANT `);
    res.status(200).send(data);
  } catch (error) {
    console.log(error.message);
    res.status(404).send(`error in getting your RESTAURANT`);
  }
});

// getting by menu id

ResturantRouter.get("/api/restaurants/:id", async (req, res) => {
    try {
      let id = req.params.id;
      let data = await RestaurantModel.findById(id);
      data = data.menu
      console.log(data);
      console.log(` Get your RESTAURANT `);
      res.status(200).send(data);
    } catch (error) {
      console.log(error.message);
      res.status(404).send(`error in getting your RESTAURANT`);
    }
  });
  


// posting menu items by id

ResturantRouter.patch("/:id/menu", async (req, res) => {
  try {
    let id = req.params.id;
    console.log(id);
    let data = await RestaurantModel.findById(id);
    data.menu.push(req.body);
    await data.save();
    console.log(data);
    console.log(` Get your RESTAURANT `);
    res.status(201).send(data);
  } catch (error) {
    console.log(error.message);
    res.status(404).send(`error in getting your RESTAURANT`);
  }
});

// Add your Resturants

ResturantRouter.post("/api/restaurants", async (req, res) => {
  try {
    let restaurant = req.body;
    console.log(restaurant);

    let data = new RestaurantModel(restaurant);
    await data.save();
    console.log(data);
    console.log(` ADD your RESTAURANT `);
    res.status(201).send(data);
  } catch (error) {
    console.log(error.message);
    res.status(404).send(`error in ADDING your RESTAURANT`);
  }
});

// update ResTAURANT

ResturantRouter.post("/api/restaurants/:id/menu", async (req, res) => {
  try {
    let id = req.params.id;
    let restaurant = req.body;
    let data = await RestaurantModel.findByIdAndUpdate(id, restaurant);
    console.log(data);
    console.log(` update your menu from  RESTAURANT `);
    res.status(201).send(data);
  } catch (error) {
    console.log(error.message);
    res.status(404).send(`error in update your menu from  RESTAURANT`);
  }
});

// Delete menu from restaurant

ResturantRouter.delete("/api/restaurants/:id/menu/:id", async (req, res) => {
  try {
    let id = req.params.id;

    let data = await RestaurantModel.findByIdAndRemove(id);
    console.log(data);
    console.log(` Delete your  menu from RESTAURANT `);
    res.status(202).send(data);
  } catch (error) {
    console.log(error.message);
    res.status(404).send(`error in Delete your  menu from RESTAURANT `);
  }
});

module.exports = {
  ResturantRouter,
};
