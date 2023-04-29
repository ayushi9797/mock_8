const mongoose = require("mongoose");

const RestaurantSchema = new mongoose.Schema({
  name: String,
  address: {
    street: String,
    city: String,
    state: String,
    country: String,
    zip: String,
  },
  menu: [
    {
      name: String,
      description: String,
      price: Number,
      image: String,
    },
  ],
});
const RestaurantModel = mongoose.model("Restaurants", RestaurantSchema);

module.exports = {
  RestaurantModel,
};


// {
//     " name": "ayu",
//     " address": {
//       "street": "abc",
//       "city": "a",
//       "state": "a",
//       "country": "a",
//       " zip": "o"
//     },
//     "menu": [
//       {
//         " name": "String",
//         "description": " String",
//         "price": 123,
//         "image": "String"
//       }
//     ]
//   }